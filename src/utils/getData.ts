import weatherData from "../data/weather.json";
import tidesData from "../data/tides.json";
import seaLevelData from "../data/seaLevel.json";
import astronomicalData from "../data/astronomical.json";
import { WeatherHour } from "../types/weather";
import { TideDatum } from "../types/tides";
import { SeaLevelDatum } from "../types/seaLevel";

const isDateBetween = (date: Date, earliest: Date, latest: Date) =>
  earliest < date && date < latest;

export const addHoursToDate = (date: Date, hours: number) =>
  new Date(date.getTime() + hours * 60 * 60 * 1000);

export const timeOffset = 0;

export const getData = () => {
  const now = addHoursToDate(new Date(), timeOffset);
  const in24Hours = addHoursToDate(now, 24);

  // for weather get the next 24 hours of weather
  const weather: WeatherHour[] = weatherData.hours.filter((h) =>
    isDateBetween(new Date(h.time), now, in24Hours)
  );
  if (weather.length !== 24) {
    throw new Error("can't find the next 24 hours of weather");
  }

  // for tides get the last one and the next few until tomorrow
  const pastTides = tidesData.data.filter((d) => new Date(d.time) < now);
  const futureTides = tidesData.data.filter((d) => new Date(d.time) > now);
  const indexOfFirstTideIn24Hours = futureTides.findIndex(
    (d) => new Date(d.time) > in24Hours
  );

  const tides: TideDatum[] = [
    // last tide
    ...(pastTides.slice(-1) as TideDatum[]),
    ...(futureTides.slice(0, indexOfFirstTideIn24Hours + 1) as TideDatum[]),
  ];

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
    throw new Error("can't find the next 24 hours of sea level");
  }

  // for astronomical get today's entr
  const astronomical = astronomicalData.data.find(
    (d) => d.time === now.toISOString().replace(/T.*/, "T12:00:00+00:00")
  );

  if (!astronomical) {
    throw new Error("can't find the astronomical data for today");
  }
  // console.log("tides :>> ", tides);

  return {
    weather,
    tides,
    seaLevel,
    astronomical,
  };
};
