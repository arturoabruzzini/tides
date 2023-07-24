import { CanvasRenderingContext2D } from "canvas";
import { Colours } from "../draw/canvasUtils";

export const shorts = (ctx: CanvasRenderingContext2D) =>
  [shorts1, shorts2, shorts3, shorts4, shorts5, shorts6][
    Math.floor(Math.random() * 6)
  ](ctx);

const shorts1 = (ctx: CanvasRenderingContext2D) => {
  ctx.miterLimit = 4;
  ctx.scale(0.1, 0.1);
  ctx.scale(1.562496948248148, 1.562496948248148);
  ctx.translate(1, 1);
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(41.667, 148.333);
  ctx.lineTo(468.333, 148.333);
  ctx.lineTo(468.333, 80.067);
  ctx.lineTo(41.667, 80.067);
  ctx.lineTo(41.667, 148.333);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(255, 148.333);
  ctx.lineTo(255, 267.8);
  ctx.lineTo(297.667, 395.8);
  ctx.lineTo(493.933, 395.8);
  ctx.lineTo(468.333, 148.333);
  ctx.lineTo(255, 148.333);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(255, 148.333);
  ctx.lineTo(41.667, 148.333);
  ctx.lineTo(16.067, 395.8);
  ctx.lineTo(212.333, 395.8);
  ctx.lineTo(255, 267.8);
  ctx.lineTo(255, 148.333);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(493.933, 429.933);
  ctx.lineTo(297.667, 429.933);
  ctx.bezierCurveTo(
    292.54699999999997,
    429.933,
    289.13399999999996,
    426.52,
    289.13399999999996,
    421.4
  );
  ctx.lineTo(289.13399999999996, 404.33299999999997);
  ctx.bezierCurveTo(
    289.13399999999996,
    399.21299999999997,
    292.54699999999997,
    395.79999999999995,
    297.667,
    395.79999999999995
  );
  ctx.lineTo(493.93399999999997, 395.79999999999995);
  ctx.bezierCurveTo(
    499.054,
    395.79999999999995,
    502.467,
    399.21299999999997,
    502.467,
    404.33299999999997
  );
  ctx.lineTo(502.467, 421.4);
  ctx.bezierCurveTo(502.467, 426.52, 499.053, 429.933, 493.933, 429.933);
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(442.733, 148.333);
  ctx.lineTo(468.333, 148.333);
  ctx.lineTo(468.333, 80.067);
  ctx.lineTo(442.733, 80.067);
  ctx.lineTo(442.733, 148.333);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(493.933, 395.8);
  ctx.lineTo(468.33299999999997, 395.8);
  ctx.bezierCurveTo(473.453, 395.8, 476.866, 399.213, 476.866, 404.333);
  ctx.lineTo(476.866, 421.4);
  ctx.bezierCurveTo(
    476.866,
    426.52,
    473.453,
    429.933,
    468.33299999999997,
    429.933
  );
  ctx.lineTo(493.933, 429.933);
  ctx.bezierCurveTo(499.053, 429.933, 502.466, 426.52, 502.466, 421.4);
  ctx.lineTo(502.466, 404.33299999999997);
  ctx.bezierCurveTo(502.467, 399.213, 499.053, 395.8, 493.933, 395.8);
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(212.333, 429.933);
  ctx.lineTo(16.067, 429.933);
  ctx.bezierCurveTo(
    10.947,
    429.933,
    7.534000000000001,
    426.52,
    7.534000000000001,
    421.4
  );
  ctx.lineTo(7.534000000000001, 404.33299999999997);
  ctx.bezierCurveTo(
    7.534000000000001,
    399.21299999999997,
    10.947000000000001,
    395.79999999999995,
    16.067,
    395.79999999999995
  );
  ctx.lineTo(212.334, 395.79999999999995);
  ctx.bezierCurveTo(
    217.454,
    395.79999999999995,
    220.867,
    399.21299999999997,
    220.867,
    404.33299999999997
  );
  ctx.lineTo(220.867, 421.4);
  ctx.bezierCurveTo(220.867, 426.52, 217.453, 429.933, 212.333, 429.933);
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(255, 242.2);
  ctx.lineTo(255, 242.2);
  ctx.lineTo(255, 148.33299999999997);
  ctx.lineTo(289.133, 148.33299999999997);
  ctx.lineTo(289.133, 208.06599999999997);
  ctx.bezierCurveTo(289.133, 226.84, 273.773, 242.2, 255, 242.2);
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(109.933, 148.333);
  ctx.lineTo(41.667, 148.333);
  ctx.lineTo(30.574, 260.973);
  ctx.bezierCurveTo(76.653, 243.907, 109.933, 200.387, 109.933, 148.333);
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(479.427, 261.827);
  ctx.lineTo(468.334, 148.334);
  ctx.lineTo(397.507, 148.334);
  ctx.bezierCurveTo(397.507, 201.24, 431.64, 245.613, 479.427, 261.827);
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(468.333, 148.333);
  ctx.lineTo(442.733, 148.333);
  ctx.lineTo(468.333, 395.8);
  ctx.lineTo(493.933, 395.8);
  ctx.lineTo(468.333, 148.333);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(41.667, 148.333);
  ctx.lineTo(67.267, 148.333);
  ctx.lineTo(67.267, 80.067);
  ctx.lineTo(41.667, 80.067);
  ctx.lineTo(41.667, 148.333);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(16.067, 395.8);
  ctx.lineTo(41.667, 395.8);
  ctx.bezierCurveTo(
    36.547000000000004,
    395.8,
    33.134,
    399.213,
    33.134,
    404.333
  );
  ctx.lineTo(33.134, 421.4);
  ctx.bezierCurveTo(33.134, 426.52, 36.547, 429.933, 41.667, 429.933);
  ctx.lineTo(16.067, 429.933);
  ctx.bezierCurveTo(
    10.947,
    429.933,
    7.534000000000001,
    426.52,
    7.534000000000001,
    421.4
  );
  ctx.lineTo(7.534000000000001, 404.33299999999997);
  ctx.bezierCurveTo(7.533, 399.213, 10.947, 395.8, 16.067, 395.8);
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(41.667, 148.333);
  ctx.lineTo(67.267, 148.333);
  ctx.lineTo(41.667, 395.8);
  ctx.lineTo(16.067, 395.8);
  ctx.lineTo(41.667, 148.333);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.BLACK;
  ctx.beginPath();
  ctx.moveTo(468.333, 156.867);
  ctx.lineTo(41.667, 156.867);
  ctx.bezierCurveTo(
    36.547000000000004,
    156.867,
    33.134,
    153.45399999999998,
    33.134,
    148.334
  );
  ctx.lineTo(33.134, 80.067);
  ctx.bezierCurveTo(
    33.134,
    74.94699999999999,
    36.547,
    71.53399999999999,
    41.667,
    71.53399999999999
  );
  ctx.lineTo(468.33399999999995, 71.53399999999999);
  ctx.bezierCurveTo(
    473.45399999999995,
    71.53399999999999,
    476.86699999999996,
    74.94699999999999,
    476.86699999999996,
    80.067
  );
  ctx.lineTo(476.86699999999996, 148.334);
  ctx.bezierCurveTo(476.867, 153.453, 473.453, 156.867, 468.333, 156.867);
  ctx.closePath();
  ctx.moveTo(50.2, 139.8);
  ctx.lineTo(459.8, 139.8);
  ctx.lineTo(459.8, 88.6);
  ctx.lineTo(50.2, 88.6);
  ctx.lineTo(50.2, 139.8);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(493.933, 404.333);
  ctx.lineTo(297.667, 404.333);
  ctx.bezierCurveTo(
    294.25399999999996,
    404.333,
    290.84,
    401.773,
    289.98699999999997,
    398.36
  );
  ctx.lineTo(247.31999999999996, 270.36);
  ctx.bezierCurveTo(
    247.31999999999996,
    269.507,
    246.46699999999996,
    268.653,
    246.46699999999996,
    267.8
  );
  ctx.lineTo(246.46699999999996, 148.333);
  ctx.bezierCurveTo(
    246.46699999999996,
    143.213,
    249.87999999999997,
    139.8,
    254.99999999999994,
    139.8
  );
  ctx.lineTo(468.33299999999997, 139.8);
  ctx.bezierCurveTo(
    472.59999999999997,
    139.8,
    476.013,
    143.21300000000002,
    476.866,
    147.48000000000002
  );
  ctx.lineTo(502.466, 394.947);
  ctx.bezierCurveTo(502.466, 397.507, 501.613, 400.067, 499.906, 401.774);
  ctx.bezierCurveTo(499.053, 403.48, 496.493, 404.333, 493.933, 404.333);
  ctx.closePath();
  ctx.moveTo(303.64, 387.267);
  ctx.lineTo(484.547, 387.267);
  ctx.lineTo(460.654, 156.867);
  ctx.lineTo(263.534, 156.867);
  ctx.lineTo(263.534, 266.094);
  ctx.lineTo(303.64, 387.267);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(212.333, 404.333);
  ctx.lineTo(16.067, 404.333);
  ctx.bezierCurveTo(
    13.507,
    404.333,
    10.947,
    403.48,
    10.094000000000001,
    401.773
  );
  ctx.bezierCurveTo(
    9.241000000000003,
    400.06600000000003,
    7.534000000000001,
    397.50600000000003,
    7.534000000000001,
    394.946
  );
  ctx.lineTo(33.134, 147.479);
  ctx.bezierCurveTo(
    33.987,
    143.21200000000002,
    37.401,
    139.799,
    41.667,
    139.799
  );
  ctx.lineTo(255, 139.799);
  ctx.bezierCurveTo(
    260.12,
    139.799,
    263.533,
    143.21200000000002,
    263.533,
    148.332
  );
  ctx.lineTo(263.533, 267.8);
  ctx.bezierCurveTo(263.533, 268.653, 263.533, 269.507, 262.68, 270.36);
  ctx.lineTo(220.013, 398.36);
  ctx.bezierCurveTo(219.16, 401.773, 215.747, 404.333, 212.333, 404.333);
  ctx.closePath();
  ctx.moveTo(25.453, 387.267);
  ctx.lineTo(206.36, 387.267);
  ctx.lineTo(246.467, 266.094);
  ctx.lineTo(246.467, 156.867);
  ctx.lineTo(49.347, 156.867);
  ctx.lineTo(25.453, 387.267);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(255, 250.733);
  ctx.bezierCurveTo(
    249.88,
    250.733,
    246.467,
    247.32,
    246.467,
    242.20000000000002
  );
  ctx.lineTo(246.467, 148.33300000000003);
  ctx.bezierCurveTo(
    246.467,
    143.21300000000002,
    249.88000000000002,
    139.80000000000004,
    255,
    139.80000000000004
  );
  ctx.lineTo(289.133, 139.80000000000004);
  ctx.bezierCurveTo(
    294.253,
    139.80000000000004,
    297.666,
    143.21300000000005,
    297.666,
    148.33300000000003
  );
  ctx.lineTo(297.666, 208.06600000000003);
  ctx.bezierCurveTo(297.667, 231.96, 278.893, 250.733, 255, 250.733);
  ctx.closePath();
  ctx.moveTo(263.533, 156.867);
  ctx.lineTo(263.533, 231.95999999999998);
  ctx.bezierCurveTo(
    273.773,
    228.54699999999997,
    280.6,
    219.15999999999997,
    280.6,
    208.06699999999998
  );
  ctx.lineTo(280.6, 156.86699999999996);
  ctx.lineTo(263.533, 156.86699999999996);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(30.573, 269.507);
  ctx.bezierCurveTo(28.866, 269.507, 27.16, 268.654, 25.453, 267.8);
  ctx.bezierCurveTo(22.893, 266.093, 22.04, 263.533, 22.04, 260.12);
  ctx.lineTo(33.132999999999996, 147.48000000000002);
  ctx.bezierCurveTo(33.986, 143.21300000000002, 37.4, 139.8, 41.666, 139.8);
  ctx.lineTo(109.93299999999999, 139.8);
  ctx.bezierCurveTo(
    115.053,
    139.8,
    118.466,
    143.21300000000002,
    118.466,
    148.333
  );
  ctx.bezierCurveTo(
    118.466,
    202.093,
    84.333,
    250.733,
    33.132999999999996,
    268.653
  );
  ctx.bezierCurveTo(32.28, 268.653, 31.427, 269.507, 30.573, 269.507);
  ctx.closePath();
  ctx.moveTo(49.347, 156.867);
  ctx.lineTo(39.96, 247.32);
  ctx.bezierCurveTo(74.093, 230.253, 97.987, 195.267, 100.547, 156.867);
  ctx.lineTo(49.347, 156.867);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(479.427, 270.36);
  ctx.bezierCurveTo(478.574, 270.36, 477.72, 270.36, 476.867, 270.36);
  ctx.bezierCurveTo(
    423.96000000000004,
    253.293,
    388.97400000000005,
    204.65300000000002,
    388.97400000000005,
    149.187
  );
  ctx.bezierCurveTo(
    388.97400000000005,
    144.067,
    392.38700000000006,
    140.65400000000002,
    397.50700000000006,
    140.65400000000002
  );
  ctx.lineTo(468.33400000000006, 140.65400000000002);
  ctx.bezierCurveTo(
    472.60100000000006,
    140.65400000000002,
    476.01400000000007,
    144.06700000000004,
    476.8670000000001,
    148.33400000000003
  );
  ctx.lineTo(487.9600000000001, 261.827);
  ctx.bezierCurveTo(
    487.9600000000001,
    264.387,
    487.1070000000001,
    267.8,
    484.5470000000001,
    269.507
  );
  ctx.bezierCurveTo(483.693, 269.507, 481.987, 270.36, 479.427, 270.36);
  ctx.closePath();
  ctx.moveTo(406.04, 156.867);
  ctx.bezierCurveTo(
    409.45300000000003,
    196.974,
    433.34700000000004,
    231.95999999999998,
    469.187,
    248.17399999999998
  );
  ctx.lineTo(460.654, 156.86699999999996);
  ctx.lineTo(406.04, 156.86699999999996);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(144.067, 156.867);
  ctx.bezierCurveTo(
    138.947,
    156.867,
    135.53400000000002,
    153.45399999999998,
    135.53400000000002,
    148.334
  );
  ctx.lineTo(135.53400000000002, 80.067);
  ctx.bezierCurveTo(
    135.53400000000002,
    74.94699999999999,
    138.94700000000003,
    71.53399999999999,
    144.067,
    71.53399999999999
  );
  ctx.bezierCurveTo(
    149.187,
    71.53399999999999,
    152.6,
    74.94699999999999,
    152.6,
    80.067
  );
  ctx.lineTo(152.6, 148.334);
  ctx.bezierCurveTo(152.6, 153.453, 149.187, 156.867, 144.067, 156.867);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(255, 156.867);
  ctx.bezierCurveTo(
    249.88,
    156.867,
    246.467,
    153.45399999999998,
    246.467,
    148.334
  );
  ctx.lineTo(246.467, 80.067);
  ctx.bezierCurveTo(
    246.467,
    74.94699999999999,
    249.88000000000002,
    71.53399999999999,
    255,
    71.53399999999999
  );
  ctx.bezierCurveTo(
    260.12,
    71.53399999999999,
    263.533,
    74.94699999999999,
    263.533,
    80.067
  );
  ctx.lineTo(263.533, 148.334);
  ctx.bezierCurveTo(263.533, 153.453, 260.12, 156.867, 255, 156.867);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(357.4, 156.867);
  ctx.bezierCurveTo(
    352.28,
    156.867,
    348.86699999999996,
    153.45399999999998,
    348.86699999999996,
    148.334
  );
  ctx.lineTo(348.86699999999996, 80.067);
  ctx.bezierCurveTo(
    348.86699999999996,
    74.94699999999999,
    352.28,
    71.53399999999999,
    357.4,
    71.53399999999999
  );
  ctx.bezierCurveTo(
    362.52,
    71.53399999999999,
    365.933,
    74.94699999999999,
    365.933,
    80.067
  );
  ctx.lineTo(365.933, 148.334);
  ctx.bezierCurveTo(365.933, 153.453, 362.52, 156.867, 357.4, 156.867);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(152.6, 276.333);
  ctx.lineTo(118.46699999999998, 276.333);
  ctx.bezierCurveTo(
    113.34699999999998,
    276.333,
    109.93399999999998,
    272.92,
    109.93399999999998,
    267.8
  );
  ctx.bezierCurveTo(
    109.93399999999998,
    262.68,
    113.34699999999998,
    259.267,
    118.46699999999998,
    259.267
  );
  ctx.lineTo(152.6, 259.267);
  ctx.bezierCurveTo(
    157.72,
    259.267,
    161.13299999999998,
    262.68,
    161.13299999999998,
    267.8
  );
  ctx.bezierCurveTo(
    161.13299999999998,
    272.92,
    157.72,
    276.333,
    152.6,
    276.333
  );
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(152.6, 327.533);
  ctx.lineTo(118.46699999999998, 327.533);
  ctx.bezierCurveTo(
    113.34699999999998,
    327.533,
    109.93399999999998,
    324.12,
    109.93399999999998,
    319
  );
  ctx.bezierCurveTo(
    109.93399999999998,
    313.88,
    113.34699999999998,
    310.467,
    118.46699999999998,
    310.467
  );
  ctx.lineTo(152.6, 310.467);
  ctx.bezierCurveTo(
    157.72,
    310.467,
    161.13299999999998,
    313.88,
    161.13299999999998,
    319
  );
  ctx.bezierCurveTo(161.133, 324.12, 157.72, 327.533, 152.6, 327.533);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(144.067, 301.933);
  ctx.lineTo(127, 301.933);
  ctx.bezierCurveTo(121.88, 301.933, 118.467, 298.52, 118.467, 293.4);
  ctx.bezierCurveTo(
    118.467,
    288.28,
    121.88,
    284.86699999999996,
    127,
    284.86699999999996
  );
  ctx.lineTo(144.067, 284.86699999999996);
  ctx.bezierCurveTo(149.187, 284.86699999999996, 152.6, 288.28, 152.6, 293.4);
  ctx.bezierCurveTo(152.6, 298.52, 149.187, 301.933, 144.067, 301.933);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(493.933, 438.467);
  ctx.lineTo(297.667, 438.467);
  ctx.bezierCurveTo(
    288.28,
    438.467,
    280.59999999999997,
    430.787,
    280.59999999999997,
    421.4
  );
  ctx.lineTo(280.59999999999997, 404.33299999999997);
  ctx.bezierCurveTo(
    280.59999999999997,
    394.94599999999997,
    288.28,
    387.26599999999996,
    297.667,
    387.26599999999996
  );
  ctx.lineTo(493.93399999999997, 387.26599999999996);
  ctx.bezierCurveTo(
    503.32099999999997,
    387.26599999999996,
    511.001,
    394.94599999999997,
    511.001,
    404.33299999999997
  );
  ctx.lineTo(511.001, 421.4);
  ctx.bezierCurveTo(511, 430.787, 503.32, 438.467, 493.933, 438.467);
  ctx.closePath();
  ctx.moveTo(493.933, 421.4);
  ctx.lineTo(493.933, 429.933);
  ctx.lineTo(493.933, 421.4);
  ctx.lineTo(493.933, 421.4);
  ctx.closePath();
  ctx.moveTo(297.667, 404.333);
  ctx.lineTo(297.667, 421.4);
  ctx.lineTo(493.93399999999997, 421.4);
  ctx.lineTo(493.93399999999997, 404.33299999999997);
  ctx.lineTo(297.667, 404.33299999999997);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(212.333, 438.467);
  ctx.lineTo(16.067, 438.467);
  ctx.bezierCurveTo(6.68, 438.467, -1, 430.787, -1, 421.4);
  ctx.lineTo(-1, 404.33299999999997);
  ctx.bezierCurveTo(
    -1,
    394.94599999999997,
    6.68,
    387.26599999999996,
    16.067,
    387.26599999999996
  );
  ctx.lineTo(212.334, 387.26599999999996);
  ctx.bezierCurveTo(
    221.721,
    387.26599999999996,
    229.401,
    394.94599999999997,
    229.401,
    404.33299999999997
  );
  ctx.lineTo(229.401, 421.4);
  ctx.bezierCurveTo(229.4, 430.787, 221.72, 438.467, 212.333, 438.467);
  ctx.closePath();
  ctx.moveTo(212.333, 421.4);
  ctx.lineTo(212.333, 429.933);
  ctx.lineTo(212.333, 421.4);
  ctx.lineTo(212.333, 421.4);
  ctx.closePath();
  ctx.moveTo(16.067, 404.333);
  ctx.lineTo(16.067, 421.4);
  ctx.lineTo(212.334, 421.4);
  ctx.lineTo(212.334, 404.33299999999997);
  ctx.lineTo(16.067, 404.33299999999997);
  ctx.closePath();
  ctx.fill();
};

const shorts3 = (ctx: CanvasRenderingContext2D) => {
  ctx.miterLimit = 4;
  ctx.scale(0.1, 0.1);
  ctx.scale(1.5625, 1.5625);
  ctx.translate(1, 1);
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(33.133, 161.133);
  ctx.lineTo(476.867, 161.133);
  ctx.lineTo(476.867, 127);
  ctx.lineTo(33.133, 127);
  ctx.lineTo(33.133, 161.133);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(33.133, 127);
  ctx.lineTo(476.867, 127);
  ctx.lineTo(476.867, 92.867);
  ctx.lineTo(33.133, 92.867);
  ctx.lineTo(33.133, 127);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(476.867, 161.133);
  ctx.lineTo(255, 161.133);
  ctx.lineTo(33.133, 161.133);
  ctx.lineTo(7.533000000000001, 417.13300000000004);
  ctx.lineTo(203.8, 417.13300000000004);
  ctx.lineTo(242.20000000000002, 315.586);
  ctx.bezierCurveTo(246.467, 303.639, 263.533, 303.639, 267.8, 315.586);
  ctx.lineTo(306.2, 417.13300000000004);
  ctx.lineTo(502.467, 417.13300000000004);
  ctx.lineTo(476.867, 161.133);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(451.267, 161.133);
  ctx.lineTo(476.867, 161.133);
  ctx.lineTo(476.867, 127);
  ctx.lineTo(451.267, 127);
  ctx.lineTo(451.267, 161.133);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(451.267, 127);
  ctx.lineTo(476.867, 127);
  ctx.lineTo(476.867, 92.867);
  ctx.lineTo(451.267, 92.867);
  ctx.lineTo(451.267, 127);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(293.4, 383);
  ctx.lineTo(306.2, 417.133);
  ctx.lineTo(502.467, 417.133);
  ctx.lineTo(499.053, 383);
  ctx.lineTo(293.4, 383);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(10.947, 383);
  ctx.lineTo(7.533, 417.133);
  ctx.lineTo(203.8, 417.133);
  ctx.lineTo(216.6, 383);
  ctx.lineTo(10.947, 383);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(255, 255);
  ctx.lineTo(255, 255);
  ctx.lineTo(255, 161.13299999999998);
  ctx.lineTo(289.133, 161.13299999999998);
  ctx.lineTo(289.133, 220.86599999999999);
  ctx.bezierCurveTo(289.133, 239.639, 273.773, 255, 255, 255);
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(109.933, 161.133);
  ctx.lineTo(33.13300000000001, 161.133);
  ctx.lineTo(22.04000000000001, 276.333);
  ctx.bezierCurveTo(72.387, 262.68, 109.933, 216.6, 109.933, 161.133);
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(397.507, 161.133);
  ctx.lineTo(474.307, 161.133);
  ctx.lineTo(485.40000000000003, 276.333);
  ctx.bezierCurveTo(435.053, 262.68, 397.507, 216.6, 397.507, 161.133);
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(476.867, 161.133);
  ctx.lineTo(451.267, 161.133);
  ctx.lineTo(476.867, 417.133);
  ctx.lineTo(502.467, 417.133);
  ctx.lineTo(476.867, 161.133);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(33.133, 161.133);
  ctx.lineTo(58.733, 161.133);
  ctx.lineTo(58.733, 127);
  ctx.lineTo(33.133, 127);
  ctx.lineTo(33.133, 161.133);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(33.133, 127);
  ctx.lineTo(58.733, 127);
  ctx.lineTo(58.733, 92.867);
  ctx.lineTo(33.133, 92.867);
  ctx.lineTo(33.133, 127);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(33.133, 161.133);
  ctx.lineTo(58.733, 161.133);
  ctx.lineTo(33.133, 417.133);
  ctx.lineTo(7.533, 417.133);
  ctx.lineTo(33.133, 161.133);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.BLACK;
  ctx.beginPath();
  ctx.moveTo(255, 263.533);
  ctx.bezierCurveTo(
    249.88,
    263.533,
    246.467,
    260.12,
    246.467,
    255.00000000000003
  );
  ctx.lineTo(246.467, 161.13300000000004);
  ctx.bezierCurveTo(
    246.467,
    156.01300000000003,
    249.88000000000002,
    152.60000000000005,
    255,
    152.60000000000005
  );
  ctx.lineTo(289.133, 152.60000000000005);
  ctx.bezierCurveTo(
    294.253,
    152.60000000000005,
    297.666,
    156.01300000000006,
    297.666,
    161.13300000000004
  );
  ctx.lineTo(297.666, 220.86600000000004);
  ctx.bezierCurveTo(297.667, 244.759, 278.893, 263.533, 255, 263.533);
  ctx.closePath();
  ctx.moveTo(263.533, 169.667);
  ctx.lineTo(263.533, 244.76);
  ctx.bezierCurveTo(
    273.773,
    241.34699999999998,
    280.6,
    231.95999999999998,
    280.6,
    220.867
  );
  ctx.lineTo(280.6, 169.66699999999997);
  ctx.lineTo(263.533, 169.66699999999997);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(476.867, 169.667);
  ctx.lineTo(33.133, 169.667);
  ctx.bezierCurveTo(28.013, 169.667, 24.6, 166.254, 24.6, 161.13400000000001);
  ctx.lineTo(24.6, 127);
  ctx.bezierCurveTo(24.6, 121.88, 28.013, 118.467, 33.133, 118.467);
  ctx.lineTo(476.866, 118.467);
  ctx.bezierCurveTo(481.986, 118.467, 485.399, 121.88, 485.399, 127);
  ctx.lineTo(485.399, 161.133);
  ctx.bezierCurveTo(485.4, 166.253, 481.987, 169.667, 476.867, 169.667);
  ctx.closePath();
  ctx.moveTo(41.667, 152.6);
  ctx.lineTo(468.33399999999995, 152.6);
  ctx.lineTo(468.33399999999995, 135.533);
  ctx.lineTo(41.667, 135.533);
  ctx.lineTo(41.667, 152.6);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(476.867, 135.533);
  ctx.lineTo(33.133, 135.533);
  ctx.bezierCurveTo(
    28.013,
    135.533,
    24.6,
    132.11999999999998,
    24.6,
    126.99999999999999
  );
  ctx.lineTo(24.6, 92.867);
  ctx.bezierCurveTo(24.6, 87.747, 28.013, 84.334, 33.133, 84.334);
  ctx.lineTo(476.866, 84.334);
  ctx.bezierCurveTo(481.986, 84.334, 485.399, 87.747, 485.399, 92.867);
  ctx.lineTo(485.399, 127);
  ctx.bezierCurveTo(485.4, 132.12, 481.987, 135.533, 476.867, 135.533);
  ctx.closePath();
  ctx.moveTo(41.667, 118.467);
  ctx.lineTo(468.33399999999995, 118.467);
  ctx.lineTo(468.33399999999995, 101.4);
  ctx.lineTo(41.667, 101.4);
  ctx.lineTo(41.667, 118.467);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(502.467, 425.667);
  ctx.lineTo(306.2, 425.667);
  ctx.bezierCurveTo(
    302.787,
    425.667,
    299.373,
    423.10699999999997,
    298.52,
    420.54699999999997
  );
  ctx.lineTo(260.12, 319);
  ctx.bezierCurveTo(259.267, 314.733, 255.853, 314.733, 255, 314.733);
  ctx.bezierCurveTo(254.147, 314.733, 251.587, 314.733, 249.88, 318.146);
  ctx.lineTo(211.48, 419.693);
  ctx.bezierCurveTo(
    210.62699999999998,
    423.106,
    207.213,
    425.666,
    203.79999999999998,
    425.666
  );
  ctx.lineTo(7.533, 425.666);
  ctx.bezierCurveTo(
    4.973000000000001,
    425.666,
    2.4130000000000003,
    424.813,
    1.5600000000000005,
    423.106
  );
  ctx.bezierCurveTo(-0.147, 421.4, -1, 418.84, -1, 416.28);
  ctx.lineTo(24.6, 160.27999999999997);
  ctx.bezierCurveTo(
    25.453000000000003,
    156.01299999999998,
    28.867,
    152.59999999999997,
    33.133,
    152.59999999999997
  );
  ctx.lineTo(476.866, 152.59999999999997);
  ctx.bezierCurveTo(
    481.133,
    152.59999999999997,
    484.546,
    156.01299999999998,
    485.399,
    160.27999999999997
  );
  ctx.lineTo(510.999, 416.28);
  ctx.bezierCurveTo(
    510.999,
    418.84,
    510.146,
    421.4,
    508.439,
    423.10699999999997
  );
  ctx.bezierCurveTo(507.587, 424.813, 505.027, 425.667, 502.467, 425.667);
  ctx.closePath();
  ctx.moveTo(312.173, 408.6);
  ctx.lineTo(493.08, 408.6);
  ctx.lineTo(469.187, 169.66700000000003);
  ctx.lineTo(40.813, 169.66700000000003);
  ctx.lineTo(16.92, 408.6);
  ctx.lineTo(197.827, 408.6);
  ctx.lineTo(233.667, 312.173);
  ctx.bezierCurveTo(237.08, 303.64, 245.614, 297.666, 255, 297.666);
  ctx.bezierCurveTo(
    264.386,
    297.666,
    272.92,
    303.639,
    276.33299999999997,
    312.173
  );
  ctx.lineTo(312.173, 408.6);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(22.04, 284.867);
  ctx.bezierCurveTo(
    20.333,
    284.867,
    17.773,
    284.014,
    16.919999999999998,
    283.16
  );
  ctx.bezierCurveTo(
    14.359999999999998,
    281.45300000000003,
    13.506999999999998,
    278.89300000000003,
    13.506999999999998,
    275.48
  );
  ctx.lineTo(24.6, 160.28);
  ctx.bezierCurveTo(25.453000000000003, 156.013, 28.867, 152.6, 33.133, 152.6);
  ctx.lineTo(109.93299999999999, 152.6);
  ctx.bezierCurveTo(
    115.053,
    152.6,
    118.466,
    156.013,
    118.466,
    161.13299999999998
  );
  ctx.bezierCurveTo(
    118.466,
    218.30599999999998,
    80.066,
    269.506,
    24.59899999999999,
    284.866
  );
  ctx.bezierCurveTo(23.747, 284.867, 22.893, 284.867, 22.04, 284.867);
  ctx.closePath();
  ctx.moveTo(40.813, 169.667);
  ctx.lineTo(31.426000000000002, 264.387);
  ctx.bezierCurveTo(
    70.679,
    248.174,
    97.986,
    211.48000000000002,
    101.399,
    169.667
  );
  ctx.lineTo(40.813, 169.667);
  ctx.lineTo(40.813, 169.667);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(485.4, 284.867);
  ctx.bezierCurveTo(
    484.54699999999997,
    284.867,
    483.693,
    284.867,
    482.84,
    284.867
  );
  ctx.bezierCurveTo(
    427.373,
    269.507,
    388.97299999999996,
    219.16000000000003,
    388.97299999999996,
    161.13400000000001
  );
  ctx.bezierCurveTo(
    388.97299999999996,
    156.014,
    392.38599999999997,
    152.60100000000003,
    397.506,
    152.60100000000003
  );
  ctx.lineTo(474.306, 152.60100000000003);
  ctx.bezierCurveTo(
    478.573,
    152.60100000000003,
    481.986,
    156.01400000000004,
    482.839,
    160.28100000000003
  );
  ctx.lineTo(493.932, 273.774);
  ctx.bezierCurveTo(493.932, 274.627, 493.932, 275.481, 493.932, 276.334);
  ctx.bezierCurveTo(493.933, 280.6, 490.52, 284.867, 485.4, 284.867);
  ctx.lineTo(485.4, 284.867);
  ctx.closePath();
  ctx.moveTo(406.04, 169.667);
  ctx.bezierCurveTo(
    409.45300000000003,
    211.48000000000002,
    436.76,
    248.174,
    475.16,
    264.387
  );
  ctx.lineTo(466.627, 169.667);
  ctx.lineTo(406.04, 169.667);
  ctx.lineTo(406.04, 169.667);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(502.467, 425.667);
  ctx.lineTo(306.2, 425.667);
  ctx.bezierCurveTo(
    302.787,
    425.667,
    299.373,
    423.10699999999997,
    298.52,
    420.54699999999997
  );
  ctx.lineTo(285.71999999999997, 386.414);
  ctx.bezierCurveTo(
    284.86699999999996,
    383.854,
    284.86699999999996,
    380.441,
    286.573,
    378.734
  );
  ctx.bezierCurveTo(
    288.28,
    376.174,
    290.84,
    375.32099999999997,
    293.4,
    375.32099999999997
  );
  ctx.lineTo(499.053, 375.32099999999997);
  ctx.bezierCurveTo(
    503.32,
    375.32099999999997,
    506.733,
    378.734,
    507.586,
    383.001
  );
  ctx.lineTo(511, 417.133);
  ctx.bezierCurveTo(511, 419.693, 510.147, 422.253, 508.44, 423.96);
  ctx.bezierCurveTo(507.587, 424.813, 505.027, 425.667, 502.467, 425.667);
  ctx.closePath();
  ctx.moveTo(312.173, 408.6);
  ctx.lineTo(493.08, 408.6);
  ctx.lineTo(491.373, 391.533);
  ctx.lineTo(305.347, 391.533);
  ctx.lineTo(312.173, 408.6);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(203.8, 425.667);
  ctx.lineTo(7.533, 425.667);
  ctx.bezierCurveTo(
    4.973000000000001,
    425.667,
    2.4130000000000003,
    424.81399999999996,
    1.5600000000000005,
    423.10699999999997
  );
  ctx.bezierCurveTo(-0.147, 421.4, -1, 418.84, -1, 416.28);
  ctx.lineTo(2.413, 382.147);
  ctx.bezierCurveTo(3.266, 377.88, 6.68, 374.467, 10.946, 374.467);
  ctx.lineTo(216.6, 374.467);
  ctx.bezierCurveTo(219.16, 374.467, 221.72, 376.174, 223.427, 377.88);
  ctx.bezierCurveTo(225.134, 380.44, 225.134, 383, 224.28, 385.56);
  ctx.lineTo(211.48, 419.693);
  ctx.bezierCurveTo(210.627, 423.107, 207.213, 425.667, 203.8, 425.667);
  ctx.closePath();
  ctx.moveTo(16.92, 408.6);
  ctx.lineTo(197.827, 408.6);
  ctx.lineTo(204.654, 391.533);
  ctx.lineTo(18.627, 391.533);
  ctx.lineTo(16.92, 408.6);
  ctx.closePath();
  ctx.fill();
};

const shorts4 = (ctx: CanvasRenderingContext2D) => {
  ctx.miterLimit = 4;
  ctx.scale(0.1, 0.1);
  ctx.scale(1.5588464536243178, 1.5588464536243178);
  ctx.translate(1, 1);
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(468.9, 153.2);
  ctx.lineTo(42.3, 153.2);
  ctx.lineTo(42.3, 119.1);
  ctx.bezierCurveTo(42.3, 109.69999999999999, 49.9, 102, 59.4, 102);
  ctx.lineTo(451.9, 102);
  ctx.bezierCurveTo(461.29999999999995, 102, 469, 109.6, 469, 119.1);
  ctx.lineTo(469, 153.2);
  ctx.lineTo(468.9, 153.2);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(468.9, 153.2);
  ctx.lineTo(255.6, 153.2);
  ctx.lineTo(42.3, 153.2);
  ctx.lineTo(8.1, 409.2);
  ctx.lineTo(42.3, 409.2);
  ctx.lineTo(59.3, 383.6);
  ctx.lineTo(76.4, 409.2);
  ctx.lineTo(93.5, 409.2);
  ctx.lineTo(110.5, 383.6);
  ctx.lineTo(127.6, 409.2);
  ctx.lineTo(144.7, 409.2);
  ctx.lineTo(161.7, 383.6);
  ctx.lineTo(178.8, 409.2);
  ctx.lineTo(212.9, 409.2);
  ctx.lineTo(255.6, 281.2);
  ctx.lineTo(298.3, 409.2);
  ctx.lineTo(332.4, 409.2);
  ctx.lineTo(349.5, 383.6);
  ctx.lineTo(366.5, 409.2);
  ctx.lineTo(383.6, 409.2);
  ctx.lineTo(400.7, 383.6);
  ctx.lineTo(417.7, 409.2);
  ctx.lineTo(434.8, 409.2);
  ctx.lineTo(451.9, 383.6);
  ctx.lineTo(468.9, 409.2);
  ctx.lineTo(503.1, 409.2);
  ctx.lineTo(468.9, 153.2);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(110.5, 153.2);
  ctx.lineTo(42.3, 153.2);
  ctx.lineTo(27.9, 260.9);
  ctx.bezierCurveTo(70.3, 241.8, 110.5, 200.9, 110.5, 153.2);
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(483.5, 262.2);
  ctx.lineTo(469, 153.2);
  ctx.lineTo(398.1, 153.2);
  ctx.bezierCurveTo(398.1, 202, 439.6, 243.8, 483.5, 262.2);
  ctx.fill();
  ctx.fillStyle = Colours.GREEN;
  ctx.beginPath();
  ctx.moveTo(275.5, 340.9);
  ctx.lineTo(494, 340.9);
  ctx.lineTo(487.1, 289.7);
  ctx.lineTo(258.4, 289.7);
  ctx.lineTo(275.5, 340.9);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(451.9, 102);
  ctx.lineTo(426.29999999999995, 102);
  ctx.bezierCurveTo(435.69999999999993, 102, 443.4, 109.6, 443.4, 119.1);
  ctx.lineTo(443.4, 153.2);
  ctx.lineTo(469, 153.2);
  ctx.lineTo(469, 119.1);
  ctx.bezierCurveTo(468.9, 109.6, 461.3, 102, 451.9, 102);
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(468.9, 153.2);
  ctx.lineTo(443.3, 153.2);
  ctx.lineTo(477.5, 409.2);
  ctx.lineTo(503.1, 409.2);
  ctx.lineTo(468.9, 153.2);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.GREEN;
  ctx.beginPath();
  ctx.moveTo(487.1, 289.7);
  ctx.lineTo(461.5, 289.7);
  ctx.lineTo(468.4, 340.9);
  ctx.lineTo(494, 340.9);
  ctx.lineTo(487.1, 289.7);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.GREEN;
  ctx.beginPath();
  ctx.moveTo(235.7, 340.9);
  ctx.lineTo(252.8, 289.7);
  ctx.lineTo(24.1, 289.7);
  ctx.lineTo(17.2, 340.9);
  ctx.lineTo(235.7, 340.9);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(59.3, 102);
  ctx.lineTo(84.9, 102);
  ctx.bezierCurveTo(
    75.5,
    102,
    67.80000000000001,
    109.6,
    67.80000000000001,
    119.1
  );
  ctx.lineTo(67.80000000000001, 153.2);
  ctx.lineTo(42.3, 153.2);
  ctx.lineTo(42.3, 119.1);
  ctx.bezierCurveTo(42.3, 109.6, 49.9, 102, 59.3, 102);
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(42.3, 153.2);
  ctx.lineTo(67.9, 153.2);
  ctx.lineTo(33.7, 409.2);
  ctx.lineTo(8.1, 409.2);
  ctx.lineTo(42.3, 153.2);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.BLACK;
  ctx.beginPath();
  ctx.moveTo(476.9, 161.2);
  ctx.lineTo(34.3, 161.2);
  ctx.lineTo(34.3, 119.1);
  ctx.bezierCurveTo(34.3, 105.3, 45.5, 94, 59.4, 94);
  ctx.lineTo(451.9, 94);
  ctx.bezierCurveTo(465.7, 94, 477, 105.2, 477, 119.1);
  ctx.lineTo(477, 161.2);
  ctx.lineTo(476.9, 161.2);
  ctx.closePath();
  ctx.moveTo(50.3, 145.2);
  ctx.lineTo(461, 145.2);
  ctx.lineTo(461, 119.1);
  ctx.bezierCurveTo(461, 114.1, 456.9, 110, 451.9, 110);
  ctx.lineTo(59.3, 110);
  ctx.bezierCurveTo(
    54.3,
    110,
    50.199999999999996,
    114.1,
    50.199999999999996,
    119.1
  );
  ctx.lineTo(50.199999999999996, 145.2);
  ctx.lineTo(50.3, 145.2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(512.2, 417.2);
  ctx.lineTo(464.6, 417.2);
  ctx.lineTo(451.8, 398);
  ctx.lineTo(439, 417.2);
  ctx.lineTo(413.4, 417.2);
  ctx.lineTo(400.6, 398);
  ctx.lineTo(387.8, 417.2);
  ctx.lineTo(362.2, 417.2);
  ctx.lineTo(349.4, 398);
  ctx.lineTo(336.59999999999997, 417.2);
  ctx.lineTo(292.4, 417.2);
  ctx.lineTo(255.59999999999997, 306.5);
  ctx.lineTo(218.69999999999996, 417.2);
  ctx.lineTo(174.49999999999994, 417.2);
  ctx.lineTo(161.7, 398);
  ctx.lineTo(148.89999999999998, 417.2);
  ctx.lineTo(123.29999999999998, 417.2);
  ctx.lineTo(110.5, 398);
  ctx.lineTo(97.7, 417.2);
  ctx.lineTo(72.1, 417.2);
  ctx.lineTo(59.3, 398);
  ctx.lineTo(46.5, 417.2);
  ctx.lineTo(-1, 417.2);
  ctx.lineTo(35.3, 145.2);
  ctx.lineTo(476, 145.2);
  ctx.lineTo(512.2, 417.2);
  ctx.closePath();
  ctx.moveTo(473.2, 401.2);
  ctx.lineTo(493.9, 401.2);
  ctx.lineTo(461.9, 161.2);
  ctx.lineTo(49.3, 161.2);
  ctx.lineTo(17.299999999999997, 401.2);
  ctx.lineTo(38, 401.2);
  ctx.lineTo(59.3, 369.2);
  ctx.lineTo(80.6, 401.2);
  ctx.lineTo(89.1, 401.2);
  ctx.lineTo(110.39999999999999, 369.2);
  ctx.lineTo(131.7, 401.2);
  ctx.lineTo(140.2, 401.2);
  ctx.lineTo(161.5, 369.2);
  ctx.lineTo(182.8, 401.2);
  ctx.lineTo(206.9, 401.2);
  ctx.lineTo(255.60000000000002, 255.89999999999998);
  ctx.lineTo(304, 401.2);
  ctx.lineTo(328.1, 401.2);
  ctx.lineTo(349.40000000000003, 369.2);
  ctx.lineTo(370.70000000000005, 401.2);
  ctx.lineTo(379.20000000000005, 401.2);
  ctx.lineTo(400.50000000000006, 369.2);
  ctx.lineTo(421.80000000000007, 401.2);
  ctx.lineTo(430.30000000000007, 401.2);
  ctx.lineTo(451.6000000000001, 369.2);
  ctx.lineTo(473.2, 401.2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(18.1, 274.1);
  ctx.lineTo(35.3, 145.20000000000002);
  ctx.lineTo(118.6, 145.20000000000002);
  ctx.lineTo(118.6, 153.20000000000002);
  ctx.bezierCurveTo(
    118.6,
    205.5,
    74.69999999999999,
    248.60000000000002,
    31.299999999999997,
    268.20000000000005
  );
  ctx.lineTo(18.1, 274.1);
  ctx.closePath();
  ctx.moveTo(49.3, 161.2);
  ctx.lineTo(37.9, 246.79999999999998);
  ctx.bezierCurveTo(69.6, 228.7, 98.4, 197.7, 102.19999999999999, 161.2);
  ctx.lineTo(49.3, 161.2);
  ctx.lineTo(49.3, 161.2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(493.3, 275.1);
  ctx.lineTo(480.40000000000003, 269.70000000000005);
  ctx.bezierCurveTo(
    456.40000000000003,
    259.6,
    434.40000000000003,
    243.50000000000006,
    418.20000000000005,
    224.30000000000004
  );
  ctx.bezierCurveTo(
    399.80000000000007,
    202.40000000000003,
    390.1,
    177.90000000000003,
    390.1,
    153.20000000000005
  );
  ctx.lineTo(390.1, 145.20000000000005);
  ctx.lineTo(476, 145.20000000000005);
  ctx.lineTo(493.3, 275.1);
  ctx.closePath();
  ctx.moveTo(406.5, 161.2);
  ctx.bezierCurveTo(410.4, 199.1, 441.3, 231, 473.6, 248.6);
  ctx.lineTo(461.90000000000003, 161.2);
  ctx.lineTo(406.5, 161.2);
  ctx.lineTo(406.5, 161.2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(503.1, 348.9);
  ctx.lineTo(269.7, 348.9);
  ctx.lineTo(247.29999999999998, 281.7);
  ctx.lineTo(494.1, 281.7);
  ctx.lineTo(503.1, 348.9);
  ctx.closePath();
  ctx.moveTo(281.3, 332.9);
  ctx.lineTo(484.8, 332.9);
  ctx.lineTo(480.1, 297.7);
  ctx.lineTo(269.5, 297.7);
  ctx.lineTo(281.3, 332.9);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(241.5, 348.9);
  ctx.lineTo(8.1, 348.9);
  ctx.lineTo(17.1, 281.7);
  ctx.lineTo(263.90000000000003, 281.7);
  ctx.lineTo(241.5, 348.9);
  ctx.closePath();
  ctx.moveTo(26.4, 332.9);
  ctx.lineTo(230, 332.9);
  ctx.lineTo(241.7, 297.7);
  ctx.lineTo(31.1, 297.7);
  ctx.lineTo(26.4, 332.9);
  ctx.closePath();
  ctx.fill();
};

const shorts5 = (ctx: CanvasRenderingContext2D) => {
  ctx.miterLimit = 4;
  ctx.scale(0.1, 0.1);
  ctx.scale(1.5588464536243178, 1.5588464536243178);
  ctx.translate(1, 1);
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(468.9, 153.2);
  ctx.lineTo(42.3, 153.2);
  ctx.lineTo(42.3, 119.1);
  ctx.bezierCurveTo(42.3, 109.69999999999999, 49.9, 102, 59.4, 102);
  ctx.lineTo(451.9, 102);
  ctx.bezierCurveTo(461.29999999999995, 102, 469, 109.6, 469, 119.1);
  ctx.lineTo(469, 153.2);
  ctx.lineTo(468.9, 153.2);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(468.9, 153.2);
  ctx.lineTo(255.6, 153.2);
  ctx.lineTo(42.3, 153.2);
  ctx.lineTo(8.1, 409.2);
  ctx.lineTo(42.3, 409.2);
  ctx.lineTo(59.3, 383.6);
  ctx.lineTo(76.4, 409.2);
  ctx.lineTo(93.5, 409.2);
  ctx.lineTo(110.5, 383.6);
  ctx.lineTo(127.6, 409.2);
  ctx.lineTo(144.7, 409.2);
  ctx.lineTo(161.7, 383.6);
  ctx.lineTo(178.8, 409.2);
  ctx.lineTo(212.9, 409.2);
  ctx.lineTo(255.6, 281.2);
  ctx.lineTo(298.3, 409.2);
  ctx.lineTo(332.4, 409.2);
  ctx.lineTo(349.5, 383.6);
  ctx.lineTo(366.5, 409.2);
  ctx.lineTo(383.6, 409.2);
  ctx.lineTo(400.7, 383.6);
  ctx.lineTo(417.7, 409.2);
  ctx.lineTo(434.8, 409.2);
  ctx.lineTo(451.9, 383.6);
  ctx.lineTo(468.9, 409.2);
  ctx.lineTo(503.1, 409.2);
  ctx.lineTo(468.9, 153.2);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(110.5, 153.2);
  ctx.lineTo(42.3, 153.2);
  ctx.lineTo(27.6, 262.9);
  ctx.bezierCurveTo(69.2, 243.3, 110.5, 200, 110.5, 153.2);
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(483.6, 262.9);
  ctx.lineTo(469, 153.2);
  ctx.lineTo(398.1, 153.2);
  ctx.bezierCurveTo(398.1, 197.9, 442, 242.3, 483.6, 262.9);
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(451.9, 102);
  ctx.lineTo(426.29999999999995, 102);
  ctx.bezierCurveTo(435.69999999999993, 102, 443.4, 109.6, 443.4, 119.1);
  ctx.lineTo(443.4, 153.2);
  ctx.lineTo(469, 153.2);
  ctx.lineTo(469, 119.1);
  ctx.bezierCurveTo(468.9, 109.6, 461.3, 102, 451.9, 102);
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(468.9, 153.2);
  ctx.lineTo(443.3, 153.2);
  ctx.lineTo(477.5, 409.2);
  ctx.lineTo(503.1, 409.2);
  ctx.lineTo(468.9, 153.2);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(59.3, 102);
  ctx.lineTo(84.9, 102);
  ctx.bezierCurveTo(
    75.5,
    102,
    67.80000000000001,
    109.6,
    67.80000000000001,
    119.1
  );
  ctx.lineTo(67.80000000000001, 153.2);
  ctx.lineTo(42.3, 153.2);
  ctx.lineTo(42.3, 119.1);
  ctx.bezierCurveTo(42.3, 109.6, 49.9, 102, 59.3, 102);
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(42.3, 153.2);
  ctx.lineTo(67.9, 153.2);
  ctx.lineTo(33.7, 409.2);
  ctx.lineTo(8.1, 409.2);
  ctx.lineTo(42.3, 153.2);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.BLACK;
  ctx.beginPath();
  ctx.moveTo(187.3, 246.5);
  ctx.bezierCurveTo(
    187.20000000000002,
    246.5,
    187.20000000000002,
    246.5,
    187.10000000000002,
    246.5
  );
  ctx.bezierCurveTo(
    182.70000000000002,
    246.4,
    179.20000000000002,
    242.8,
    179.3,
    238.3
  );
  ctx.bezierCurveTo(180.5, 178.8, 249.4, 147.10000000000002, 252.3, 145.8);
  ctx.lineTo(261.3, 141.8);
  ctx.lineTo(263.40000000000003, 151.4);
  ctx.bezierCurveTo(
    263.40000000000003,
    151.5,
    267.20000000000005,
    167.5,
    278.8,
    183.1
  );
  ctx.bezierCurveTo(293.8, 203.2, 314.5, 213.4, 340.40000000000003, 213.4);
  ctx.bezierCurveTo(340.6, 213.4, 340.8, 213.4, 340.90000000000003, 213.4);
  ctx.bezierCurveTo(
    345.3,
    213.4,
    348.90000000000003,
    217,
    348.90000000000003,
    221.4
  );
  ctx.bezierCurveTo(
    348.90000000000003,
    225.8,
    345.40000000000003,
    229.4,
    340.90000000000003,
    229.4
  );
  ctx.bezierCurveTo(
    340.70000000000005,
    229.4,
    340.50000000000006,
    229.4,
    340.3,
    229.4
  );
  ctx.bezierCurveTo(
    301.1,
    229.4,
    278,
    209.20000000000002,
    265.5,
    192.10000000000002
  );
  ctx.bezierCurveTo(
    258,
    181.90000000000003,
    253.4,
    171.8,
    250.8,
    164.60000000000002
  );
  ctx.bezierCurveTo(
    233.9,
    174.3,
    196,
    200.10000000000002,
    195.3,
    238.60000000000002
  );
  ctx.bezierCurveTo(195.2, 243.1, 191.7, 246.5, 187.3, 246.5);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(476.9, 161.2);
  ctx.lineTo(34.3, 161.2);
  ctx.lineTo(34.3, 119.1);
  ctx.bezierCurveTo(34.3, 105.3, 45.5, 94, 59.4, 94);
  ctx.lineTo(451.9, 94);
  ctx.bezierCurveTo(465.7, 94, 477, 105.2, 477, 119.1);
  ctx.lineTo(477, 161.2);
  ctx.lineTo(476.9, 161.2);
  ctx.closePath();
  ctx.moveTo(50.3, 145.2);
  ctx.lineTo(461, 145.2);
  ctx.lineTo(461, 119.1);
  ctx.bezierCurveTo(461, 114.1, 456.9, 110, 451.9, 110);
  ctx.lineTo(59.3, 110);
  ctx.bezierCurveTo(
    54.3,
    110,
    50.199999999999996,
    114.1,
    50.199999999999996,
    119.1
  );
  ctx.lineTo(50.199999999999996, 145.2);
  ctx.lineTo(50.3, 145.2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(512.2, 417.2);
  ctx.lineTo(464.6, 417.2);
  ctx.lineTo(451.8, 398);
  ctx.lineTo(439, 417.2);
  ctx.lineTo(413.4, 417.2);
  ctx.lineTo(400.6, 398);
  ctx.lineTo(387.8, 417.2);
  ctx.lineTo(362.2, 417.2);
  ctx.lineTo(349.4, 398);
  ctx.lineTo(336.59999999999997, 417.2);
  ctx.lineTo(292.4, 417.2);
  ctx.lineTo(255.59999999999997, 306.5);
  ctx.lineTo(218.69999999999996, 417.2);
  ctx.lineTo(174.49999999999994, 417.2);
  ctx.lineTo(161.7, 398);
  ctx.lineTo(148.89999999999998, 417.2);
  ctx.lineTo(123.29999999999998, 417.2);
  ctx.lineTo(110.5, 398);
  ctx.lineTo(97.7, 417.2);
  ctx.lineTo(72.1, 417.2);
  ctx.lineTo(59.3, 398);
  ctx.lineTo(46.5, 417.2);
  ctx.lineTo(-1, 417.2);
  ctx.lineTo(35.3, 145.2);
  ctx.lineTo(476, 145.2);
  ctx.lineTo(512.2, 417.2);
  ctx.closePath();
  ctx.moveTo(473.2, 401.2);
  ctx.lineTo(493.9, 401.2);
  ctx.lineTo(461.9, 161.2);
  ctx.lineTo(49.3, 161.2);
  ctx.lineTo(17.299999999999997, 401.2);
  ctx.lineTo(38, 401.2);
  ctx.lineTo(59.3, 369.2);
  ctx.lineTo(80.6, 401.2);
  ctx.lineTo(89.1, 401.2);
  ctx.lineTo(110.39999999999999, 369.2);
  ctx.lineTo(131.7, 401.2);
  ctx.lineTo(140.2, 401.2);
  ctx.lineTo(161.5, 369.2);
  ctx.lineTo(182.8, 401.2);
  ctx.lineTo(206.9, 401.2);
  ctx.lineTo(255.60000000000002, 255.89999999999998);
  ctx.lineTo(304, 401.2);
  ctx.lineTo(328.1, 401.2);
  ctx.lineTo(349.40000000000003, 369.2);
  ctx.lineTo(370.70000000000005, 401.2);
  ctx.lineTo(379.20000000000005, 401.2);
  ctx.lineTo(400.50000000000006, 369.2);
  ctx.lineTo(421.80000000000007, 401.2);
  ctx.lineTo(430.30000000000007, 401.2);
  ctx.lineTo(451.6000000000001, 369.2);
  ctx.lineTo(473.2, 401.2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(110.5, 297.7);
  ctx.lineTo(76.4, 297.7);
  ctx.bezierCurveTo(72, 297.7, 68.4, 294.09999999999997, 68.4, 289.7);
  ctx.bezierCurveTo(68.4, 285.3, 72, 281.7, 76.4, 281.7);
  ctx.lineTo(110.5, 281.7);
  ctx.bezierCurveTo(114.9, 281.7, 118.5, 285.3, 118.5, 289.7);
  ctx.bezierCurveTo(118.5, 294.09999999999997, 115, 297.7, 110.5, 297.7);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(17.8, 276.5);
  ctx.lineTo(35.3, 145.2);
  ctx.lineTo(118.6, 145.2);
  ctx.lineTo(118.6, 153.2);
  ctx.bezierCurveTo(
    118.6,
    205.2,
    73.3,
    250.29999999999998,
    31.099999999999994,
    270.2
  );
  ctx.lineTo(17.8, 276.5);
  ctx.closePath();
  ctx.moveTo(49.3, 161.2);
  ctx.lineTo(37.599999999999994, 248.5);
  ctx.bezierCurveTo(69.3, 229.3, 98.1, 196.3, 102.1, 161.2);
  ctx.lineTo(49.3, 161.2);
  ctx.lineTo(49.3, 161.2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(493.5, 276.7);
  ctx.lineTo(480, 270);
  ctx.bezierCurveTo(457.4, 258.8, 435.2, 241.4, 419.1, 222.2);
  ctx.bezierCurveTo(400.1, 199.6, 390.1, 175.7, 390.1, 153.2);
  ctx.lineTo(390.1, 145.2);
  ctx.lineTo(476, 145.2);
  ctx.lineTo(493.5, 276.7);
  ctx.closePath();
  ctx.moveTo(406.6, 161.2);
  ctx.bezierCurveTo(
    409.20000000000005,
    181.6,
    421.1,
    199.79999999999998,
    431.40000000000003,
    211.89999999999998
  );
  ctx.bezierCurveTo(
    442.90000000000003,
    225.59999999999997,
    457.8,
    238.29999999999998,
    473.6,
    248.09999999999997
  );
  ctx.lineTo(462, 161.2);
  ctx.lineTo(406.6, 161.2);
  ctx.closePath();
  ctx.fill();
};

const shorts6 = (ctx: CanvasRenderingContext2D) => {
  ctx.miterLimit = 4;
  ctx.scale(0.1, 0.1);
  ctx.scale(1.5625, 1.5625);
  ctx.translate(1, 1);
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(41.667, 105.667);
  ctx.lineTo(41.667, 104.81400000000001);
  ctx.bezierCurveTo(16.92, 127, 7.533, 195.267, 7.533, 276.333);
  ctx.bezierCurveTo(
    7.533,
    375.32000000000005,
    25.453000000000003,
    455.533,
    58.733000000000004,
    455.533
  );
  ctx.lineTo(178.2, 455.533);
  ctx.bezierCurveTo(
    202.947,
    455.533,
    225.13299999999998,
    440.173,
    234.51999999999998,
    416.28000000000003
  );
  ctx.lineTo(246.46699999999998, 384.70700000000005);
  ctx.bezierCurveTo(
    249.027,
    377.02700000000004,
    260.974,
    377.02700000000004,
    263.534,
    384.70700000000005
  );
  ctx.lineTo(275.481, 416.28000000000003);
  ctx.bezierCurveTo(
    284.014,
    439.32000000000005,
    306.201,
    455.533,
    331.801,
    455.533
  );
  ctx.lineTo(451.268, 455.533);
  ctx.bezierCurveTo(
    484.548,
    455.533,
    502.46799999999996,
    375.32000000000005,
    502.46799999999996,
    276.333
  );
  ctx.bezierCurveTo(
    502.46799999999996,
    195.26600000000002,
    493.08099999999996,
    127.00000000000003,
    468.335,
    104.81300000000002
  );
  ctx.lineTo(468.335, 105.66600000000001);
  ctx.lineTo(41.667, 105.667);
  ctx.lineTo(41.667, 105.667);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(499.907, 207.213);
  ctx.bezierCurveTo(
    495.64,
    158.57299999999998,
    486.25399999999996,
    121.88,
    469.187,
    105.666
  );
  ctx.lineTo(468.334, 105.666);
  ctx.lineTo(417.134, 105.666);
  ctx.lineTo(417.134, 114.199);
  ctx.bezierCurveTo(417.133, 161.987, 452.973, 202.093, 499.907, 207.213);
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(40.813, 105.667);
  ctx.bezierCurveTo(24.6, 121.88, 14.36, 159.427, 10.093, 207.213);
  ctx.bezierCurveTo(
    57.025999999999996,
    202.093,
    92.866,
    161.986,
    92.866,
    114.19999999999999
  );
  ctx.lineTo(92.866, 105.66699999999999);
  ctx.lineTo(41.666, 105.66699999999999);
  ctx.lineTo(40.813, 105.66699999999999);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(468.333, 105.667);
  ctx.lineTo(41.667, 105.667);
  ctx.lineTo(41.667, 71.533);
  ctx.bezierCurveTo(41.667, 62.146, 49.347, 54.466, 58.734, 54.466);
  ctx.lineTo(451.267, 54.466);
  ctx.bezierCurveTo(460.654, 54.466, 468.334, 62.146, 468.334, 71.533);
  ctx.lineTo(468.333, 105.667);
  ctx.lineTo(468.333, 105.667);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(451.267, 54.467);
  ctx.lineTo(425.667, 54.467);
  ctx.bezierCurveTo(
    435.054,
    54.467,
    442.734,
    62.147,
    442.734,
    71.53399999999999
  );
  ctx.lineTo(442.734, 105.667);
  ctx.lineTo(468.334, 105.667);
  ctx.lineTo(468.334, 71.533);
  ctx.bezierCurveTo(468.333, 62.147, 460.653, 54.467, 451.267, 54.467);
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(468.333, 104.813);
  ctx.lineTo(468.333, 105.666);
  ctx.lineTo(443.586, 105.666);
  ctx.bezierCurveTo(
    467.47900000000004,
    128.706,
    476.866,
    196.119,
    476.866,
    276.33299999999997
  );
  ctx.bezierCurveTo(
    476.866,
    375.31999999999994,
    458.94599999999997,
    455.53299999999996,
    425.666,
    455.53299999999996
  );
  ctx.lineTo(451.266, 455.53299999999996);
  ctx.bezierCurveTo(
    484.54600000000005,
    455.53299999999996,
    502.466,
    375.31999999999994,
    502.466,
    276.33299999999997
  );
  ctx.bezierCurveTo(502.467, 195.267, 493.08, 127, 468.333, 104.813);
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(58.733, 54.467);
  ctx.lineTo(84.333, 54.467);
  ctx.bezierCurveTo(
    74.946,
    54.467,
    67.26599999999999,
    62.147,
    67.26599999999999,
    71.53399999999999
  );
  ctx.lineTo(67.26599999999999, 105.667);
  ctx.lineTo(41.66599999999999, 105.667);
  ctx.lineTo(41.66599999999999, 71.533);
  ctx.bezierCurveTo(41.667, 62.147, 49.347, 54.467, 58.733, 54.467);
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(41.667, 104.813);
  ctx.lineTo(41.667, 105.666);
  ctx.lineTo(66.414, 105.666);
  ctx.bezierCurveTo(
    42.521,
    128.706,
    33.134,
    196.119,
    33.134,
    276.33299999999997
  );
  ctx.bezierCurveTo(
    33.134,
    375.31999999999994,
    51.054,
    455.53299999999996,
    84.334,
    455.53299999999996
  );
  ctx.lineTo(58.734, 455.53299999999996);
  ctx.bezierCurveTo(
    25.454,
    455.53299999999996,
    7.533999999999999,
    375.31999999999994,
    7.533999999999999,
    276.33299999999997
  );
  ctx.bezierCurveTo(7.533, 195.267, 16.92, 127, 41.667, 104.813);
  ctx.fill();
  ctx.fillStyle = Colours.BLACK;
  ctx.beginPath();
  ctx.moveTo(101.4, 412.867);
  ctx.bezierCurveTo(96.28, 412.867, 92.867, 409.454, 92.867, 404.334);
  ctx.bezierCurveTo(92.867, 389.827, 81.774, 378.734, 67.267, 378.734);
  ctx.bezierCurveTo(
    62.147,
    378.734,
    58.733999999999995,
    375.32099999999997,
    58.733999999999995,
    370.20099999999996
  );
  ctx.bezierCurveTo(
    58.733999999999995,
    365.08099999999996,
    62.14699999999999,
    361.66799999999995,
    67.267,
    361.66799999999995
  );
  ctx.bezierCurveTo(
    80.92,
    361.66799999999995,
    93.72,
    368.49499999999995,
    101.4,
    378.73499999999996
  );
  ctx.bezierCurveTo(
    109.08000000000001,
    368.49499999999995,
    121.88000000000001,
    361.66799999999995,
    135.53300000000002,
    361.66799999999995
  );
  ctx.bezierCurveTo(
    140.65300000000002,
    361.66799999999995,
    144.066,
    365.08099999999996,
    144.066,
    370.20099999999996
  );
  ctx.bezierCurveTo(
    144.066,
    375.32099999999997,
    140.653,
    378.734,
    135.53300000000002,
    378.734
  );
  ctx.bezierCurveTo(
    121.02600000000001,
    378.734,
    109.93300000000002,
    389.827,
    109.93300000000002,
    404.334
  );
  ctx.bezierCurveTo(109.933, 409.453, 106.52, 412.867, 101.4, 412.867);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(186.733, 199.533);
  ctx.lineTo(186.733, 199.533);
  ctx.bezierCurveTo(
    181.613,
    199.533,
    178.20000000000002,
    195.266,
    178.20000000000002,
    191
  );
  ctx.bezierCurveTo(
    179.05300000000003,
    131.267,
    248.173,
    99.693,
    251.58700000000002,
    97.987
  );
  ctx.bezierCurveTo(
    254.14700000000002,
    97.134,
    256.707,
    97.134,
    259.267,
    97.987
  );
  ctx.bezierCurveTo(
    261.827,
    98.83999999999999,
    263.534,
    101.39999999999999,
    263.534,
    103.96
  );
  ctx.bezierCurveTo(
    264.387,
    106.52,
    278.041,
    165.39999999999998,
    340.334,
    165.39999999999998
  );
  ctx.bezierCurveTo(
    340.334,
    165.39999999999998,
    340.334,
    165.39999999999998,
    341.187,
    165.39999999999998
  );
  ctx.bezierCurveTo(
    345.454,
    165.39999999999998,
    349.72,
    168.813,
    349.72,
    173.93299999999996
  );
  ctx.bezierCurveTo(
    349.72,
    179.05299999999997,
    346.307,
    182.46599999999995,
    341.187,
    182.46599999999995
  );
  ctx.bezierCurveTo(
    341.187,
    182.46599999999995,
    341.187,
    182.46599999999995,
    340.334,
    182.46599999999995
  );
  ctx.bezierCurveTo(
    282.307,
    182.46599999999995,
    258.414,
    138.94599999999994,
    250.734,
    117.61299999999996
  );
  ctx.bezierCurveTo(
    233.667,
    127.85299999999995,
    196.97400000000002,
    152.59999999999997,
    196.121,
    190.99999999999994
  );
  ctx.bezierCurveTo(195.267, 196.12, 191, 199.533, 186.733, 199.533);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(468.333, 114.2);
  ctx.lineTo(41.667, 114.2);
  ctx.bezierCurveTo(
    36.547000000000004,
    114.2,
    33.134,
    110.787,
    33.134,
    105.667
  );
  ctx.lineTo(33.134, 71.533);
  ctx.bezierCurveTo(33.134, 57.026, 44.227000000000004, 45.933, 58.734, 45.933);
  ctx.lineTo(451.267, 45.933);
  ctx.bezierCurveTo(
    465.774,
    45.933,
    476.867,
    57.025999999999996,
    476.867,
    71.533
  );
  ctx.lineTo(476.867, 105.666);
  ctx.bezierCurveTo(476.867, 110.787, 473.453, 114.2, 468.333, 114.2);
  ctx.closePath();
  ctx.moveTo(50.2, 97.133);
  ctx.lineTo(459.8, 97.133);
  ctx.lineTo(459.8, 71.53299999999999);
  ctx.bezierCurveTo(
    459.8,
    66.41299999999998,
    456.387,
    62.999999999999986,
    451.267,
    62.999999999999986
  );
  ctx.lineTo(58.733, 62.999999999999986);
  ctx.bezierCurveTo(
    53.613,
    62.999999999999986,
    50.199999999999996,
    66.41299999999998,
    50.199999999999996,
    71.53299999999999
  );
  ctx.lineTo(50.199999999999996, 97.133);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(101.4, 88.6);
  ctx.bezierCurveTo(96.28, 88.6, 92.867, 85.187, 92.867, 80.067);
  ctx.lineTo(92.867, 54.46699999999999);
  ctx.bezierCurveTo(
    92.867,
    49.346999999999994,
    96.28,
    45.93399999999999,
    101.4,
    45.93399999999999
  );
  ctx.bezierCurveTo(
    106.52000000000001,
    45.93399999999999,
    109.933,
    49.34699999999999,
    109.933,
    54.46699999999999
  );
  ctx.lineTo(109.933, 80.067);
  ctx.bezierCurveTo(109.933, 85.187, 106.52, 88.6, 101.4, 88.6);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(152.6, 88.6);
  ctx.bezierCurveTo(147.48, 88.6, 144.067, 85.187, 144.067, 80.067);
  ctx.lineTo(144.067, 54.46699999999999);
  ctx.bezierCurveTo(
    144.067,
    49.346999999999994,
    147.48000000000002,
    45.93399999999999,
    152.6,
    45.93399999999999
  );
  ctx.bezierCurveTo(
    157.72,
    45.93399999999999,
    161.13299999999998,
    49.34699999999999,
    161.13299999999998,
    54.46699999999999
  );
  ctx.lineTo(161.13299999999998, 80.067);
  ctx.bezierCurveTo(161.133, 85.187, 157.72, 88.6, 152.6, 88.6);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(203.8, 88.6);
  ctx.bezierCurveTo(
    198.68,
    88.6,
    195.26700000000002,
    85.187,
    195.26700000000002,
    80.067
  );
  ctx.lineTo(195.26700000000002, 54.46699999999999);
  ctx.bezierCurveTo(
    195.26700000000002,
    49.346999999999994,
    198.68000000000004,
    45.93399999999999,
    203.8,
    45.93399999999999
  );
  ctx.bezierCurveTo(
    208.92000000000002,
    45.93399999999999,
    212.333,
    49.34699999999999,
    212.333,
    54.46699999999999
  );
  ctx.lineTo(212.333, 80.067);
  ctx.bezierCurveTo(212.333, 85.187, 208.92, 88.6, 203.8, 88.6);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(255, 88.6);
  ctx.bezierCurveTo(249.88, 88.6, 246.467, 85.187, 246.467, 80.067);
  ctx.lineTo(246.467, 54.46699999999999);
  ctx.bezierCurveTo(
    246.467,
    49.346999999999994,
    249.88000000000002,
    45.93399999999999,
    255,
    45.93399999999999
  );
  ctx.bezierCurveTo(
    260.12,
    45.93399999999999,
    263.533,
    49.34699999999999,
    263.533,
    54.46699999999999
  );
  ctx.lineTo(263.533, 80.067);
  ctx.bezierCurveTo(263.533, 85.187, 260.12, 88.6, 255, 88.6);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(306.2, 88.6);
  ctx.bezierCurveTo(301.08, 88.6, 297.667, 85.187, 297.667, 80.067);
  ctx.lineTo(297.667, 54.46699999999999);
  ctx.bezierCurveTo(
    297.667,
    49.346999999999994,
    301.08,
    45.93399999999999,
    306.2,
    45.93399999999999
  );
  ctx.bezierCurveTo(
    311.32,
    45.93399999999999,
    314.733,
    49.34699999999999,
    314.733,
    54.46699999999999
  );
  ctx.lineTo(314.733, 80.067);
  ctx.bezierCurveTo(314.733, 85.187, 311.32, 88.6, 306.2, 88.6);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(357.4, 88.6);
  ctx.bezierCurveTo(
    352.28,
    88.6,
    348.86699999999996,
    85.187,
    348.86699999999996,
    80.067
  );
  ctx.lineTo(348.86699999999996, 54.46699999999999);
  ctx.bezierCurveTo(
    348.86699999999996,
    49.346999999999994,
    352.28,
    45.93399999999999,
    357.4,
    45.93399999999999
  );
  ctx.bezierCurveTo(
    362.52,
    45.93399999999999,
    365.933,
    49.34699999999999,
    365.933,
    54.46699999999999
  );
  ctx.lineTo(365.933, 80.067);
  ctx.bezierCurveTo(365.933, 85.187, 362.52, 88.6, 357.4, 88.6);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(408.6, 88.6);
  ctx.bezierCurveTo(403.48, 88.6, 400.067, 85.187, 400.067, 80.067);
  ctx.lineTo(400.067, 54.46699999999999);
  ctx.bezierCurveTo(
    400.067,
    49.346999999999994,
    403.48,
    45.93399999999999,
    408.6,
    45.93399999999999
  );
  ctx.bezierCurveTo(
    413.72,
    45.93399999999999,
    417.13300000000004,
    49.34699999999999,
    417.13300000000004,
    54.46699999999999
  );
  ctx.lineTo(417.13300000000004, 80.067);
  ctx.bezierCurveTo(417.133, 85.187, 413.72, 88.6, 408.6, 88.6);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(499.907, 215.747);
  ctx.lineTo(499.054, 215.747);
  ctx.bezierCurveTo(447, 209.773, 408.6, 166.253, 408.6, 114.2);
  ctx.lineTo(408.6, 105.667);
  ctx.bezierCurveTo(
    408.6,
    100.547,
    412.01300000000003,
    97.134,
    417.13300000000004,
    97.134
  );
  ctx.lineTo(469.18600000000004, 97.134);
  ctx.bezierCurveTo(
    471.74600000000004,
    97.134,
    473.45300000000003,
    97.987,
    475.15900000000005,
    99.694
  );
  ctx.bezierCurveTo(
    492.22600000000006,
    115.90700000000001,
    503.3190000000001,
    151.747,
    508.4390000000001,
    206.361
  );
  ctx.bezierCurveTo(
    508.4390000000001,
    208.921,
    507.58600000000007,
    211.481,
    505.8790000000001,
    213.188
  );
  ctx.bezierCurveTo(504.173, 214.893, 501.613, 215.747, 499.907, 215.747);
  ctx.closePath();
  ctx.moveTo(425.667, 114.2);
  ctx.bezierCurveTo(425.667, 153.453, 452.974, 187.587, 490.52, 196.973);
  ctx.bezierCurveTo(
    485.4,
    146.626,
    474.30699999999996,
    124.44000000000001,
    465.77299999999997,
    114.20000000000002
  );
  ctx.bezierCurveTo(465.773, 114.2, 425.667, 114.2, 425.667, 114.2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(451.267, 464.067);
  ctx.lineTo(331.8, 464.067);
  ctx.bezierCurveTo(303.64, 464.067, 278.04, 446.147, 267.8, 419.694);
  ctx.lineTo(255.853, 387.267);
  ctx.lineTo(255, 387.267);
  ctx.lineTo(243.053, 418.84);
  ctx.bezierCurveTo(
    232.813,
    446.147,
    207.213,
    464.06699999999995,
    178.2,
    464.06699999999995
  );
  ctx.lineTo(58.733, 464.06699999999995);
  ctx.bezierCurveTo(14.36, 464.067, -1, 366.787, -1, 276.333);
  ctx.bezierCurveTo(
    -1,
    179.906,
    11.8,
    120.17300000000003,
    35.693,
    97.98600000000002
  );
  ctx.bezierCurveTo(
    38.253,
    96.27900000000002,
    41.666,
    95.42600000000002,
    45.08,
    97.13300000000002
  );
  ctx.bezierCurveTo(
    45.08,
    97.13300000000002,
    45.08,
    97.13300000000002,
    45.933,
    97.13300000000002
  );
  ctx.lineTo(464.92, 97.13300000000002);
  ctx.bezierCurveTo(
    464.92,
    97.13300000000002,
    464.92,
    97.13300000000002,
    465.773,
    97.13300000000002
  );
  ctx.bezierCurveTo(
    469.18600000000004,
    95.42600000000003,
    472.6,
    96.28000000000003,
    475.16,
    98.84000000000002
  );
  ctx.bezierCurveTo(498.2, 120.173, 511, 179.907, 511, 276.333);
  ctx.bezierCurveTo(511, 366.787, 495.64, 464.067, 451.267, 464.067);
  ctx.closePath();
  ctx.moveTo(255, 370.2);
  ctx.bezierCurveTo(262.68, 370.2, 268.653, 374.467, 271.213, 381.293);
  ctx.lineTo(283.16, 412.866);
  ctx.bezierCurveTo(
    290.84000000000003,
    432.493,
    309.613,
    446.14599999999996,
    330.947,
    446.14599999999996
  );
  ctx.lineTo(450.414, 446.14599999999996);
  ctx.bezierCurveTo(
    470.894,
    446.14599999999996,
    493.081,
    386.41299999999995,
    493.081,
    275.4789999999999
  );
  ctx.bezierCurveTo(
    493.081,
    191.85199999999992,
    482.841,
    134.67899999999992,
    464.921,
    113.34599999999992
  );
  ctx.lineTo(44.227, 113.34599999999992);
  ctx.bezierCurveTo(
    26.306999999999995,
    135.53299999999993,
    16.066999999999997,
    192.7059999999999,
    16.066999999999997,
    276.3329999999999
  );
  ctx.bezierCurveTo(16.067, 387.267, 38.253, 447, 58.733, 447);
  ctx.lineTo(178.2, 447);
  ctx.bezierCurveTo(199.533, 447, 219.16, 433.347, 225.987, 413.72);
  ctx.lineTo(237.934, 382.14700000000005);
  ctx.bezierCurveTo(241.347, 374.467, 247.32, 370.2, 255, 370.2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(10.093, 215.747);
  ctx.bezierCurveTo(7.5329999999999995, 215.747, 5.826, 214.894, 4.12, 213.187);
  ctx.bezierCurveTo(
    2.4140000000000006,
    211.48000000000002,
    1.56,
    208.92000000000002,
    1.56,
    206.36
  );
  ctx.bezierCurveTo(
    6.68,
    151.747,
    17.773,
    115.90700000000001,
    34.84,
    99.69300000000001
  );
  ctx.bezierCurveTo(
    36.547000000000004,
    97.98600000000002,
    38.253,
    97.13300000000001,
    40.813,
    97.13300000000001
  );
  ctx.lineTo(92.866, 97.13300000000001);
  ctx.bezierCurveTo(
    97.986,
    97.13300000000001,
    101.399,
    100.546,
    101.399,
    105.66600000000001
  );
  ctx.lineTo(101.399, 114.19900000000001);
  ctx.bezierCurveTo(
    101.399,
    166.252,
    62.999,
    209.772,
    10.945999999999998,
    215.746
  );
  ctx.bezierCurveTo(10.947, 215.747, 10.947, 215.747, 10.093, 215.747);
  ctx.closePath();
  ctx.moveTo(44.227, 114.2);
  ctx.bezierCurveTo(
    35.693999999999996,
    124.44,
    25.453999999999997,
    146.627,
    19.479999999999997,
    196.973
  );
  ctx.bezierCurveTo(
    57.026999999999994,
    187.586,
    84.333,
    153.453,
    84.333,
    114.20000000000002
  );
  ctx.bezierCurveTo(84.333, 114.2, 44.227, 114.2, 44.227, 114.2);
  ctx.closePath();
  ctx.fill();
};

const shorts2 = (ctx: CanvasRenderingContext2D) => {
  ctx.miterLimit = 4;
  ctx.scale(0.1, 0.1);
  ctx.scale(1.5625, 1.5625);
  ctx.translate(1, 1);
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(468.333, 105.667);
  ctx.lineTo(41.667, 105.667);
  ctx.lineTo(41.667, 71.533);
  ctx.bezierCurveTo(41.667, 62.146, 49.347, 54.466, 58.734, 54.466);
  ctx.lineTo(451.267, 54.466);
  ctx.bezierCurveTo(460.654, 54.466, 468.334, 62.146, 468.334, 71.533);
  ctx.lineTo(468.333, 105.667);
  ctx.lineTo(468.333, 105.667);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(41.667, 105.667);
  ctx.lineTo(41.667, 104.81400000000001);
  ctx.bezierCurveTo(16.92, 127, 7.533, 195.267, 7.533, 276.333);
  ctx.bezierCurveTo(
    7.533,
    375.32000000000005,
    25.453000000000003,
    455.533,
    58.733000000000004,
    455.533
  );
  ctx.lineTo(178.2, 455.533);
  ctx.bezierCurveTo(
    202.947,
    455.533,
    225.13299999999998,
    440.173,
    234.51999999999998,
    416.28000000000003
  );
  ctx.lineTo(246.46699999999998, 384.70700000000005);
  ctx.bezierCurveTo(
    249.027,
    377.02700000000004,
    260.974,
    377.02700000000004,
    263.534,
    384.70700000000005
  );
  ctx.lineTo(275.481, 416.28000000000003);
  ctx.bezierCurveTo(
    284.014,
    439.32000000000005,
    306.201,
    455.533,
    331.801,
    455.533
  );
  ctx.lineTo(451.268, 455.533);
  ctx.bezierCurveTo(
    484.548,
    455.533,
    502.46799999999996,
    375.32000000000005,
    502.46799999999996,
    276.333
  );
  ctx.bezierCurveTo(
    502.46799999999996,
    195.26600000000002,
    493.08099999999996,
    127.00000000000003,
    468.335,
    104.81300000000002
  );
  ctx.lineTo(468.335, 105.66600000000001);
  ctx.lineTo(41.667, 105.667);
  ctx.lineTo(41.667, 105.667);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.GREEN;
  ctx.beginPath();
  ctx.moveTo(58.733, 455.533);
  ctx.lineTo(127, 455.533);
  ctx.lineTo(127, 319);
  ctx.bezierCurveTo(127, 300.227, 111.64, 284.867, 92.86699999999999, 284.867);
  ctx.lineTo(7.533, 284.867);
  ctx.bezierCurveTo(8.387, 379.587, 26.307, 455.533, 58.733, 455.533);
  ctx.fill();
  ctx.fillStyle = Colours.GREEN;
  ctx.beginPath();
  ctx.moveTo(7.533, 284.867);
  ctx.lineTo(92.866, 284.867);
  ctx.bezierCurveTo(111.64, 284.867, 127, 300.227, 127, 319);
  ctx.lineTo(127, 336.067);
  ctx.lineTo(10.093, 336.067);
  ctx.bezierCurveTo(8.387, 319.853, 7.533, 302.787, 7.533, 284.867);
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(499.907, 207.213);
  ctx.bezierCurveTo(
    495.64,
    158.57299999999998,
    486.25399999999996,
    121.88,
    469.187,
    105.666
  );
  ctx.lineTo(468.334, 105.666);
  ctx.lineTo(417.134, 105.666);
  ctx.lineTo(417.134, 114.199);
  ctx.bezierCurveTo(417.133, 161.987, 452.973, 202.093, 499.907, 207.213);
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(40.813, 105.667);
  ctx.bezierCurveTo(24.6, 121.88, 14.36, 159.427, 10.093, 207.213);
  ctx.bezierCurveTo(
    57.025999999999996,
    202.093,
    92.866,
    161.986,
    92.866,
    114.19999999999999
  );
  ctx.lineTo(92.866, 105.66699999999999);
  ctx.lineTo(41.666, 105.66699999999999);
  ctx.lineTo(40.813, 105.66699999999999);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(255, 276.333);
  ctx.lineTo(255, 276.333);
  ctx.lineTo(255, 105.667);
  ctx.lineTo(289.133, 105.667);
  ctx.lineTo(289.133, 242.2);
  ctx.bezierCurveTo(289.133, 260.973, 273.773, 276.333, 255, 276.333);
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(451.267, 54.467);
  ctx.lineTo(425.667, 54.467);
  ctx.bezierCurveTo(
    435.054,
    54.467,
    442.734,
    62.147,
    442.734,
    71.53399999999999
  );
  ctx.lineTo(442.734, 105.667);
  ctx.lineTo(468.334, 105.667);
  ctx.lineTo(468.334, 71.533);
  ctx.bezierCurveTo(468.333, 62.147, 460.653, 54.467, 451.267, 54.467);
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(468.333, 104.813);
  ctx.lineTo(468.333, 105.666);
  ctx.lineTo(443.586, 105.666);
  ctx.bezierCurveTo(
    467.47900000000004,
    128.706,
    476.866,
    196.119,
    476.866,
    276.33299999999997
  );
  ctx.bezierCurveTo(
    476.866,
    375.31999999999994,
    458.94599999999997,
    455.53299999999996,
    425.666,
    455.53299999999996
  );
  ctx.lineTo(451.266, 455.53299999999996);
  ctx.bezierCurveTo(
    484.54600000000005,
    455.53299999999996,
    502.466,
    375.31999999999994,
    502.466,
    276.33299999999997
  );
  ctx.bezierCurveTo(502.467, 195.267, 493.08, 127, 468.333, 104.813);
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(58.733, 54.467);
  ctx.lineTo(84.333, 54.467);
  ctx.bezierCurveTo(
    74.946,
    54.467,
    67.26599999999999,
    62.147,
    67.26599999999999,
    71.53399999999999
  );
  ctx.lineTo(67.26599999999999, 105.667);
  ctx.lineTo(41.66599999999999, 105.667);
  ctx.lineTo(41.66599999999999, 71.533);
  ctx.bezierCurveTo(41.667, 62.147, 49.347, 54.467, 58.733, 54.467);
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(41.667, 104.813);
  ctx.lineTo(41.667, 105.666);
  ctx.lineTo(66.414, 105.666);
  ctx.bezierCurveTo(
    42.521,
    128.706,
    33.134,
    196.119,
    33.134,
    276.33299999999997
  );
  ctx.bezierCurveTo(
    33.134,
    375.31999999999994,
    51.054,
    455.53299999999996,
    84.334,
    455.53299999999996
  );
  ctx.lineTo(58.734, 455.53299999999996);
  ctx.bezierCurveTo(
    25.454,
    455.53299999999996,
    7.533999999999999,
    375.31999999999994,
    7.533999999999999,
    276.33299999999997
  );
  ctx.bezierCurveTo(7.533, 195.267, 16.92, 127, 41.667, 104.813);
  ctx.fill();
  ctx.fillStyle = Colours.BLACK;
  ctx.beginPath();
  ctx.moveTo(468.333, 114.2);
  ctx.lineTo(41.667, 114.2);
  ctx.bezierCurveTo(
    36.547000000000004,
    114.2,
    33.134,
    110.787,
    33.134,
    105.667
  );
  ctx.lineTo(33.134, 71.533);
  ctx.bezierCurveTo(33.134, 57.026, 44.227000000000004, 45.933, 58.734, 45.933);
  ctx.lineTo(451.267, 45.933);
  ctx.bezierCurveTo(
    465.774,
    45.933,
    476.867,
    57.025999999999996,
    476.867,
    71.533
  );
  ctx.lineTo(476.867, 105.666);
  ctx.bezierCurveTo(476.867, 110.787, 473.453, 114.2, 468.333, 114.2);
  ctx.closePath();
  ctx.moveTo(50.2, 97.133);
  ctx.lineTo(459.8, 97.133);
  ctx.lineTo(459.8, 71.53299999999999);
  ctx.bezierCurveTo(
    459.8,
    66.41299999999998,
    456.387,
    62.999999999999986,
    451.267,
    62.999999999999986
  );
  ctx.lineTo(58.733, 62.999999999999986);
  ctx.bezierCurveTo(
    53.613,
    62.999999999999986,
    50.199999999999996,
    66.41299999999998,
    50.199999999999996,
    71.53299999999999
  );
  ctx.lineTo(50.199999999999996, 97.133);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(101.4, 88.6);
  ctx.bezierCurveTo(96.28, 88.6, 92.867, 85.187, 92.867, 80.067);
  ctx.lineTo(92.867, 54.46699999999999);
  ctx.bezierCurveTo(
    92.867,
    49.346999999999994,
    96.28,
    45.93399999999999,
    101.4,
    45.93399999999999
  );
  ctx.bezierCurveTo(
    106.52000000000001,
    45.93399999999999,
    109.933,
    49.34699999999999,
    109.933,
    54.46699999999999
  );
  ctx.lineTo(109.933, 80.067);
  ctx.bezierCurveTo(109.933, 85.187, 106.52, 88.6, 101.4, 88.6);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(152.6, 88.6);
  ctx.bezierCurveTo(147.48, 88.6, 144.067, 85.187, 144.067, 80.067);
  ctx.lineTo(144.067, 54.46699999999999);
  ctx.bezierCurveTo(
    144.067,
    49.346999999999994,
    147.48000000000002,
    45.93399999999999,
    152.6,
    45.93399999999999
  );
  ctx.bezierCurveTo(
    157.72,
    45.93399999999999,
    161.13299999999998,
    49.34699999999999,
    161.13299999999998,
    54.46699999999999
  );
  ctx.lineTo(161.13299999999998, 80.067);
  ctx.bezierCurveTo(161.133, 85.187, 157.72, 88.6, 152.6, 88.6);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(203.8, 88.6);
  ctx.bezierCurveTo(
    198.68,
    88.6,
    195.26700000000002,
    85.187,
    195.26700000000002,
    80.067
  );
  ctx.lineTo(195.26700000000002, 54.46699999999999);
  ctx.bezierCurveTo(
    195.26700000000002,
    49.346999999999994,
    198.68000000000004,
    45.93399999999999,
    203.8,
    45.93399999999999
  );
  ctx.bezierCurveTo(
    208.92000000000002,
    45.93399999999999,
    212.333,
    49.34699999999999,
    212.333,
    54.46699999999999
  );
  ctx.lineTo(212.333, 80.067);
  ctx.bezierCurveTo(212.333, 85.187, 208.92, 88.6, 203.8, 88.6);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(255, 88.6);
  ctx.bezierCurveTo(249.88, 88.6, 246.467, 85.187, 246.467, 80.067);
  ctx.lineTo(246.467, 54.46699999999999);
  ctx.bezierCurveTo(
    246.467,
    49.346999999999994,
    249.88000000000002,
    45.93399999999999,
    255,
    45.93399999999999
  );
  ctx.bezierCurveTo(
    260.12,
    45.93399999999999,
    263.533,
    49.34699999999999,
    263.533,
    54.46699999999999
  );
  ctx.lineTo(263.533, 80.067);
  ctx.bezierCurveTo(263.533, 85.187, 260.12, 88.6, 255, 88.6);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(306.2, 88.6);
  ctx.bezierCurveTo(301.08, 88.6, 297.667, 85.187, 297.667, 80.067);
  ctx.lineTo(297.667, 54.46699999999999);
  ctx.bezierCurveTo(
    297.667,
    49.346999999999994,
    301.08,
    45.93399999999999,
    306.2,
    45.93399999999999
  );
  ctx.bezierCurveTo(
    311.32,
    45.93399999999999,
    314.733,
    49.34699999999999,
    314.733,
    54.46699999999999
  );
  ctx.lineTo(314.733, 80.067);
  ctx.bezierCurveTo(314.733, 85.187, 311.32, 88.6, 306.2, 88.6);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(357.4, 88.6);
  ctx.bezierCurveTo(
    352.28,
    88.6,
    348.86699999999996,
    85.187,
    348.86699999999996,
    80.067
  );
  ctx.lineTo(348.86699999999996, 54.46699999999999);
  ctx.bezierCurveTo(
    348.86699999999996,
    49.346999999999994,
    352.28,
    45.93399999999999,
    357.4,
    45.93399999999999
  );
  ctx.bezierCurveTo(
    362.52,
    45.93399999999999,
    365.933,
    49.34699999999999,
    365.933,
    54.46699999999999
  );
  ctx.lineTo(365.933, 80.067);
  ctx.bezierCurveTo(365.933, 85.187, 362.52, 88.6, 357.4, 88.6);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(408.6, 88.6);
  ctx.bezierCurveTo(403.48, 88.6, 400.067, 85.187, 400.067, 80.067);
  ctx.lineTo(400.067, 54.46699999999999);
  ctx.bezierCurveTo(
    400.067,
    49.346999999999994,
    403.48,
    45.93399999999999,
    408.6,
    45.93399999999999
  );
  ctx.bezierCurveTo(
    413.72,
    45.93399999999999,
    417.13300000000004,
    49.34699999999999,
    417.13300000000004,
    54.46699999999999
  );
  ctx.lineTo(417.13300000000004, 80.067);
  ctx.bezierCurveTo(417.133, 85.187, 413.72, 88.6, 408.6, 88.6);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(499.907, 215.747);
  ctx.lineTo(499.054, 215.747);
  ctx.bezierCurveTo(447, 209.773, 408.6, 166.253, 408.6, 114.2);
  ctx.lineTo(408.6, 105.667);
  ctx.bezierCurveTo(
    408.6,
    100.547,
    412.01300000000003,
    97.134,
    417.13300000000004,
    97.134
  );
  ctx.lineTo(469.18600000000004, 97.134);
  ctx.bezierCurveTo(
    471.74600000000004,
    97.134,
    473.45300000000003,
    97.987,
    475.15900000000005,
    99.694
  );
  ctx.bezierCurveTo(
    492.22600000000006,
    115.90700000000001,
    503.3190000000001,
    151.747,
    508.4390000000001,
    206.361
  );
  ctx.bezierCurveTo(
    508.4390000000001,
    208.921,
    507.58600000000007,
    211.481,
    505.8790000000001,
    213.188
  );
  ctx.bezierCurveTo(504.173, 214.893, 501.613, 215.747, 499.907, 215.747);
  ctx.closePath();
  ctx.moveTo(425.667, 114.2);
  ctx.bezierCurveTo(425.667, 153.453, 452.974, 187.587, 490.52, 196.973);
  ctx.bezierCurveTo(
    485.4,
    146.626,
    474.30699999999996,
    124.44000000000001,
    465.77299999999997,
    114.20000000000002
  );
  ctx.bezierCurveTo(465.773, 114.2, 425.667, 114.2, 425.667, 114.2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(451.267, 464.067);
  ctx.lineTo(331.8, 464.067);
  ctx.bezierCurveTo(303.64, 464.067, 278.04, 446.147, 267.8, 419.694);
  ctx.lineTo(255.853, 388.12100000000004);
  ctx.lineTo(255, 388.12100000000004);
  ctx.lineTo(255, 388.12100000000004);
  ctx.lineTo(243.053, 419.694);
  ctx.bezierCurveTo(232.813, 446.147, 207.213, 464.067, 178.2, 464.067);
  ctx.lineTo(58.733, 464.067);
  ctx.bezierCurveTo(14.36, 464.067, -1, 366.787, -1, 276.333);
  ctx.bezierCurveTo(
    -1,
    179.906,
    11.8,
    120.17300000000003,
    35.693,
    97.98600000000002
  );
  ctx.bezierCurveTo(
    38.253,
    96.27900000000002,
    41.666,
    95.42600000000002,
    45.08,
    97.13300000000002
  );
  ctx.bezierCurveTo(
    45.08,
    97.13300000000002,
    45.08,
    97.13300000000002,
    45.933,
    97.13300000000002
  );
  ctx.lineTo(464.92, 97.13300000000002);
  ctx.bezierCurveTo(
    464.92,
    97.13300000000002,
    464.92,
    97.13300000000002,
    465.773,
    97.13300000000002
  );
  ctx.bezierCurveTo(
    469.18600000000004,
    95.42600000000003,
    472.6,
    96.28000000000003,
    475.16,
    98.84000000000002
  );
  ctx.bezierCurveTo(498.2, 120.173, 511, 179.907, 511, 276.333);
  ctx.bezierCurveTo(511, 366.787, 495.64, 464.067, 451.267, 464.067);
  ctx.closePath();
  ctx.moveTo(255, 370.2);
  ctx.bezierCurveTo(262.68, 370.2, 268.653, 374.467, 271.213, 382.147);
  ctx.lineTo(283.16, 413.71999999999997);
  ctx.bezierCurveTo(290.84000000000003, 433.347, 309.613, 447, 330.947, 447);
  ctx.lineTo(450.414, 447);
  ctx.bezierCurveTo(
    470.894,
    447,
    493.081,
    387.267,
    493.081,
    276.33299999999997
  );
  ctx.bezierCurveTo(
    493.081,
    192.70599999999996,
    482.841,
    135.53299999999996,
    464.921,
    114.19999999999996
  );
  ctx.lineTo(44.227, 114.19999999999996);
  ctx.bezierCurveTo(
    26.306999999999995,
    135.53299999999996,
    16.066999999999997,
    192.70699999999997,
    16.066999999999997,
    276.33299999999997
  );
  ctx.bezierCurveTo(16.067, 387.267, 38.253, 447, 58.733, 447);
  ctx.lineTo(178.2, 447);
  ctx.bezierCurveTo(199.533, 447, 219.16, 433.347, 225.987, 413.72);
  ctx.lineTo(237.934, 382.14700000000005);
  ctx.bezierCurveTo(241.347, 374.467, 247.32, 370.2, 255, 370.2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(10.093, 215.747);
  ctx.bezierCurveTo(7.5329999999999995, 215.747, 5.826, 214.894, 4.12, 213.187);
  ctx.bezierCurveTo(
    2.4140000000000006,
    211.48000000000002,
    1.56,
    208.92000000000002,
    1.56,
    206.36
  );
  ctx.bezierCurveTo(
    6.68,
    151.747,
    17.773,
    115.90700000000001,
    34.84,
    99.69300000000001
  );
  ctx.bezierCurveTo(
    36.547000000000004,
    97.98600000000002,
    38.253,
    97.13300000000001,
    40.813,
    97.13300000000001
  );
  ctx.lineTo(92.866, 97.13300000000001);
  ctx.bezierCurveTo(
    97.986,
    97.13300000000001,
    101.399,
    100.546,
    101.399,
    105.66600000000001
  );
  ctx.lineTo(101.399, 114.19900000000001);
  ctx.bezierCurveTo(
    101.399,
    166.252,
    62.999,
    209.772,
    10.945999999999998,
    215.746
  );
  ctx.bezierCurveTo(10.947, 215.747, 10.947, 215.747, 10.093, 215.747);
  ctx.closePath();
  ctx.moveTo(44.227, 114.2);
  ctx.bezierCurveTo(
    35.693999999999996,
    124.44,
    25.453999999999997,
    146.627,
    19.479999999999997,
    196.973
  );
  ctx.bezierCurveTo(
    57.026999999999994,
    187.586,
    84.333,
    153.453,
    84.333,
    114.20000000000002
  );
  ctx.bezierCurveTo(84.333, 114.2, 44.227, 114.2, 44.227, 114.2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(255, 284.867);
  ctx.bezierCurveTo(249.88, 284.867, 246.467, 281.454, 246.467, 276.334);
  ctx.lineTo(246.467, 105.667);
  ctx.bezierCurveTo(246.467, 100.547, 249.88000000000002, 97.134, 255, 97.134);
  ctx.lineTo(289.133, 97.134);
  ctx.bezierCurveTo(294.253, 97.134, 297.666, 100.547, 297.666, 105.667);
  ctx.lineTo(297.666, 242.2);
  ctx.bezierCurveTo(297.667, 266.093, 278.893, 284.867, 255, 284.867);
  ctx.closePath();
  ctx.moveTo(263.533, 114.2);
  ctx.lineTo(263.533, 266.093);
  ctx.bezierCurveTo(273.773, 262.68, 280.6, 253.293, 280.6, 242.20000000000002);
  ctx.lineTo(280.6, 114.20000000000002);
  ctx.lineTo(263.533, 114.2);
  ctx.lineTo(263.533, 114.2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(127, 464.067);
  ctx.lineTo(58.733, 464.067);
  ctx.bezierCurveTo(
    4.972999999999999,
    464.067,
    -0.14700000000000557,
    326.68,
    -1,
    284.867
  );
  ctx.bezierCurveTo(-1, 282.307, -0.14700000000000002, 280.6, 1.56, 278.894);
  ctx.bezierCurveTo(
    3.2670000000000003,
    277.188,
    4.973,
    276.334,
    7.5329999999999995,
    276.334
  );
  ctx.lineTo(92.866, 276.334);
  ctx.bezierCurveTo(
    116.759,
    276.334,
    135.53300000000002,
    295.107,
    135.53300000000002,
    319.001
  );
  ctx.lineTo(135.53300000000002, 455.534);
  ctx.bezierCurveTo(135.533, 460.653, 132.12, 464.067, 127, 464.067);
  ctx.closePath();
  ctx.moveTo(16.067, 293.4);
  ctx.bezierCurveTo(18.627, 393.24, 39.107, 447, 58.734, 447);
  ctx.lineTo(118.467, 447);
  ctx.lineTo(118.467, 319);
  ctx.bezierCurveTo(118.467, 304.493, 107.374, 293.4, 92.86699999999999, 293.4);
  ctx.lineTo(16.067, 293.4);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(127, 344.6);
  ctx.lineTo(10.093, 344.6);
  ctx.bezierCurveTo(
    5.826,
    344.6,
    1.5600000000000005,
    341.187,
    1.5600000000000005,
    336.92
  );
  ctx.bezierCurveTo(-0.147, 320.707, -1, 302.787, -1, 284.867);
  ctx.bezierCurveTo(-1, 282.307, -0.14700000000000002, 280.6, 1.56, 278.894);
  ctx.bezierCurveTo(
    3.2670000000000003,
    277.188,
    4.973,
    276.334,
    7.5329999999999995,
    276.334
  );
  ctx.lineTo(92.866, 276.334);
  ctx.bezierCurveTo(
    116.759,
    276.334,
    135.53300000000002,
    295.107,
    135.53300000000002,
    319.001
  );
  ctx.lineTo(135.53300000000002, 336.068);
  ctx.bezierCurveTo(135.533, 341.187, 131.267, 344.6, 127, 344.6);
  ctx.closePath();
  ctx.moveTo(17.773, 327.533);
  ctx.lineTo(118.466, 327.533);
  ctx.lineTo(118.466, 319);
  ctx.bezierCurveTo(
    118.466,
    304.493,
    107.37299999999999,
    293.4,
    92.86599999999999,
    293.4
  );
  ctx.lineTo(16.06599999999999, 293.4);
  ctx.bezierCurveTo(16.067, 305.347, 16.92, 316.44, 17.773, 327.533);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(255, 388.12);
  ctx.bezierCurveTo(249.88, 388.12, 246.467, 384.707, 246.467, 379.587);
  ctx.lineTo(246.467, 276.333);
  ctx.bezierCurveTo(246.467, 271.213, 249.88000000000002, 267.8, 255, 267.8);
  ctx.bezierCurveTo(260.12, 267.8, 263.533, 271.213, 263.533, 276.333);
  ctx.lineTo(263.533, 379.586);
  ctx.bezierCurveTo(263.533, 383.853, 260.12, 388.12, 255, 388.12);
  ctx.closePath();
  ctx.fill();
};
