import { CanvasRenderingContext2D } from "canvas";
import { Colours, drawCircle, getAngleFromTime } from "./canvasUtils";

export const drawClockNumbers = (
  ctx: CanvasRenderingContext2D,
  radius: number,
  now: Date
) => {
  const nowAngle = getAngleFromTime(now);
  ctx.font = 24 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.lineWidth = 2;
  [now.getHours() + 1, 0, 6, 12, 18].forEach((num) => {
    const angle = Math.PI * 2 - nowAngle + (num * Math.PI) / 12;
    ctx.rotate(angle);
    ctx.translate(0, -radius);
    ctx.rotate(-angle);
    ctx.fillStyle = Colours.ORANGE;
    ctx.fillText(num.toString(), 0, 0);
    // ctx.strokeStyle = Colours.WHITE;
    // ctx.strokeText(num.toString(), 0, 0);
    ctx.rotate(angle);
    ctx.translate(0, radius);
    ctx.rotate(-angle);
  });
};
