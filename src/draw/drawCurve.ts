import { CanvasRenderingContext2D } from "canvas";
import {
  Coords,
  getRelativeAngleFromTime,
  polarToCartesian,
} from "./canvasUtils";

const getCurvePoints = (
  pts: number[],
  {
    tension = 0.5,
    isClosed = false,
    numOfSegments = 16,
  }: {
    tension?: number;
    isClosed?: boolean;
    numOfSegments?: number;
  }
) => {
  var _pts = [],
    res = [], // clone array
    x,
    y, // our x,y coords
    t1x,
    t2x,
    t1y,
    t2y, // tension vectors
    c1,
    c2,
    c3,
    c4, // cardinal points
    st,
    t,
    i; // steps based on num. of segments

  // clone array so we don't change the original
  //
  _pts = pts.slice(0);

  // The algorithm require a previous and next point to the actual point array.
  // Check if we will draw closed or open curve.
  // If closed, copy end points to beginning and first points to end
  // If open, duplicate first points to befinning, end points to end
  if (isClosed) {
    _pts.unshift(pts[pts.length - 1]);
    _pts.unshift(pts[pts.length - 2]);
    _pts.unshift(pts[pts.length - 1]);
    _pts.unshift(pts[pts.length - 2]);
    _pts.push(pts[0]);
    _pts.push(pts[1]);
  } else {
    _pts.unshift(pts[1]); //copy 1. point and insert at beginning
    _pts.unshift(pts[0]);
    _pts.push(pts[pts.length - 2]); //copy last point and append
    _pts.push(pts[pts.length - 1]);
  }

  // ok, lets start..

  // 1. loop goes through point array
  // 2. loop goes through each segment between the 2 pts + 1e point before and after
  for (i = 2; i < _pts.length - 4; i += 2) {
    for (t = 0; t <= numOfSegments; t++) {
      // calc tension vectors
      t1x = (_pts[i + 2] - _pts[i - 2]) * tension;
      t2x = (_pts[i + 4] - _pts[i]) * tension;

      t1y = (_pts[i + 3] - _pts[i - 1]) * tension;
      t2y = (_pts[i + 5] - _pts[i + 1]) * tension;

      // calc step
      st = t / numOfSegments;

      // calc cardinals
      c1 = 2 * Math.pow(st, 3) - 3 * Math.pow(st, 2) + 1;
      c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2);
      c3 = Math.pow(st, 3) - 2 * Math.pow(st, 2) + st;
      c4 = Math.pow(st, 3) - Math.pow(st, 2);

      // calc x and y cords with common control vectors
      x = c1 * _pts[i] + c2 * _pts[i + 2] + c3 * t1x + c4 * t2x;
      y = c1 * _pts[i + 1] + c2 * _pts[i + 3] + c3 * t1y + c4 * t2y;

      //store points in array
      res.push(x);
      res.push(y);
    }
  }

  return res;
};

const drawLines = (ctx: CanvasRenderingContext2D, pts: number[]) => {
  ctx.moveTo(pts[0], pts[1]);
  for (let i = 2; i < pts.length - 1; i += 2) ctx.lineTo(pts[i], pts[i + 1]);
};

export const drawCurve = (
  ctx: CanvasRenderingContext2D,
  ptsa: number[],
  {
    tension,
    isClosed,
    numOfSegments,
    showPoints = false,
  }: {
    tension?: number;
    isClosed?: boolean;
    numOfSegments?: number;
    showPoints?: boolean;
  }
) => {
  ctx.beginPath();

  drawLines(ctx, getCurvePoints(ptsa, { tension, isClosed, numOfSegments }));

  if (showPoints) {
    ctx.stroke();
    ctx.beginPath();
    for (var i = 0; i < ptsa.length - 1; i += 2)
      ctx.rect(ptsa[i] - 2, ptsa[i + 1] - 2, 4, 4);
  }
};

export const getCartesianPoint = (
  time: Date,
  value: number,
  max: number,
  min: number,
  radius: number,
  now: Date
) => {
  const angle = getRelativeAngleFromTime(time, now);
  const length = (radius * (value - min)) / (max - min);
  const pos = polarToCartesian(length, angle);
  return pos;
};

const findYIntercept = (point1: Coords, point2: Coords): Coords => {
  const slope = (point2[1] - point1[1]) / (point2[0] - point1[0]);
  const yIntercept = point1[1] - slope * point1[0];

  return [0, yIntercept];
};

const getValue = (obj: any, path: string): any => {
  if (!path) return obj;
  const properties = path.split(".");
  return getValue(obj[properties.shift() as any], properties.join("."));
};

export const drawPolarCurve = (
  ctx: CanvasRenderingContext2D,
  radius: number,
  now: Date,
  data: { [key: string]: any }[],
  valuePath: string,
  max: number,
  min: number,
  colour: string,
  lineWidth: number = 2,
  fill: boolean = false
) => {
  ctx.save();

  // convert all points to cartesian
  const points = data.map((dp) =>
    getCartesianPoint(
      new Date(dp.time),
      getValue(dp, valuePath),
      max,
      min,
      radius,
      now
    )
  );

  // interpolate first and last point along now line
  points[0] = findYIntercept(points[0], points[1]);
  points[points.length - 1] = findYIntercept(
    points[points.length - 1],
    points[points.length - 2]
  );

  // draw curve
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.strokeStyle = colour;
  ctx.fillStyle = colour;
  drawCurve(ctx, points.flat(), {
    // isClosed: true,
    // showPoints: true,
  });

  ctx.stroke();
  if (fill) {
    ctx.fill();
  }

  ctx.restore();
};
