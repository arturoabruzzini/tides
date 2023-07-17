import { CanvasRenderingContext2D } from "canvas";
import { getAngleFromTime } from "./canvasUtils";

export const drawClockNumbers = (
  ctx: CanvasRenderingContext2D,
  radius: number,
  now: Date
) => {
  const nowAngle = getAngleFromTime(now);
  ctx.font = radius * 0.1 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillStyle = "black";
  for (let num = 0; num < 24; num++) {
    const angle = Math.PI * 2 - nowAngle + (num * Math.PI) / 12;
    ctx.rotate(angle);
    ctx.translate(0, -radius * 0.87);
    ctx.rotate(-angle);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(angle);
    ctx.translate(0, radius * 0.87);
    ctx.rotate(-angle);
  }
};
