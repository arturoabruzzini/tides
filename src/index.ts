import { Canvas, createCanvas } from "canvas";
import { draw } from "./draw/draw";
import fs from "fs";
import * as dotenv from "dotenv";
import { addHoursToDate, filterData, getData } from "./utils/getData";
import RgbQuant from "./utils/rgbquant.js";

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

const palette = [
  [0, 0, 0],
  [255, 255, 255],
  [0, 255, 0],
  [0, 0, 255],
  [255, 0, 0],
  [255, 255, 0],
  [255, 128, 0],
];

const createTideImages = async () => {
  const data = await getData();

  console.log("Got data", {
    weather: {
      from: data.weatherData.hourly[0].time,
      to: data.weatherData.hourly.slice(-1)[0].time,
    },
    seaLevel: {
      from: data.seaLevelData.data[0].time,
      to: data.seaLevelData.data.slice(-1)[0].time,
    },
    astronomical: {
      from: data.astronomicalData.data[0].time,
      to: data.astronomicalData.data.slice(-1)[0].time,
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

  new Array(process.env.LOCAL === "true" ? 1 : 24)
    .fill(1)
    .forEach((_, index) => {
      const time = addHoursToDate(previousHalfPast, index);

      // format time (e.g. "7:30" or "12:30")
      const hours = String(time.getHours());
      const minutes = String(time.getMinutes()).padStart(2, "0");
      const timeString = `${hours}-${minutes}`;

      // loop through the hours
      const filteredData = filterData(data, time);

      // const canvas = createCanvas(800, 480);
      const canvas = new Canvas(800, 480);
      const ctx = canvas.getContext("2d");

      draw(canvas, ctx, filteredData, time);

      fs.writeFileSync(
        `build/${timeString}_pre_dither.png`,
        canvas.toBuffer("image/png")
      );

      // Dither the image
      const quant = new RgbQuant({
        palette,
        dithKern: "FloydSteinberg",
        // dithKern: "FalseFloydSteinberg",
        // dithKern: "Stucki",
        // dithKern: "Atkinson",
        // dithKern: "Jarvis",
        // dithKern: "Burkes",
        // dithKern: "Sierra",
        // dithKern: "TwoSierra",
        // dithKern: "SierraLite",
        dithSerp: true,
        reIndex: true,
      });

      const out = quant.reduce(canvas);

      const imageData = ctx.createImageData(canvas.width, canvas.height);
      imageData.data.set(out!);
      ctx.putImageData(imageData, 0, 0);

      fs.writeFileSync(
        `build/${timeString}.jpg`,
        canvas.toBuffer("image/jpeg")
      );
      fs.writeFileSync(`build/${timeString}.png`, canvas.toBuffer("image/png"));
    });
  console.log("Saved 24 files");
};

createTideImages();
