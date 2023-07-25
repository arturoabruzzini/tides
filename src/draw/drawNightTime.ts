import { CanvasRenderingContext2D } from "canvas";
import { fillPizzaSlice, getRelativeAngleFromTime } from "./canvasUtils";
import { AstronomicalDatum } from "../types/astronomical";

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

  fillPizzaSlice(ctx, radius, sunset, sunrise, "#0000ff");
  if (civilDusk && civilDawn)
    fillPizzaSlice(ctx, radius, civilDusk, civilDawn, "#0000c0");
  if (nauticalDusk && nauticalDawn)
    fillPizzaSlice(ctx, radius, nauticalDusk, nauticalDawn, "#000080");
  if (astronomicalDusk && astronomicalDawn)
    fillPizzaSlice(ctx, radius, astronomicalDusk, astronomicalDawn, "#000040");
};
