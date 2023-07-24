import axios from "axios";
import fs from "fs";
import { AstronomicalData, AstronomicalDatum } from "../types/astronomical";
import {
  OpenMeteoData,
  OpenMeteoHour,
  RawOpenMeteoData,
} from "../types/openmeteo";
import { SeaLevelData, SeaLevelDatum } from "../types/seaLevel";

export interface RawData {
  weatherData: OpenMeteoData;
  seaLevelData: SeaLevelData;
  astronomicalData: AstronomicalData;
}

export interface FilteredData {
  weather: OpenMeteoHour[];
  seaLevel: SeaLevelDatum[];
  astronomical: AstronomicalDatum;
}

const isDateBetween = (date: Date, earliest: Date, latest: Date) =>
  earliest <= date && date < latest;

export const addHoursToDate = (date: Date, hours: number) =>
  new Date(date.getTime() + hours * 60 * 60 * 1000);

export const filterData = (
  { weatherData, seaLevelData, astronomicalData }: RawData,
  time: Date
): FilteredData => {
  const now = time;
  const in24Hours = addHoursToDate(time, 24);

  // for weather get the next 24 hours of weather
  const weather: OpenMeteoHour[] = weatherData.hourly.filter((h) =>
    isDateBetween(new Date(h.time), now, in24Hours)
  );
  if (weather.length !== 24) {
    throw new Error(
      `can't find the next 24 hours of weather, only got ${weather.length}`
    );
  }

  // for sea level get the next 24 hours of levels, plus one before and one after
  const seaLevelIndexOfFirst = seaLevelData.data.findIndex(
    (d) => new Date(d.time) > now
  );
  const seaLevelIndexOfLast = seaLevelData.data.findIndex(
    (d) => new Date(d.time) > in24Hours
  );
  const seaLevel: SeaLevelDatum[] = seaLevelData.data.slice(
    seaLevelIndexOfFirst - 1,
    seaLevelIndexOfLast + 1
  );
  if (seaLevel.length !== 26) {
    throw new Error(
      `can't find the 26 hours of sea level, only got ${seaLevel.length}`
    );
  }

  // for astronomical get today's entry
  const astronomical = astronomicalData.data.find(
    (d) => d.time === now.toISOString().replace(/T.*/, "T12:00:00+00:00")
  );

  if (!astronomical) {
    throw new Error("can't find the astronomical data for today");
  }
  // console.log("tides :>> ", tides);

  return {
    weather,
    seaLevel,
    astronomical,
  };
};

const getDataFromCache = () => {
  const weatherData: OpenMeteoData = JSON.parse(
    fs.readFileSync("data/openmeteo.json", "utf-8")
  );
  const seaLevelData: SeaLevelData = JSON.parse(
    fs.readFileSync("data/seaLevel.json", "utf-8")
  );
  const astronomicalData: AstronomicalData = JSON.parse(
    fs.readFileSync("data/astronomical.json", "utf-8")
  );

  return {
    weatherData,
    seaLevelData,
    astronomicalData,
  };
};

const lat = "50.8171";
const lng = "-0.1189";

const fetchOpenMeteoData = async () => {
  console.log("Fetching fresh data from Open Meteo API");

  const instance = axios.create({
    baseURL: "https://api.open-meteo.com/v1",
  });

  if (!fs.existsSync("data")) {
    fs.mkdirSync("data");
  }

  const { data: rawOpenMeteoData } = await instance.get<RawOpenMeteoData>(
    "/forecast",
    {
      params: {
        latitude: lat,
        longitude: lng,
        hourly:
          "temperature_2m,apparent_temperature,precipitation_probability,precipitation,weathercode,cloudcover,visibility,is_day",
        windspeed_unit: "kn",
        timezone: "Europe/London",
        forecast_days: "3",
      },
    }
  );
  const openMeteoData: OpenMeteoData = {
    ...rawOpenMeteoData,
    hourly: rawOpenMeteoData.hourly.time.reduce((acc, _, i) => {
      acc.push({
        time: rawOpenMeteoData.hourly.time[i],
        temperature_2m: rawOpenMeteoData.hourly.temperature_2m[i],
        apparent_temperature: rawOpenMeteoData.hourly.apparent_temperature[i],
        precipitation_probability:
          rawOpenMeteoData.hourly.precipitation_probability[i],
        precipitation: rawOpenMeteoData.hourly.precipitation[i],
        weathercode: rawOpenMeteoData.hourly.weathercode[i],
        cloudcover: rawOpenMeteoData.hourly.cloudcover[i],
        visibility: rawOpenMeteoData.hourly.visibility[i],
        is_day: rawOpenMeteoData.hourly.is_day[i],
      });
      return acc;
    }, [] as OpenMeteoHour[]),
  };

  fs.writeFileSync(
    "data/openmeteo.json",
    JSON.stringify(openMeteoData, null, 2)
  );
};

const fetchStormGlassData = async () => {
  console.log("Fetching fresh data from Stormglass API");

  const instance = axios.create({
    baseURL: "https://api.stormglass.io/v2/",
    headers: {
      Authorization: process.env.STORMGLASS_API_KEY,
    },
  });

  if (!fs.existsSync("data")) {
    fs.mkdirSync("data");
  }

  // const { data: weatherData } = await instance.get("/weather/point", {
  //   params: {
  //     lat,
  //     lng,
  //     params:
  //       "waterTemperature,wavePeriod,waveDirection,waveHeight,windWaveDirection,windWaveHeight,windWavePeriod,swellPeriod,secondarySwellPeriod,swellDirection,secondarySwellDirection,swellHeight,secondarySwellHeight,windSpeed,windSpeed20m,windSpeed30m,windSpeed40m,windSpeed50m,windSpeed80m,windSpeed100m,windSpeed1000hpa,windSpeed800hpa,windSpeed500hpa,windSpeed200hpa,windDirection,windDirection20m,windDirection30m,windDirection40m,windDirection50m,windDirection80m,windDirection100m,windDirection1000hpa,windDirection800hpa,windDirection500hpa,windDirection200hpa,airTemperature,airTemperature80m,airTemperature100m,airTemperature1000hpa,airTemperature800hpa,airTemperature500hpa,airTemperature200hpa,precipitation,gust,cloudCover,humidity,pressure,visibility,currentSpeed,currentDirection,iceCover,snowDepth,seaLevel",
  //   },
  // });
  // fs.writeFileSync("data/weather.json", JSON.stringify(weatherData, null, 2));

  // const { data: tidesData } = await instance.get("/tide/extremes/point", {
  //   params: {
  //     lat,
  //     lng,
  //     datum: "MLLW",
  //   },
  // });
  // fs.writeFileSync("data/tides.json", JSON.stringify(tidesData, null, 2));

  const { data: seaLevelData } = await instance.get("/tide/sea-level/point", {
    params: {
      lat,
      lng,
      datum: "MLLW",
    },
  });
  fs.writeFileSync("data/seaLevel.json", JSON.stringify(seaLevelData, null, 2));

  const { data: astronomicalData } = await instance.get("/astronomy/point", {
    params: {
      lat,
      lng,
    },
  });
  fs.writeFileSync(
    "data/astronomical.json",
    JSON.stringify(astronomicalData, null, 2)
  );
};

export const getData = async (): Promise<RawData> => {
  if (process.env.REFETCH_STORMGLASS_DATA === "true") {
    await fetchStormGlassData();
  }
  if (process.env.REFETCH_OPENMETEO_DATA === "true") {
    await fetchOpenMeteoData();
  }
  return getDataFromCache();
};
