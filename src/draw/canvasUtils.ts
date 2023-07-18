import { AstronomicalDatum } from "../types/astronomical";
import { TideDatum } from "../types/tides";
import { addHoursToDate } from "../utils/getData";
import { CanvasRenderingContext2D } from "canvas";

// https://www.w3schools.com/graphics/canvas_clock.asp

export type Coords = [number, number];

export enum Colours {
  BLACK = "#000000",
  WHITE = "#ffffff",
  GREEN = "#00ff00",
  BLUE = "#0000ff",
  RED = "#ff0000",
  YELLOW = "#ffff00",
  ORANGE = "#ff8000",
}

export const drawCircle = (
  ctx: CanvasRenderingContext2D,
  radius: number,
  position: Coords = [0, 0],
  colour: Colours = Colours.WHITE,
  fill: "fill" | "stroke" = "fill"
) => {
  ctx.beginPath();
  ctx.arc(...position, radius, 0, 2 * Math.PI);
  ctx[`${fill}Style`] = colour;
  ctx[fill]();
};

export const drawRectangle = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  position: Coords = [0, 0],
  colour: Colours = Colours.WHITE,
  fill: "fill" | "stroke" = "fill"
) => {
  ctx.beginPath();
  ctx.rect(...position, width, height);
  ctx[`${fill}Style`] = colour;
  ctx[fill]();
};

export const drawNowLine = (ctx: CanvasRenderingContext2D, radius: number) => {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = Colours.BLACK;
  ctx.lineCap = "butt";
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -radius);
  ctx.stroke();
};

export const point = (
  ctx: CanvasRenderingContext2D,
  position: Coords,
  colour: Colours = Colours.RED
) => drawCircle(ctx, 5, position, colour);

export const getAngleFromTime = (time: Date) =>
  (time.getHours() / 24 +
    time.getMinutes() / (24 * 60) +
    time.getSeconds() / (24 * 60 * 60)) *
  2 *
  Math.PI;

export const getRelativeAngleFromTime = (time: Date, now: Date) =>
  Math.PI * 2 - getAngleFromTime(now) + getAngleFromTime(time);

// compensating for the y axis being the wrong way around
export const polarToCartesian = (radius: number, angle: number): Coords => [
  radius * Math.cos(Math.PI / 2 - angle),
  -radius * Math.sin(Math.PI / 2 - angle),
];

const getRadius = (size: number, percent: number) => {
  const area = (size * size * percent) / 100;
  return Math.sqrt(area / Math.PI);
};

const getHalfToneSize = (size: number, percent: number) => {
  const area = (size * size * percent) / 100;
  return Math.sqrt(area);
};

// http://anderoonies.github.io/projects/halftone/
export const fillHalfTone = (
  ctx: CanvasRenderingContext2D,
  shadingPercent: number,
  spacing: number = 5
) => {
  for (
    let x = (spacing - ctx.canvas.width) / 2;
    x < ctx.canvas.width / 2;
    x += spacing
  ) {
    for (
      let y = (spacing - ctx.canvas.height) / 2;
      y < ctx.canvas.height / 2;
      y += spacing
    ) {
      ctx.beginPath();
      const size = getHalfToneSize(spacing, shadingPercent);
      ctx.rect(x, y, size, size);
      ctx.fill();
    }
  }
};
