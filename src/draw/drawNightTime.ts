import { CanvasRenderingContext2D } from "canvas";
import { getRelativeAngleFromTime } from "./canvasUtils";
import { AstronomicalDatum } from "../types/astronomical";

const fillPizzaSlice = (
  ctx: CanvasRenderingContext2D,
  radius: number,
  angle1: number,
  angle2: number,
  colour: string
) => {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, radius, angle1 - Math.PI / 2, angle2 - Math.PI / 2);
  ctx.fillStyle = colour;
  ctx.fill();
};

export const drawNightTime = (
  ctx: CanvasRenderingContext2D,
  radius: number,
  now: Date,
  astronomical: AstronomicalDatum
) => {
  const sunset = getRelativeAngleFromTime(new Date(astronomical.sunset), now);
  const civilDusk =
    astronomical.civilDusk &&
    getRelativeAngleFromTime(new Date(astronomical.civilDusk), now);
  const nauticalDusk =
    astronomical.nauticalDusk &&
    getRelativeAngleFromTime(new Date(astronomical.nauticalDusk), now);
  const astronomicalDusk =
    astronomical.astronomicalDusk &&
    getRelativeAngleFromTime(new Date(astronomical.astronomicalDusk), now);
  const astronomicalDawn =
    astronomical.astronomicalDawn &&
    getRelativeAngleFromTime(new Date(astronomical.astronomicalDawn), now);
  const nauticalDawn =
    astronomical.nauticalDawn &&
    getRelativeAngleFromTime(new Date(astronomical.nauticalDawn), now);
  const civilDawn =
    astronomical.civilDawn &&
    getRelativeAngleFromTime(new Date(astronomical.civilDawn), now);
  const sunrise = getRelativeAngleFromTime(new Date(astronomical.sunrise), now);

  fillPizzaSlice(ctx, radius, sunset, sunrise, "#96bbc9");
  if (civilDusk && civilDawn)
    fillPizzaSlice(ctx, radius, civilDusk, civilDawn, "#6f8f9a");
  if (nauticalDusk && nauticalDawn)
    fillPizzaSlice(ctx, radius, nauticalDusk, nauticalDawn, "#586a70");
  if (astronomicalDusk && astronomicalDawn)
    fillPizzaSlice(ctx, radius, astronomicalDusk, astronomicalDawn, "#2f454d");
};
