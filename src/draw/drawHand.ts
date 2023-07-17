import { CanvasRenderingContext2D } from "canvas";

export const drawHand = (
  ctx: CanvasRenderingContext2D,
  angle: number,
  length: number,
  width: number
) => {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.strokeStyle = "black";
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(angle);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-angle);
};
