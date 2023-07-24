import { CanvasRenderingContext2D } from "canvas";
import { Colours, getRelativeAngleFromTime } from "./canvasUtils";
import { OpenMeteoDay, OpenMeteoHour } from "../types/openmeteo";
import { underwear } from "../icons/underwear";
import { shorts } from "../icons/shorts";
import { vest } from "../icons/vest";
import { tshirt } from "../icons/tshirt";
import { trousers } from "../icons/trousers";
import { jumper } from "../icons/jumper";
import { coat } from "../icons/coat";
import { hat, snowman, winterCoat } from "../icons/winter";

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
  weather: OpenMeteoHour[],
  weatherDay: OpenMeteoDay
) => {
  ctx.save();
  const airTemperature = weatherDay.apparent_temperature_max;
  // icons of recommended clothing

  // above 30: speedos
  if (airTemperature >= 30) {
    ctx.save();
    ctx.resetTransform();
    ctx.translate(40, 340);
    underwear(ctx);
    ctx.restore();
  }
  // above 25: shorts and tank tok
  else if (airTemperature >= 25) {
    ctx.save();
    ctx.resetTransform();
    ctx.translate(16, 215);
    vest(ctx);
    ctx.restore();

    ctx.save();
    ctx.resetTransform();
    ctx.translate(40, 340);
    shorts(ctx);
    ctx.restore();
  }
  // above 20: shorts and tshirt
  else if (airTemperature >= 20) {
    ctx.save();
    ctx.resetTransform();
    ctx.translate(16, 215);
    tshirt(ctx);
    ctx.restore();

    ctx.save();
    ctx.resetTransform();
    ctx.translate(40, 340);
    shorts(ctx);
    ctx.restore();
  }
  // above 18: trousers and tshirt
  else if (airTemperature >= 18) {
    ctx.save();
    ctx.resetTransform();
    ctx.translate(16, 160);
    tshirt(ctx);
    ctx.restore();

    ctx.save();
    ctx.resetTransform();
    ctx.translate(6, 300);
    trousers(ctx);
    ctx.restore();
  }
  // above 16: trousers and jumper
  else if (airTemperature >= 16) {
    ctx.save();
    ctx.resetTransform();
    ctx.translate(6, 145);
    jumper(ctx);
    ctx.restore();

    ctx.save();
    ctx.resetTransform();
    ctx.translate(6, 300);
    trousers(ctx);
    ctx.restore();
  }
  // above 10: trousers, jumper and coat
  else if (airTemperature >= 10) {
    ctx.save();
    ctx.resetTransform();
    ctx.translate(3, 140);
    coat(ctx);
    ctx.restore();

    ctx.save();
    ctx.resetTransform();
    ctx.translate(6, 300);
    trousers(ctx);
    ctx.restore();
  }
  // above 0: trousers, jumper and duffel coat
  else if (airTemperature >= 0) {
    ctx.save();
    ctx.resetTransform();
    ctx.translate(50, 95);
    hat(ctx);
    ctx.restore();

    ctx.save();
    ctx.resetTransform();
    ctx.translate(14, 165);
    winterCoat(ctx);
    ctx.restore();

    ctx.save();
    ctx.resetTransform();
    ctx.translate(6, 300);
    trousers(ctx);
    ctx.restore();
  }
  // below 0: snowman
  else {
    ctx.save();
    ctx.resetTransform();
    ctx.translate(20, 280);
    snowman(ctx);
    ctx.restore();
  }
  ctx.restore();

  // clouds: show cloud cover for each hour
  // drawSky(ctx, radius, now, weather);

  // precipitation: rain icons for each hour

  drawWindSock(
    ctx,
    weatherDay.windspeed_10m_max,
    weatherDay.winddirection_10m_dominant
  );

  // wind speed: curve?
  // drawPolarCurve(
  //   ctx,
  //   radius,
  //   now,
  //   weather,
  //   "windspeed_10m",
  //   0,
  //   40,
  //   Colours.WHITE
  // );
};

const drawWindSock = (
  ctx: CanvasRenderingContext2D,
  speed: number,
  angle: number
) => {
  ctx.save();

  const maxWidth = 60;
  const minWidth = 10;
  const maxWindSpeed = 40;
  const speedIncrement = 5;
  const maxNbrOfSegments = Math.floor(maxWindSpeed / speedIncrement);
  const widthIncrement = (maxWidth - minWidth) / maxNbrOfSegments;
  const segmentLength = 50;

  ctx.rotate((angle * Math.PI) / 180);
  const nbrOfSegmentsToShow = Math.min(
    Math.round(speed / speedIncrement),
    maxNbrOfSegments
  );
  ctx.translate(0, (-segmentLength * nbrOfSegmentsToShow) / 2);

  for (let i = 0; i < nbrOfSegmentsToShow; i++) {
    ctx.beginPath();
    const largeWidth = (maxWidth - i * widthIncrement) / 2;
    const smallWidth = (maxWidth - (i + 1) * widthIncrement) / 2;
    const start = segmentLength * i;
    const end = segmentLength * (i + 1);
    ctx.moveTo(largeWidth, start);
    ctx.lineTo(-largeWidth, start);
    ctx.lineTo(-smallWidth, end);
    ctx.lineTo(smallWidth, end);
    ctx.lineTo(largeWidth, start);
    // fill in red if i is even and in white if i is odd
    ctx.fillStyle = i % 2 === 0 ? Colours.RED : Colours.WHITE;
    ctx.fill();
  }

  ctx.restore();
};
