import { CanvasRenderingContext2D } from "canvas";
import { drawPolarCurve } from "./drawCurve";
import { Colours } from "./canvasUtils";
import { MarineOpenMeteoHour } from "../types/openmeteo";

export const drawMarine = (
  ctx: CanvasRenderingContext2D,
  radius: number,
  now: Date,
  marine: MarineOpenMeteoHour[]
) => {
  // waveHeight: curve
  drawPolarCurve(ctx, radius, now, marine, "wave_height", 0, 4, Colours.BLUE);
};
