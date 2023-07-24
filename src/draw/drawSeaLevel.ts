import { CanvasRenderingContext2D } from "canvas";
import { drawPolarCurve } from "./drawCurve";
import { Colours } from "./canvasUtils";
import { SeaLevelDatum } from "../types/seaLevel";

export const drawSeaLevel = (
  ctx: CanvasRenderingContext2D,
  radius: number,
  now: Date,
  seaLevels: SeaLevelDatum[]
) => {
  drawPolarCurve(ctx, radius, now, seaLevels, "sg", -1, 6, Colours.BLUE);
};
