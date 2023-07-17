import { AstronomicalDatum } from "../types/astronomical";
import { TideDatum } from "../types/tides";
import { addHoursToDate } from "../utils/getData";
import { CanvasRenderingContext2D } from "canvas";

// https://www.w3schools.com/graphics/canvas_clock.asp

export type Coords = [number, number];

export const drawCircle = (
  ctx: CanvasRenderingContext2D,
  radius: number,
  position: Coords = [0, 0],
  colour: string = "white",
  fill: "fill" | "stroke" = "fill"
) => {
  ctx.beginPath();
  ctx.arc(...position, radius, 0, 2 * Math.PI);
  ctx[`${fill}Style`] = colour;
  ctx[fill]();
};

export const drawNowLine = (ctx: CanvasRenderingContext2D, radius: number) => {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.lineCap = "butt";
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -radius);
  ctx.stroke();
};

export const point = (
  ctx: CanvasRenderingContext2D,
  position: Coords,
  colour: string = "red"
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
