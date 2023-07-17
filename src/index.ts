import { createCanvas } from "canvas";
import { draw } from "./draw/draw";
import fs from "fs";
import * as dotenv from "dotenv";
import { addHoursToDate, filterData, getData } from "./utils/getData";

dotenv.config();

// TODO add summer time logic?
export const timeOffset = 0;

const createTideImages = async () => {
  const data = await getData();

  const now = addHoursToDate(new Date(), timeOffset);
  // loop through the hours
  const filteredData = filterData(data, now);

  const canvas = createCanvas(800, 480);
  const ctx = canvas.getContext("2d");

  await draw(canvas, ctx, filteredData, now);

  if (!fs.existsSync("build")) {
    fs.mkdirSync("build");
  }

  fs.writeFileSync("build/image.jpg", canvas.toBuffer("image/jpeg"));
};

createTideImages();
