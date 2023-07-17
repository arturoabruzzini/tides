import { createCanvas } from "canvas";
import { draw } from "./draw/draw";
import fs from "fs";

const createTideImages = () => {
  const canvas = createCanvas(800, 480);
  const ctx = canvas.getContext("2d");

  draw(canvas, ctx);

  fs.writeFileSync("image.jpg", canvas.toBuffer("image/jpeg"));
};

createTideImages();
