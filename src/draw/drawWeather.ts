import { CanvasRenderingContext2D } from "canvas";
import { drawPolarCurve } from "./drawCurve";
import {
  Colours,
  getRelativeAngleFromTime,
  point,
  polarToCartesian,
} from "./canvasUtils";
import { OpenMeteoHour } from "../types/openmeteo";

/*
Using cloudCover, precipitation

*/
export const drawSky = (
  ctx: CanvasRenderingContext2D,
  radius: number,
  now: Date,
  weather: OpenMeteoHour[]
) => {
  ctx.save();

  weather.forEach(({ time, cloudcover }, index) => {
    ctx.save();

    const angle = getRelativeAngleFromTime(new Date(time), now);

    ctx.rotate(angle);

    const length = radius * 0.75;

    ctx.translate(0, -length);

    const numberOfClouds = Math.floor(cloudcover / 20);
    const cloudRadius = 10;
    const xSpread = 35;
    const ySpread = 10;

    ctx.beginPath();
    for (let i = 0; i < numberOfClouds; i++) {
      ctx.arc(
        Math.random() * xSpread - xSpread / 2,
        Math.random() * ySpread - ySpread / 2,
        Math.random() * cloudRadius + cloudRadius / 2,
        0,
        Math.PI * 2
      );
    }
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.restore();
  });

  ctx.restore();
};

export const drawWeather = (
  ctx: CanvasRenderingContext2D,
  radius: number,
  now: Date,
  weather: OpenMeteoHour[]
) => {
  // air temp
  // drawPolarCurve(
  //   ctx,
  //   radius,
  //   now,
  //   weather,
  //   "airTemperature.sg",
  //   -10,
  //   35,
  //   "red"
  // );
  const airTemperature = weather[0].temperature_2m;
  // icons of recommended clothing

  // above 30: speedos
  // above 25: shorts and tank tok
  // above 20: shorts and tshirt
  // above 16: trousers and jumper
  // above 10: trousers, jumper and coat
  // above 0: trousers, jumper and duffel coat
  // below 0: ski suit

  // clouds: show cloud cover for each hour
  // drawSky(ctx, radius, now, weather);

  // precipitation: rain icons for each hour

  // waveHeight: curve?
  // drawPolarCurve(
  //   ctx,
  //   radius,
  //   now,
  //   weather,
  //   "waveHeight.sg",
  //   0,
  //   4,
  //   Colours.GREEN
  // );

  // windDirection: compass arrow

  // windSpeed: ? wind sock?
};
