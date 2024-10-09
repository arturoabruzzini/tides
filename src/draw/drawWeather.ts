import { CanvasRenderingContext2D } from "canvas";
import {
  Colours,
  Coords,
  drawCircle,
  drawRectangle,
  fillPizzaSlice,
  getRelativeAngleFromTime,
} from "./canvasUtils";
import { OpenMeteoDay, OpenMeteoHour } from "../types/openmeteo";
import { underwear } from "../icons/underwear";
import { shorts } from "../icons/shorts";
import { vest } from "../icons/vest";
import { tshirt } from "../icons/tshirt";
import { trousers } from "../icons/trousers";
import { jumper } from "../icons/jumper";
import { coat } from "../icons/coat";
import { hat, snowman, winterCoat } from "../icons/winter";

export const drawWeather = (
  ctx: CanvasRenderingContext2D,
  radius: number,
  now: Date,
  weather: OpenMeteoHour[],
  weatherDay: OpenMeteoDay
) => {
  drawWeatherConditions(ctx, radius, now, weather);

  drawWindSock(
    ctx,
    weatherDay.windspeed_10m_max,
    weatherDay.winddirection_10m_dominant
  );

  const airTemperature = weatherDay.apparent_temperature_max;
  drawRecommendedClothing(ctx, airTemperature);
};

/**
 * icons from
 * https://www.svgrepo.com/collection/man-clothes-4/2
 * https://www.svgrepo.com/collection/winter/
 * using
 * https://demo.qunee.com/svg2canvas/
 */
const drawSunny = (ctx: CanvasRenderingContext2D, rays = 5) => {
  const totalAngle = Math.PI / 12;
  const maxLength = ctx.canvas.width;

  const rayWidth = totalAngle / 16;
  const raySpacing = totalAngle / rays;
  new Array(rays).fill(0).forEach((_, i) => {
    const start = i * raySpacing + raySpacing / 2;
    fillPizzaSlice(ctx, maxLength, start, start + rayWidth, Colours.YELLOW);
  });
};

const getRandomNumber = (center: number, deviation: number) =>
  center + (Math.random() - 0.5) * deviation;

const drawCloudy = (
  ctx: CanvasRenderingContext2D,
  widthModifier = 5,
  circle1Size = 1.75,
  circle1Pos = 7,
  circle2Size = 1,
  circle2Pos = 17
) => {
  // bottom filleted rectangle
  const radius = 201;
  const height = 22;
  const filletRadius = height / 2;
  const maxWidth =
    (2 * Math.PI * (radius ^ 2)) / 24 - filletRadius + widthModifier;

  drawRectangle(
    ctx,
    maxWidth,
    height,
    [-maxWidth / 2, -radius - height / 2],
    Colours.WHITE,
    "fill"
  );
  drawCircle(
    ctx,
    filletRadius,
    [-maxWidth / 2, -radius],
    Colours.WHITE,
    "fill"
  );
  drawCircle(ctx, filletRadius, [maxWidth / 2, -radius], Colours.WHITE, "fill");

  const randomSign = Math.random() > 0.5 ? 1 : -1;
  // big circle
  const circle1Radius = filletRadius * getRandomNumber(circle1Size, 0.2);
  drawCircle(
    ctx,
    circle1Radius,
    [randomSign * circle1Pos, -radius + filletRadius - circle1Radius],
    Colours.WHITE,
    "fill"
  );

  // small circle
  const circle2Radius = filletRadius * getRandomNumber(circle2Size, 0.2);
  drawCircle(
    ctx,
    circle2Radius,
    [-randomSign * circle2Pos, -radius + filletRadius - circle2Radius * 2],
    Colours.WHITE,
    "fill"
  );
};

const drawFog = (ctx: CanvasRenderingContext2D) => {
  const initHeight = 184;
  const heightIncrement = 6;
  const spacing = 6;

  ctx.strokeStyle = Colours.WHITE;
  ctx.lineCap = "round";
  ctx.lineWidth = 3;

  const lines = [[10, 15, 5], [15, 10], [15]];
  let startY = -initHeight;
  lines.forEach((line, i) => {
    const totalWidth =
      line.reduce((acc, curr) => acc + curr, 0) + spacing * line.length - 1;
    let startX = -totalWidth / 2;
    line.forEach((length, j) => {
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(startX + length, startY);
      ctx.stroke();
      startX += length + spacing;
    });
    startY += heightIncrement;
  });
};

const drawPrecipitation = (
  ctx: CanvasRenderingContext2D,
  type: "rain" | "drizzle" | "shower" | "snow" | "lightning",
  intensity: 1 | 2 | 3
) => {
  const rain = (x: number, y: number, size = 4) => {
    ctx.fillStyle = Colours.BLUE;
    ctx.beginPath();
    ctx.moveTo(x - size, y);
    ctx.lineTo(x, y - 8);
    ctx.lineTo(x + size, y);
    ctx.arc(x, y, size, 0, Math.PI);
    ctx.closePath();
    ctx.fill();
  };

  const shower = (x: number, y: number) => {
    const size = 3;
    const offset = 4;
    const spacing = 7;
    rain(x - spacing / 2, y + offset, size);
    rain(x + spacing / 2, y, size);
  };

  const drizzle = (x: number, y: number) => {
    ctx.strokeStyle = Colours.BLUE;
    ctx.lineCap = "round";
    ctx.lineWidth = 2.5;
    const size = 6;
    const offset = size / 4;
    const spacing = size / 2;
    ctx.beginPath();
    ctx.moveTo(x - spacing, y - size + offset);
    ctx.lineTo(x - spacing, y + offset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + spacing, y - size - offset);
    ctx.lineTo(x + spacing, y - offset);
    ctx.stroke();
  };

  const snow = (x: number, y: number) => {
    ctx.save();
    ctx.translate(x, y);

    ctx.strokeStyle = Colours.WHITE;
    ctx.lineCap = "round";
    ctx.lineWidth = 2.5;
    const size = 10;

    new Array(3).fill(0).forEach((_, i) => {
      ctx.beginPath();
      ctx.moveTo(0, -size / 2);
      ctx.lineTo(0, size / 2);
      ctx.stroke();

      ctx.rotate(Math.PI / 3);
    });

    ctx.restore();
  };

  const lightning = (x: number, y: number) => {
    ctx.fillStyle = Colours.YELLOW;
    const yOffset = -25;

    const points: Coords[] = [
      [-2, 0],
      [-3, 17],
      [0, 17],
      [-2, 30],
      [5, 14],
      [2, 14],
      [4, 0],
    ];

    ctx.beginPath();
    ctx.moveTo(x + points[0][0], y + yOffset + points[0][1]);
    points
      .slice(1)
      .forEach((point) => ctx.lineTo(x + point[0], y + yOffset + point[1]));
    ctx.closePath();
    ctx.fill();
  };

  const startY = -175;
  const spacing = 12;
  const icon = {
    rain,
    drizzle,
    shower,
    snow,
    lightning,
  }[type];

  if (intensity === 1) {
    icon(0, startY);
  } else if (intensity === 2) {
    icon(-spacing * 0.7, startY);
    icon(spacing * 0.7, startY + spacing * 0.4);
  } else if (intensity === 3) {
    icon(-spacing, startY);
    icon(0, startY + 1 * spacing);
    icon(spacing, startY);
  }
};

const drawWeatherConditions = (
  ctx: CanvasRenderingContext2D,
  radius: number,
  now: Date,
  weather: OpenMeteoHour[]
) => {
  /**
   * weather codes:
   * 0	Clear sky
   * 1, 2, 3	Mainly clear, partly cloudy, and overcast
   * 45, 48	Fog and depositing rime fog
   * 51, 53, 55	Drizzle: Light, moderate, and dense intensity
   * 56, 57	Freezing Drizzle: Light and dense intensity
   * 61, 63, 65	Rain: Slight, moderate and heavy intensity
   * 66, 67	Freezing Rain: Light and heavy intensity
   * 71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
   * 77	Snow grains
   * 80, 81, 82	Rain showers: Slight, moderate, and violent
   * 85, 86	Snow showers slight and heavy
   * 95 *	Thunderstorm: no hail
   * 96, 99 *	Thunderstorm slight and heavy with hail
   */

  // loop through each weather hour
  weather.forEach((hour, i) => {
    ctx.save();
    const angle = getRelativeAngleFromTime(new Date(hour.time), now);
    const minAngle = angle - Math.PI / 24;
    ctx.rotate(minAngle);

    let weathercode = hour.weathercode;

    // if (i === 23) {
    //   weathercode = 99;
    // }

    if ([0, 1].includes(weathercode)) {
      if (hour.is_day) {
        drawSunny(ctx, 5);
      }
    } else if ([2].includes(weathercode)) {
      if (hour.is_day) {
        drawSunny(ctx, 2);
      }
      ctx.rotate(Math.PI / 24);
      // sparse clouds
      drawCloudy(ctx, -20, 1.4, 2, 0.9, 8);
    } else {
      ctx.rotate(Math.PI / 24);
      drawCloudy(ctx);
      if ([45, 48].includes(weathercode)) {
        drawFog(ctx);
      } else if ([51, 56].includes(weathercode)) {
        drawPrecipitation(ctx, "drizzle", 1);
      } else if ([53].includes(weathercode)) {
        drawPrecipitation(ctx, "drizzle", 2);
      } else if ([55, 57].includes(weathercode)) {
        drawPrecipitation(ctx, "drizzle", 3);
      } else if ([61, 66].includes(weathercode)) {
        drawPrecipitation(ctx, "rain", 1);
      } else if ([63].includes(weathercode)) {
        drawPrecipitation(ctx, "rain", 2);
      } else if ([65, 67].includes(weathercode)) {
        drawPrecipitation(ctx, "rain", 3);
      } else if ([80].includes(weathercode)) {
        drawPrecipitation(ctx, "shower", 1);
      } else if ([81].includes(weathercode)) {
        drawPrecipitation(ctx, "shower", 2);
      } else if ([82].includes(weathercode)) {
        drawPrecipitation(ctx, "shower", 3);
      } else if ([71, 85].includes(weathercode)) {
        drawPrecipitation(ctx, "snow", 1);
      } else if ([73].includes(weathercode)) {
        drawPrecipitation(ctx, "snow", 2);
      } else if ([75, 77, 86].includes(weathercode)) {
        drawPrecipitation(ctx, "snow", 3);
      } else if ([95, 96].includes(weathercode)) {
        drawPrecipitation(ctx, "rain", 3);
        drawPrecipitation(ctx, "lightning", 1);
      } else if ([99].includes(weathercode)) {
        drawPrecipitation(ctx, "rain", 3);
        drawPrecipitation(ctx, "lightning", 2);
      }
    }

    ctx.restore();
  });
};

const drawRecommendedClothing = (
  ctx: CanvasRenderingContext2D,
  airTemperature: number
) => {
  ctx.save();
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
