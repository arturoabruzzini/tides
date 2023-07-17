import { createCanvas } from "canvas";
import { draw } from "./draw/draw";
import fs from "fs";
import * as dotenv from "dotenv";
import { addHoursToDate, filterData, getData } from "./utils/getData";

dotenv.config();

const getLastHalfPastTime = (now: Date) => {
  const thirtyMin = 30 * 60 * 1000;
  const oneHour = 2 * thirtyMin;
  // Round down to the hour and subtract 30 minutes
  const previousHalfPastTimestamp =
    Math.floor((now.getTime() + thirtyMin) / oneHour) * oneHour - thirtyMin;

  // Create a new Date object from the previous half past timestamp
  const previousHalfPast = new Date(previousHalfPastTimestamp);

  return previousHalfPast;
};

const createTideImages = async () => {
  const data = await getData();

  console.log("Got data", {
    weather: {
      from: data.weatherData.hours[0].time,
      to: data.weatherData.hours.slice(-1)[0].time,
    },
    tides: {
      from: data.tidesData.data[0].time,
      to: data.tidesData.data.slice(-1)[0].time,
    },
    seaLevel: {
      from: data.seaLevelData.data[0].time,
      to: data.seaLevelData.data.slice(-1)[0].time,
    },
    astronomical: {
      from: data.astronomicalData.data[0].time,
      to: data.weatherData.hours.slice(-1)[0].time,
    },
  });

  // Get the current time
  const now = new Date();

  // the closest time before now that was 30 minutes past the hour
  const previousHalfPast = getLastHalfPastTime(now);

  console.log("Generating 24 hours of images from:", previousHalfPast);

  if (!fs.existsSync("build")) {
    fs.mkdirSync("build");
  }

  new Array(24).fill(1).forEach((_, index) => {
    const time = addHoursToDate(previousHalfPast, index);

    // format time (e.g. "7:30" or "12:30")
    const hours = String(time.getHours());
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const timeString = `${hours}-${minutes}`;

    // loop through the hours
    const filteredData = filterData(data, time);

    const canvas = createCanvas(800, 480);
    const ctx = canvas.getContext("2d");

    draw(canvas, ctx, filteredData, time);

    const fileName = `build/${timeString}.jpg`;
    fs.writeFileSync(fileName, canvas.toBuffer("image/jpeg"));

    console.log("Saved", fileName);
  });
};

createTideImages();
