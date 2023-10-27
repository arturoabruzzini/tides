import axios from "axios";
import fs from "fs";
import { AstronomicalData, AstronomicalDatum } from "../types/astronomical";
import {
  OpenMeteoData,
  OpenMeteoHour,
  MarineOpenMeteoData,
  RawMarineOpenMeteoData,
  RawOpenMeteoData,
  MarineOpenMeteoHour,
  OpenMeteoDay,
} from "../types/openmeteo";
import { SeaLevelData, SeaLevelDatum } from "../types/seaLevel";

export interface RawData {
  weatherData: OpenMeteoData;
  marineData: MarineOpenMeteoData;
  seaLevelData: SeaLevelData;
  astronomicalData: AstronomicalData;
}

export interface FilteredData {
  weather: OpenMeteoHour[];
  weatherDay: OpenMeteoDay;
  marine: MarineOpenMeteoHour[];
  seaLevel: SeaLevelDatum[];
  astronomical: AstronomicalDatum;
}

const isDateBetween = (date: Date, earliest: Date, latest: Date) =>
  earliest <= date && date < latest;

export const addHoursToDate = (date: Date, hours: number) =>
  new Date(date.getTime() + hours * 60 * 60 * 1000);

export const filterData = (
  { weatherData, marineData, seaLevelData, astronomicalData }: RawData,
  time: Date
): FilteredData => {
  const now = time;
  const in24Hours = addHoursToDate(time, 24);

  // for weather get the next 24 hours of weather
  const weather: OpenMeteoHour[] = weatherData.hourly.filter((h) =>
    isDateBetween(new Date(h.time), now, in24Hours)
  );
  if (weather.length < 23) {
    throw new Error(
      `can't find the next 24 hours of weather, only got ${weather.length}`
    );
  }

  // for daily weather figures, get current day until 11pm, then next day
  const weatherDay = weatherData.daily.find((d) => {
    return isDateBetween(new Date(`${d.time}T23:00:00`), now, in24Hours);
  });
  if (!weatherDay) {
    throw new Error("can't find the next weather day");
  }

  // for marine get the next 24 hours of marine
  const marine: MarineOpenMeteoHour[] = marineData.hourly.filter((h) =>
    isDateBetween(new Date(h.time), now, in24Hours)
  );
  if (marine.length < 23) {
    throw new Error(
      `can't find the next 24 hours of marine, only got ${marine.length}`
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
  if (seaLevel.length < 25) {
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
    weatherDay,
    marine,
    seaLevel,
    astronomical,
  };
};

const getDataFromCache = () => {
  const weatherData: OpenMeteoData = JSON.parse(
    fs.readFileSync("data/openmeteo.json", "utf-8")
  );
  const marineData: MarineOpenMeteoData = JSON.parse(
    fs.readFileSync("data/marineOpenmeteo.json", "utf-8")
  );
  const seaLevelData: SeaLevelData = JSON.parse(
    fs.readFileSync("data/seaLevel.json", "utf-8")
  );
  const astronomicalData: AstronomicalData = JSON.parse(
    fs.readFileSync("data/astronomical.json", "utf-8")
  );

  return {
    weatherData,
    marineData,
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
          "temperature_2m,apparent_temperature,precipitation_probability,precipitation,weathercode,cloudcover,visibility,is_day,windspeed_10m,winddirection_10m",
        daily:
          "windspeed_10m_max,winddirection_10m_dominant,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min",
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
        windspeed_10m: rawOpenMeteoData.hourly.windspeed_10m[i],
        winddirection_10m: rawOpenMeteoData.hourly.winddirection_10m[i],
      });
      return acc;
    }, [] as OpenMeteoHour[]),
    daily: rawOpenMeteoData.daily.time.reduce((acc, _, i) => {
      acc.push({
        time: rawOpenMeteoData.daily.time[i],
        windspeed_10m_max: rawOpenMeteoData.daily.windspeed_10m_max[i],
        winddirection_10m_dominant:
          rawOpenMeteoData.daily.winddirection_10m_dominant[i],
        temperature_2m_max: rawOpenMeteoData.daily.temperature_2m_max[i],
        temperature_2m_min: rawOpenMeteoData.daily.temperature_2m_min[i],
        apparent_temperature_max:
          rawOpenMeteoData.daily.apparent_temperature_max[i],
        apparent_temperature_min:
          rawOpenMeteoData.daily.apparent_temperature_min[i],
      });
      return acc;
    }, [] as OpenMeteoDay[]),
  };

  fs.writeFileSync(
    "data/openmeteo.json",
    JSON.stringify(openMeteoData, null, 2)
  );

  const marineInstance = axios.create({
    baseURL: "https://marine-api.open-meteo.com/v1",
  });

  if (!fs.existsSync("data")) {
    fs.mkdirSync("data");
  }

  const { data: rawMarineOpenMeteoData } =
    await marineInstance.get<RawMarineOpenMeteoData>("/marine", {
      params: {
        latitude: lat,
        longitude: lng,
        hourly: "wave_height",
      },
    });
  const marineOpenMeteoData: MarineOpenMeteoData = {
    ...rawMarineOpenMeteoData,
    hourly: rawMarineOpenMeteoData.hourly.time.reduce((acc, _, i) => {
      acc.push({
        time: rawMarineOpenMeteoData.hourly.time[i],
        wave_height: rawMarineOpenMeteoData.hourly.wave_height[i],
      });
      return acc;
    }, [] as MarineOpenMeteoHour[]),
  };

  fs.writeFileSync(
    "data/marineOpenmeteo.json",
    JSON.stringify(marineOpenMeteoData, null, 2)
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
