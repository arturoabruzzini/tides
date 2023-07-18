import { CanvasRenderingContext2D } from "canvas";
import {
  Colours,
  Coords,
  drawCircle,
  getRelativeAngleFromTime,
} from "./canvasUtils";
import { AstronomicalDatum } from "../types/astronomical";

// https://codepen.io/anowodzinski/pen/ZWKXPQ
const drawDisc = (
  ctx: CanvasRenderingContext2D,
  moonRadius: number,
  lineWidth: number
) => {
  const offset = lineWidth / 2;
  ctx.translate(offset, offset);
  ctx.beginPath();
  ctx.arc(moonRadius, moonRadius, moonRadius, 0, 2 * Math.PI, true);
  ctx.closePath();
  ctx.fillStyle = Colours.WHITE;
  ctx.strokeStyle = Colours.BLACK;
  ctx.lineWidth = lineWidth;

  ctx.fill();
  ctx.stroke();
};

const drawPhase = (
  ctx: CanvasRenderingContext2D,
  phase: number,
  moonRadius: number,
  offset: number
) => {
  ctx.beginPath();
  ctx.arc(moonRadius, moonRadius, moonRadius, -Math.PI / 2, Math.PI / 2, true);
  ctx.closePath();
  ctx.fillStyle = Colours.BLACK;
  ctx.fill();
  if (phase !== 0) {
    ctx.translate(moonRadius, moonRadius);
    ctx.scale(phase, 1);
    ctx.translate(-moonRadius, -moonRadius);
    ctx.beginPath();
    ctx.arc(
      moonRadius,
      moonRadius,
      moonRadius - offset,
      -Math.PI / 2,
      Math.PI / 2,
      true
    );
    ctx.closePath();
    ctx.fillStyle = phase > 0 ? Colours.WHITE : Colours.BLACK;
    ctx.fill();
  }
};

export const drawMoonPhase = (
  ctx: CanvasRenderingContext2D,
  now: Date,
  astronomical: AstronomicalDatum,
  center: Coords
) => {
  // Draw the moon in its current phase
  ctx.save();

  // Set the fraction of the moon currently illuminated (e.g. 0.5 for half moon)
  const phase = astronomical.moonPhase.current.value;
  // const phase = 0.05;
  // console.log(astronomical.moonPhase.current);

  // Calculate the center and radius of the moon circle
  const moonRadius = 40;
  const lineWidth = 2;
  const offset = lineWidth / 2;

  ctx.translate(...center);

  if (phase <= 0.5) {
    drawDisc(ctx, moonRadius, lineWidth);
    drawPhase(ctx, 4 * phase - 1, moonRadius, offset);
  } else {
    ctx.translate(moonRadius + 2 * offset, moonRadius + 2 * offset);
    ctx.rotate(Math.PI);
    ctx.translate(-moonRadius, -moonRadius);

    drawDisc(ctx, moonRadius, lineWidth);
    drawPhase(ctx, 4 * (1 - phase) - 1, moonRadius, offset);
  }

  ctx.restore();
};

export const drawMoonArc = (
  ctx: CanvasRenderingContext2D,
  radius: number,
  now: Date,
  astronomical: AstronomicalDatum
) => {
  // Draw an arc to represent the time the moon is visible in the sky today
  const moonRise = getRelativeAngleFromTime(
    new Date(astronomical.moonrise),
    now
  );
  const moonSet = getRelativeAngleFromTime(new Date(astronomical.moonset), now);

  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(0, 0, radius, moonRise - Math.PI / 2, moonSet - Math.PI / 2);

  ctx.lineWidth = 12;
  ctx.strokeStyle = Colours.BLACK;
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.strokeStyle = Colours.WHITE;
  ctx.stroke();
};
