import { Canvas, CanvasRenderingContext2D } from "canvas";
import { drawCircle, drawNowLine } from "./canvasUtils";
import { addHoursToDate, timeOffset, getData } from "../utils/getData";
import { drawNightTime } from "./drawNightTime";
import { drawMoonArc, drawMoonPhase } from "./drawMoon";
import { drawClockNumbers } from "./drawClockNumbers";
import { drawTides } from "./drawTides";
import { drawHand } from "./drawHand";
import { drawSeaLevel } from "./drawSeaLevel";
import { drawWeather } from "./drawWeather";

export const draw = (canvas: Canvas, ctx: CanvasRenderingContext2D) => {
  const now = addHoursToDate(new Date(), timeOffset);
  console.log("🚀 ~ file: draw.ts:14 ~ draw ~ now:", now);
  const { weather, tides, seaLevel, astronomical } = getData();

  //background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // center coords
  ctx.translate(ctx.canvas.height / 2, ctx.canvas.height / 2);

  // define main radius
  const radius = (ctx.canvas.height / 2) * 0.9;

  // outer circle
  drawCircle(ctx, radius, [0, 0], "black", "stroke");

  // draw night time and moon
  drawNightTime(ctx, radius, now, astronomical);
  drawMoonArc(ctx, radius, now, astronomical);

  // middle dot
  // drawCircle(ctx, radius * 0.1, [0, 0], "#333");

  // draw sea level
  drawSeaLevel(ctx, radius, now, seaLevel);

  // draw weather
  drawWeather(ctx, radius, now, weather);

  // draw tides
  // drawTides(ctx, radius, now, tides);

  // numbers
  drawClockNumbers(ctx, radius, now);

  // // hands
  // // minutes
  // const minutesAngle =
  //   (now.getMinutes() * Math.PI) / 30 +
  //   (now.getSeconds() * Math.PI) / (30 * 60);
  // drawHand(ctx, minutesAngle, radius * 0.7, radius * 0.04);
  // // seconds
  // const secondsAngle = (now.getSeconds() * Math.PI) / 30;
  // drawHand(ctx, secondsAngle, radius * 0.8, radius * 0.01);

  // vertical now line
  drawNowLine(ctx, radius);

  ctx.resetTransform();

  drawMoonPhase(ctx, radius, now, astronomical);
};
