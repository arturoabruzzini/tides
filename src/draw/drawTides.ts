import { CanvasRenderingContext2D } from "canvas";
import { TideDatum } from "../types/tides";
import { addHoursToDate } from "../utils/getData";
import {
  getRelativeAngleFromTime,
  point,
  polarToCartesian,
} from "./canvasUtils";
import { maxSeaLevel, minSeaLevel } from "./drawSeaLevel";

const getTidePos = (tide: TideDatum, radius: number, now: Date) => {
  const time = new Date(tide.time);
  const angle = getRelativeAngleFromTime(time, now);
  const length =
    (radius * (tide.height - minSeaLevel)) / (maxSeaLevel - minSeaLevel);
  const pos = polarToCartesian(length, angle);

  return pos;
};

export const drawTides = (
  ctx: CanvasRenderingContext2D,
  radius: number,
  now: Date,
  tides: TideDatum[]
) => {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  for (const tide of tides) {
    ctx.save();
    const index = tides.indexOf(tide);
    const isFirst = index === 0;
    const isLast = index === tides.length - 2;
    if (index !== tides.length - 1) {
      if (new Date(tide.time) < now) {
        ctx.rect(0, -radius, radius, radius * 2);
        ctx.clip();
      }
      if (
        new Date(tides[tides.indexOf(tide) + 1].time) > addHoursToDate(now, 24)
      ) {
        ctx.rect(0, -radius, -radius, radius * 2);
        ctx.clip();
      }

      const pos = getTidePos(tide, radius, now);
      point(ctx, pos, tide.type === "high" ? "red" : "blue");
    }
    ctx.restore();
  }
};
