import { Canvas, CanvasRenderingContext2D } from "canvas";
import { drawCircle, drawNowLine, drawRectangle, Colours } from "./canvasUtils";
import { FilteredData } from "../utils/getData";
import { drawNightTime } from "./drawNightTime";
import { drawMoonArc, drawMoonPhase } from "./drawMoon";
import { drawClockNumbers } from "./drawClockNumbers";
import { drawSeaLevel } from "./drawSeaLevel";
import { drawWeather } from "./drawWeather";

export const draw = (
  canvas: Canvas,
  ctx: CanvasRenderingContext2D,
  { weather, tides, seaLevel, astronomical }: FilteredData,
  now: Date
) => {
  //background
  ctx.fillStyle = Colours.WHITE;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // center coords
  ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);

  // define main radius
  const maxRadius = ctx.canvas.height / 2;

  // draw night time
  drawNightTime(ctx, ctx.canvas.width, now, astronomical);

  // outer circle
  // ctx.lineWidth = 1;
  // drawCircle(ctx, circleRadius + 20, [0, 0], Colours.BLACK, "stroke");
  // drawCircle(ctx, circleRadius - 20, [0, 0], Colours.BLACK, "stroke");

  // draw moon visibility arc
  drawMoonArc(ctx, maxRadius - 10, now, astronomical);

  // numbers
  drawClockNumbers(ctx, maxRadius - 40, now);

  // middle dot
  // drawCircle(ctx, radius * 0.1, [0, 0], "#333");

  // draw weather
  drawWeather(ctx, maxRadius, now, weather);

  // draw sea level
  drawSeaLevel(ctx, maxRadius, now, seaLevel);

  // draw tides
  // drawTides(ctx, maxRadius, now, tides);

  // // hands
  // // minutes
  // const minutesAngle =
  //   (now.getMinutes() * Math.PI) / 30 +
  //   (now.getSeconds() * Math.PI) / (30 * 60);
  // drawHand(ctx, minutesAngle, maxRadius * 0.7, maxRadius * 0.04);
  // // seconds
  // const secondsAngle = (now.getSeconds() * Math.PI) / 30;
  // drawHand(ctx, secondsAngle, maxRadius * 0.8, maxRadius * 0.01);

  // vertical now line
  drawNowLine(ctx, maxRadius);

  ctx.resetTransform();

  drawMoonPhase(ctx, now, astronomical, [10, 10]);

  // draw squares of each of the colours in the Colour enum
  // 20px large and all on the right side of the canvas
  const height = ctx.canvas.height / Object.values(Colours).length;
  const width = 40;
  Object.values(Colours).forEach((colour, index) => {
    drawRectangle(
      ctx,
      width,
      height,
      [ctx.canvas.width - width, index * height],
      colour,
      "fill"
    );
  });
};
