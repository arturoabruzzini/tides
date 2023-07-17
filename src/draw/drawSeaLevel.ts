import { CanvasRenderingContext2D } from "canvas";
import { SeaLevelDatum } from "../types/seaLevel";
import { drawPolarCurve } from "./drawCurve";

export const drawSeaLevel = (
  ctx: CanvasRenderingContext2D,
  radius: number,
  now: Date,
  seaLevels: SeaLevelDatum[]
) => {
  drawPolarCurve(ctx, radius, now, seaLevels, "sg", -1, 6, "blue");
};
