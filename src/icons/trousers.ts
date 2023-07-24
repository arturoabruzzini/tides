import { CanvasRenderingContext2D } from "canvas";
import { Colours } from "../draw/canvasUtils";

export const trousers = (ctx: CanvasRenderingContext2D) =>
  [trousers1, trousers2, trousers3][Math.floor(Math.random() * 3)](ctx);

const scale = 2.9;
const trousers1 = (ctx: CanvasRenderingContext2D) => {
  ctx.miterLimit = 4;
  ctx.scale(0.1, 0.1);
  ctx.scale(scale, scale);
  ctx.translate(1, 1);
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(332.118, 502.467);
  ctx.lineTo(297.985, 502.467);
  ctx.bezierCurveTo(
    292.865,
    502.467,
    289.452,
    499.054,
    289.452,
    493.93399999999997
  );
  ctx.lineTo(289.452, 468.33399999999995);
  ctx.lineTo(340.652, 468.33399999999995);
  ctx.lineTo(340.652, 493.93399999999997);
  ctx.bezierCurveTo(340.651, 499.053, 337.238, 502.467, 332.118, 502.467);
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(365.398, 41.667);
  ctx.lineTo(255.31800000000004, 41.667);
  ctx.lineTo(145.23800000000006, 41.667);
  ctx.bezierCurveTo(
    140.11800000000005,
    41.667,
    136.70500000000007,
    45.934000000000005,
    136.70500000000007,
    51.054
  );
  ctx.lineTo(161.45200000000006, 460.654);
  ctx.bezierCurveTo(
    161.45200000000006,
    464.921,
    165.71900000000005,
    468.334,
    169.98500000000004,
    468.334
  );
  ctx.lineTo(221.18500000000006, 468.334);
  ctx.bezierCurveTo(
    225.45200000000006,
    468.334,
    229.71800000000005,
    464.921,
    229.71800000000005,
    459.801
  );
  ctx.lineTo(237.39800000000005, 195.26799999999997);
  ctx.bezierCurveTo(
    237.39800000000005,
    185.88099999999997,
    245.07800000000006,
    178.20099999999996,
    255.31800000000004,
    178.20099999999996
  );
  ctx.bezierCurveTo(
    265.55800000000005,
    178.20099999999996,
    272.38500000000005,
    185.88099999999997,
    273.23800000000006,
    195.26799999999997
  );
  ctx.lineTo(280.91800000000006, 459.801);
  ctx.bezierCurveTo(
    280.91800000000006,
    464.068,
    285.18500000000006,
    468.334,
    289.4510000000001,
    468.334
  );
  ctx.lineTo(341.5040000000001, 468.334);
  ctx.bezierCurveTo(
    345.7710000000001,
    468.334,
    350.0370000000001,
    464.921,
    350.0370000000001,
    460.654
  );
  ctx.lineTo(374.7840000000001, 51.053999999999974);
  ctx.bezierCurveTo(374.784, 45.933, 370.518, 41.667, 365.398, 41.667);
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(366.251, 41.667);
  ctx.lineTo(144.384, 41.667);
  ctx.lineTo(144.384, 16.067);
  ctx.bezierCurveTo(
    144.384,
    10.947,
    147.797,
    7.534000000000001,
    152.91699999999997,
    7.534000000000001
  );
  ctx.lineTo(357.717, 7.534000000000001);
  ctx.bezierCurveTo(
    362.837,
    7.534000000000001,
    366.25,
    10.947000000000001,
    366.25,
    16.067
  );
  ctx.lineTo(366.251, 41.667);
  ctx.lineTo(366.251, 41.667);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(358.571, 7.533);
  ctx.lineTo(341.504, 7.533);
  ctx.bezierCurveTo(
    346.624,
    7.533,
    350.03700000000003,
    10.946,
    350.03700000000003,
    16.066
  );
  ctx.lineTo(350.03700000000003, 41.666);
  ctx.lineTo(367.10400000000004, 41.666);
  ctx.lineTo(367.10400000000004, 16.065999999999995);
  ctx.bezierCurveTo(367.104, 10.947, 362.838, 7.533, 358.571, 7.533);
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(368.811, 136.387);
  ctx.lineTo(373.931, 51.054);
  ctx.bezierCurveTo(
    373.931,
    45.934000000000005,
    370.518,
    41.667,
    365.39799999999997,
    41.667
  );
  ctx.lineTo(332.11799999999994, 41.667);
  ctx.lineTo(332.11799999999994, 75.8);
  ctx.bezierCurveTo(332.118, 102.253, 347.478, 125.293, 368.811, 136.387);
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(366.251, 41.667);
  ctx.lineTo(348.33099999999996, 41.667);
  ctx.bezierCurveTo(
    353.45099999999996,
    41.667,
    356.864,
    45.934000000000005,
    356.864,
    51.054
  );
  ctx.lineTo(332.11699999999996, 460.654);
  ctx.bezierCurveTo(
    332.11699999999996,
    464.921,
    327.84999999999997,
    468.334,
    323.58399999999995,
    468.334
  );
  ctx.lineTo(341.50399999999996, 468.334);
  ctx.bezierCurveTo(
    345.77099999999996,
    468.334,
    350.037,
    464.921,
    350.037,
    460.654
  );
  ctx.lineTo(374.784, 51.053999999999974);
  ctx.bezierCurveTo(374.784, 45.933, 371.371, 41.667, 366.251, 41.667);
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(152.918, 7.533);
  ctx.lineTo(169.985, 7.533);
  ctx.bezierCurveTo(
    164.865,
    7.533,
    161.45200000000003,
    10.946,
    161.45200000000003,
    16.066
  );
  ctx.lineTo(161.45200000000003, 41.666);
  ctx.lineTo(144.38500000000002, 41.666);
  ctx.lineTo(144.38500000000002, 16.065999999999995);
  ctx.bezierCurveTo(144.384, 10.947, 147.798, 7.533, 152.918, 7.533);
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(141.824, 136.387);
  ctx.lineTo(136.704, 51.054);
  ctx.bezierCurveTo(
    135.851,
    45.934000000000005,
    140.11700000000002,
    41.667,
    145.237,
    41.667
  );
  ctx.lineTo(178.517, 41.667);
  ctx.lineTo(178.517, 75.8);
  ctx.bezierCurveTo(178.518, 102.253, 163.158, 125.293, 141.824, 136.387);
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(212.651, 502.467);
  ctx.lineTo(178.518, 502.467);
  ctx.bezierCurveTo(
    173.398,
    502.467,
    169.985,
    499.054,
    169.985,
    493.93399999999997
  );
  ctx.lineTo(169.985, 468.33399999999995);
  ctx.lineTo(221.185, 468.33399999999995);
  ctx.lineTo(221.185, 493.93399999999997);
  ctx.bezierCurveTo(221.184, 499.053, 217.771, 502.467, 212.651, 502.467);
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(187.051, 493.933);
  ctx.lineTo(187.051, 468.33299999999997);
  ctx.lineTo(169.98399999999998, 468.33299999999997);
  ctx.lineTo(169.98399999999998, 493.933);
  ctx.bezierCurveTo(
    169.98399999999998,
    499.053,
    173.397,
    502.466,
    178.51699999999997,
    502.466
  );
  ctx.lineTo(195.58399999999997, 502.466);
  ctx.bezierCurveTo(190.464, 502.467, 187.051, 499.053, 187.051, 493.933);
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(323.584, 493.933);
  ctx.lineTo(323.584, 468.33299999999997);
  ctx.lineTo(340.651, 468.33299999999997);
  ctx.lineTo(340.651, 493.933);
  ctx.bezierCurveTo(340.651, 499.053, 337.238, 502.466, 332.118, 502.466);
  ctx.lineTo(315.051, 502.466);
  ctx.bezierCurveTo(320.171, 502.467, 323.584, 499.053, 323.584, 493.933);
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(145.238, 41.667);
  ctx.lineTo(163.15800000000002, 41.667);
  ctx.bezierCurveTo(
    158.038,
    41.667,
    154.62500000000003,
    45.934000000000005,
    154.62500000000003,
    51.054
  );
  ctx.lineTo(179.372, 460.654);
  ctx.bezierCurveTo(
    178.519,
    464.921,
    182.78500000000003,
    468.334,
    187.05200000000002,
    468.334
  );
  ctx.lineTo(169.132, 468.334);
  ctx.bezierCurveTo(
    164.865,
    468.334,
    160.59900000000002,
    464.921,
    160.59900000000002,
    460.654
  );
  ctx.lineTo(135.85200000000003, 51.053999999999974);
  ctx.bezierCurveTo(135.851, 45.933, 140.118, 41.667, 145.238, 41.667);
  ctx.fill();
  ctx.fillStyle = Colours.BLACK;
  ctx.beginPath();
  ctx.moveTo(366.251, 50.2);
  ctx.lineTo(144.384, 50.2);
  ctx.bezierCurveTo(
    139.26399999999998,
    50.2,
    135.851,
    46.787000000000006,
    135.851,
    41.667
  );
  ctx.lineTo(135.851, 16.067);
  ctx.bezierCurveTo(135.851, 6.68, 143.531, -1, 152.918, -1);
  ctx.lineTo(357.718, -1);
  ctx.bezierCurveTo(367.105, -1, 374.785, 6.68, 374.785, 16.067);
  ctx.lineTo(374.785, 41.667);
  ctx.bezierCurveTo(374.784, 46.787, 371.371, 50.2, 366.251, 50.2);
  ctx.closePath();
  ctx.moveTo(152.918, 33.133);
  ctx.lineTo(357.718, 33.133);
  ctx.lineTo(357.718, 16.067);
  ctx.lineTo(152.918, 16.067);
  ctx.lineTo(152.918, 33.133);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(341.504, 476.867);
  ctx.lineTo(289.451, 476.867);
  ctx.bezierCurveTo(280.064, 476.867, 272.384, 469.187, 272.384, 460.654);
  ctx.lineTo(264.704, 196.12099999999998);
  ctx.bezierCurveTo(
    264.704,
    191.00099999999998,
    260.437,
    187.588,
    255.317,
    187.588
  );
  ctx.bezierCurveTo(
    250.197,
    187.588,
    246.78400000000002,
    191.855,
    245.93,
    196.12099999999998
  );
  ctx.lineTo(238.25, 460.654);
  ctx.bezierCurveTo(238.25, 470.041, 230.57, 476.867, 221.183, 476.867);
  ctx.lineTo(169.13, 476.867);
  ctx.bezierCurveTo(159.743, 476.867, 152.917, 470.04, 152.063, 460.654);
  ctx.lineTo(127.31599999999999, 51.053999999999974);
  ctx.bezierCurveTo(
    127.31599999999999,
    46.78699999999997,
    129.023,
    41.66699999999997,
    132.43599999999998,
    38.25399999999998
  );
  ctx.bezierCurveTo(
    135.849,
    34.84099999999998,
    140.11599999999999,
    33.13399999999998,
    145.236,
    33.13399999999998
  );
  ctx.lineTo(366.249, 33.13399999999998);
  ctx.bezierCurveTo(
    370.516,
    33.13399999999998,
    375.636,
    34.84099999999998,
    379.04900000000004,
    38.25399999999998
  );
  ctx.bezierCurveTo(
    381.60900000000004,
    41.66699999999997,
    383.31600000000003,
    46.78699999999998,
    382.46200000000005,
    51.053999999999974
  );
  ctx.lineTo(357.71500000000003, 460.654);
  ctx.bezierCurveTo(357.718, 470.04, 350.038, 476.867, 341.504, 476.867);
  ctx.closePath();
  ctx.moveTo(341.504, 459.8);
  ctx.lineTo(341.504, 468.333);
  ctx.lineTo(341.504, 459.8);
  ctx.lineTo(341.504, 459.8);
  ctx.closePath();
  ctx.moveTo(145.238, 50.2);
  ctx.lineTo(169.985, 459.8);
  ctx.lineTo(221.185, 459.8);
  ctx.lineTo(228.865, 195.267);
  ctx.bezierCurveTo(228.865, 180.76, 240.812, 169.667, 255.318, 169.667);
  ctx.bezierCurveTo(269.824, 169.667, 280.918, 180.76, 281.771, 195.267);
  ctx.lineTo(289.451, 459.8);
  ctx.lineTo(341.504, 459.8);
  ctx.lineTo(366.25100000000003, 50.19999999999999);
  ctx.lineTo(145.238, 50.2);
  ctx.lineTo(145.238, 50.2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(212.651, 511);
  ctx.lineTo(178.518, 511);
  ctx.bezierCurveTo(169.131, 511, 161.451, 503.32, 161.451, 493.933);
  ctx.lineTo(161.451, 468.33299999999997);
  ctx.bezierCurveTo(
    161.451,
    463.21299999999997,
    164.864,
    459.79999999999995,
    169.98399999999998,
    459.79999999999995
  );
  ctx.lineTo(221.18399999999997, 459.79999999999995);
  ctx.bezierCurveTo(
    226.30399999999997,
    459.79999999999995,
    229.71699999999996,
    463.21299999999997,
    229.71699999999996,
    468.33299999999997
  );
  ctx.lineTo(229.71699999999996, 493.933);
  ctx.bezierCurveTo(229.718, 503.32, 222.038, 511, 212.651, 511);
  ctx.closePath();
  ctx.moveTo(212.651, 493.933);
  ctx.lineTo(212.651, 502.466);
  ctx.lineTo(212.651, 493.933);
  ctx.lineTo(212.651, 493.933);
  ctx.closePath();
  ctx.moveTo(178.518, 476.867);
  ctx.lineTo(178.518, 493.934);
  ctx.lineTo(212.651, 493.934);
  ctx.lineTo(212.651, 476.867);
  ctx.lineTo(178.518, 476.867);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(332.118, 511);
  ctx.lineTo(297.985, 511);
  ctx.bezierCurveTo(288.598, 511, 280.918, 503.32, 280.918, 493.933);
  ctx.lineTo(280.918, 468.33299999999997);
  ctx.bezierCurveTo(
    280.918,
    463.21299999999997,
    284.331,
    459.79999999999995,
    289.451,
    459.79999999999995
  );
  ctx.lineTo(340.651, 459.79999999999995);
  ctx.bezierCurveTo(
    345.771,
    459.79999999999995,
    349.184,
    463.21299999999997,
    349.184,
    468.33299999999997
  );
  ctx.lineTo(349.184, 493.933);
  ctx.bezierCurveTo(349.184, 503.32, 341.504, 511, 332.118, 511);
  ctx.closePath();
  ctx.moveTo(332.118, 493.933);
  ctx.lineTo(332.118, 502.466);
  ctx.lineTo(332.118, 493.933);
  ctx.lineTo(332.118, 493.933);
  ctx.closePath();
  ctx.moveTo(297.984, 476.867);
  ctx.lineTo(297.984, 493.934);
  ctx.lineTo(332.11699999999996, 493.934);
  ctx.lineTo(332.11699999999996, 476.867);
  ctx.lineTo(297.984, 476.867);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(212.651, 92.867);
  ctx.bezierCurveTo(
    208.38400000000001,
    92.867,
    204.11800000000002,
    89.45400000000001,
    204.11800000000002,
    84.334
  );
  ctx.bezierCurveTo(
    204.11800000000002,
    64.70700000000001,
    239.95800000000003,
    40.814,
    251.05100000000002,
    33.987
  );
  ctx.bezierCurveTo(252.758, 33.134, 255.318, 33.134, 257.024, 33.134);
  ctx.bezierCurveTo(259.584, 33.987, 261.291, 34.841, 262.144, 37.401);
  ctx.bezierCurveTo(
    268.117,
    47.641000000000005,
    285.184,
    68.974,
    296.277,
    67.268
  );
  ctx.bezierCurveTo(301.397, 66.415, 305.664, 69.828, 305.664, 74.095);
  ctx.bezierCurveTo(306.517, 78.362, 303.104, 83.482, 298.837, 83.482);
  ctx.bezierCurveTo(
    279.21,
    86.895,
    261.28999999999996,
    64.709,
    252.757,
    52.762
  );
  ctx.bezierCurveTo(235.69, 64.709, 221.184, 78.362, 221.184, 83.482);
  ctx.bezierCurveTo(221.184, 88.6, 217.771, 92.867, 212.651, 92.867);
  ctx.lineTo(212.651, 92.867);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(368.811, 144.92);
  ctx.bezierCurveTo(
    367.104,
    144.92,
    366.251,
    144.92,
    364.544,
    144.06699999999998
  );
  ctx.bezierCurveTo(
    338.94399999999996,
    130.414,
    322.731,
    104.81399999999998,
    322.731,
    75.79999999999998
  );
  ctx.lineTo(322.731, 41.667);
  ctx.bezierCurveTo(
    322.731,
    36.547000000000004,
    326.144,
    33.134,
    331.264,
    33.134
  );
  ctx.lineTo(364.544, 33.134);
  ctx.bezierCurveTo(368.811, 33.134, 373.931, 34.841, 377.344, 38.254);
  ctx.bezierCurveTo(
    381.611,
    41.666999999999994,
    383.317,
    46.787,
    382.464,
    51.054
  );
  ctx.lineTo(377.344, 136.387);
  ctx.bezierCurveTo(377.344, 138.947, 375.637, 141.507, 373.077, 143.214);
  ctx.bezierCurveTo(372.224, 144.92, 370.518, 144.92, 368.811, 144.92);
  ctx.closePath();
  ctx.moveTo(340.651, 50.2);
  ctx.lineTo(340.651, 75.80000000000001);
  ctx.bezierCurveTo(
    340.651,
    93.72000000000001,
    348.331,
    109.93300000000002,
    361.13100000000003,
    121.02700000000002
  );
  ctx.lineTo(365.398, 50.20000000000002);
  ctx.bezierCurveTo(365.398, 50.2, 340.651, 50.2, 340.651, 50.2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(141.824, 144.92);
  ctx.bezierCurveTo(
    140.11700000000002,
    144.92,
    139.264,
    144.92,
    137.55700000000002,
    144.06699999999998
  );
  ctx.bezierCurveTo(
    134.997,
    142.35999999999999,
    133.29000000000002,
    139.79999999999998,
    133.29000000000002,
    137.23999999999998
  );
  ctx.lineTo(128.17000000000002, 51.90699999999998);
  ctx.bezierCurveTo(
    127.31700000000002,
    46.786999999999985,
    129.02300000000002,
    41.66699999999998,
    132.437,
    38.253999999999984
  );
  ctx.bezierCurveTo(
    135.851,
    34.84099999999999,
    140.11700000000002,
    33.133999999999986,
    145.23700000000002,
    33.133999999999986
  );
  ctx.lineTo(178.51700000000002, 33.133999999999986);
  ctx.bezierCurveTo(
    183.63700000000003,
    33.133999999999986,
    187.05,
    36.54699999999998,
    187.05,
    41.66699999999999
  );
  ctx.lineTo(187.05, 75.8);
  ctx.bezierCurveTo(
    187.05,
    104.813,
    170.83700000000002,
    130.413,
    145.23700000000002,
    144.067
  );
  ctx.bezierCurveTo(144.384, 144.92, 142.678, 144.92, 141.824, 144.92);
  ctx.closePath();
  ctx.moveTo(145.238, 50.2);
  ctx.lineTo(149.505, 121.027);
  ctx.bezierCurveTo(
    162.305,
    109.934,
    169.98499999999999,
    93.72,
    169.98499999999999,
    75.80000000000001
  );
  ctx.lineTo(169.98499999999999, 50.2);
  ctx.lineTo(145.238, 50.2);
  ctx.closePath();
  ctx.fill();
};
const trousers2 = (ctx: CanvasRenderingContext2D) => {
  ctx.miterLimit = 4;
  ctx.scale(0.1, 0.1);
  ctx.scale(scale, scale);
  ctx.translate(1, 1);
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(255, 178.2);
  ctx.lineTo(255, 67.267);
  ctx.lineTo(152.6, 67.267);
  ctx.lineTo(152.6, 485.4);
  ctx.bezierCurveTo(152.6, 494.787, 160.28, 502.467, 169.667, 502.467);
  ctx.lineTo(213.187, 502.467);
  ctx.bezierCurveTo(
    222.574,
    502.467,
    230.25400000000002,
    494.787,
    230.25400000000002,
    486.25399999999996
  );
  ctx.lineTo(237.08100000000002, 195.26699999999994);
  ctx.bezierCurveTo(237.933, 185.88, 245.613, 178.2, 255, 178.2);
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(255, 67.267);
  ctx.lineTo(255, 178.2);
  ctx.bezierCurveTo(264.387, 178.2, 272.067, 185.88, 272.92, 195.267);
  ctx.lineTo(280.6, 486.254);
  ctx.bezierCurveTo(
    280.6,
    495.641,
    288.28000000000003,
    502.46700000000004,
    297.66700000000003,
    502.46700000000004
  );
  ctx.lineTo(340.33400000000006, 502.46700000000004);
  ctx.bezierCurveTo(
    349.72100000000006,
    502.46700000000004,
    357.40100000000007,
    494.78700000000003,
    357.40100000000007,
    485.40000000000003
  );
  ctx.lineTo(357.40100000000007, 67.267);
  ctx.lineTo(255, 67.267);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(152.6, 67.267);
  ctx.lineTo(357.4, 67.267);
  ctx.lineTo(357.4, 7.533);
  ctx.lineTo(152.6, 7.533);
  ctx.lineTo(152.6, 67.267);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(340.333, 67.267);
  ctx.lineTo(357.4, 67.267);
  ctx.lineTo(357.4, 7.533);
  ctx.lineTo(340.333, 7.533);
  ctx.lineTo(340.333, 67.267);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(152.6, 67.267);
  ctx.lineTo(169.667, 67.267);
  ctx.lineTo(169.667, 7.533);
  ctx.lineTo(152.6, 7.533);
  ctx.lineTo(152.6, 67.267);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(357.4, 127);
  ctx.lineTo(357.4, 127);
  ctx.bezierCurveTo(
    333.50699999999995,
    127,
    314.73299999999995,
    108.227,
    314.73299999999995,
    84.333
  );
  ctx.lineTo(314.73299999999995, 67.267);
  ctx.lineTo(357.4, 67.267);
  ctx.lineTo(357.4, 127);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(152.6, 127);
  ctx.lineTo(152.6, 127);
  ctx.bezierCurveTo(176.493, 127, 195.267, 108.227, 195.267, 84.333);
  ctx.lineTo(195.267, 67.267);
  ctx.lineTo(152.6, 67.267);
  ctx.lineTo(152.6, 127);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(340.333, 67.267);
  ctx.lineTo(340.333, 485.4);
  ctx.bezierCurveTo(340.333, 494.787, 332.653, 502.467, 323.266, 502.467);
  ctx.lineTo(340.333, 502.467);
  ctx.bezierCurveTo(
    349.72,
    502.467,
    357.40000000000003,
    494.787,
    357.40000000000003,
    485.4
  );
  ctx.lineTo(357.40000000000003, 67.267);
  ctx.lineTo(340.333, 67.267);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(169.667, 67.267);
  ctx.lineTo(169.667, 485.4);
  ctx.bezierCurveTo(169.667, 494.787, 177.347, 502.467, 186.734, 502.467);
  ctx.lineTo(169.667, 502.467);
  ctx.bezierCurveTo(160.28, 502.467, 152.6, 494.787, 152.6, 485.4);
  ctx.lineTo(152.6, 67.267);
  ctx.lineTo(169.667, 67.267);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.BLACK;
  ctx.beginPath();
  ctx.moveTo(357.4, 75.8);
  ctx.lineTo(152.6, 75.8);
  ctx.bezierCurveTo(147.48, 75.8, 144.067, 72.387, 144.067, 67.267);
  ctx.lineTo(144.067, 7.533);
  ctx.bezierCurveTo(
    144.067,
    2.4130000000000003,
    147.48000000000002,
    -0.9999999999999991,
    152.6,
    -0.9999999999999991
  );
  ctx.lineTo(357.4, -0.9999999999999991);
  ctx.bezierCurveTo(
    362.52,
    -0.9999999999999991,
    365.933,
    2.4130000000000007,
    365.933,
    7.533
  );
  ctx.lineTo(365.933, 67.26599999999999);
  ctx.bezierCurveTo(365.933, 72.387, 362.52, 75.8, 357.4, 75.8);
  ctx.closePath();
  ctx.moveTo(161.133, 58.733);
  ctx.lineTo(348.866, 58.733);
  ctx.lineTo(348.866, 16.067);
  ctx.lineTo(161.133, 16.067);
  ctx.lineTo(161.133, 58.733);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(340.333, 511);
  ctx.lineTo(296.81300000000005, 511);
  ctx.bezierCurveTo(283.16, 511, 271.213, 499.907, 271.213, 486.253);
  ctx.lineTo(264.386, 195.26599999999996);
  ctx.bezierCurveTo(
    264.386,
    190.14599999999996,
    260.119,
    186.73299999999998,
    254.99900000000002,
    186.73299999999998
  );
  ctx.bezierCurveTo(
    249.87900000000002,
    186.73299999999998,
    246.46600000000004,
    183.31999999999996,
    246.46600000000004,
    178.2
  );
  ctx.lineTo(246.46600000000004, 67.267);
  ctx.bezierCurveTo(
    246.46600000000004,
    62.147,
    249.87900000000005,
    58.733999999999995,
    254.99900000000002,
    58.733999999999995
  );
  ctx.lineTo(357.399, 58.733999999999995);
  ctx.bezierCurveTo(
    362.519,
    58.733999999999995,
    365.932,
    62.14699999999999,
    365.932,
    67.267
  );
  ctx.lineTo(365.932, 485.4);
  ctx.bezierCurveTo(365.933, 499.907, 354.84, 511, 340.333, 511);
  ctx.closePath();
  ctx.moveTo(263.533, 171.373);
  ctx.bezierCurveTo(
    273.773,
    174.786,
    280.6,
    184.173,
    281.45300000000003,
    195.266
  );
  ctx.lineTo(288.28, 485.4);
  ctx.bezierCurveTo(
    288.28,
    489.667,
    292.54699999999997,
    493.933,
    296.813,
    493.933
  );
  ctx.lineTo(340.33299999999997, 493.933);
  ctx.bezierCurveTo(345.453, 493.933, 348.866, 490.52, 348.866, 485.4);
  ctx.lineTo(348.866, 75.8);
  ctx.lineTo(263.533, 75.8);
  ctx.lineTo(263.533, 171.373);
  ctx.lineTo(263.533, 171.373);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(213.187, 511);
  ctx.lineTo(169.667, 511);
  ctx.bezierCurveTo(155.16, 511, 144.067, 499.907, 144.067, 485.4);
  ctx.lineTo(144.067, 67.267);
  ctx.bezierCurveTo(
    144.067,
    62.147,
    147.48000000000002,
    58.733999999999995,
    152.6,
    58.733999999999995
  );
  ctx.lineTo(255, 58.733999999999995);
  ctx.bezierCurveTo(
    260.12,
    58.733999999999995,
    263.533,
    62.14699999999999,
    263.533,
    67.267
  );
  ctx.lineTo(263.533, 178.2);
  ctx.bezierCurveTo(
    263.533,
    183.32,
    260.12,
    186.73299999999998,
    255.00000000000003,
    186.73299999999998
  );
  ctx.bezierCurveTo(
    249.88000000000005,
    186.73299999999998,
    246.46700000000004,
    190.99999999999997,
    245.61300000000003,
    195.26599999999996
  );
  ctx.lineTo(237.93300000000002, 486.253);
  ctx.bezierCurveTo(237.933, 499.907, 226.84, 511, 213.187, 511);
  ctx.closePath();
  ctx.moveTo(161.133, 75.8);
  ctx.lineTo(161.133, 485.40000000000003);
  ctx.bezierCurveTo(
    161.133,
    490.52000000000004,
    164.54600000000002,
    493.93300000000005,
    169.666,
    493.93300000000005
  );
  ctx.lineTo(213.186, 493.93300000000005);
  ctx.bezierCurveTo(
    217.453,
    493.93300000000005,
    221.719,
    490.52000000000004,
    221.719,
    485.40000000000003
  );
  ctx.lineTo(228.546, 195.26700000000005);
  ctx.bezierCurveTo(
    228.546,
    184.17400000000006,
    236.226,
    174.78700000000006,
    246.466,
    171.37400000000005
  );
  ctx.lineTo(246.466, 75.8);
  ctx.lineTo(161.133, 75.8);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(357.4, 135.533);
  ctx.bezierCurveTo(
    329.23999999999995,
    135.533,
    306.2,
    112.493,
    306.2,
    84.33299999999998
  );
  ctx.lineTo(306.2, 67.267);
  ctx.bezierCurveTo(
    306.2,
    62.147,
    309.613,
    58.733999999999995,
    314.733,
    58.733999999999995
  );
  ctx.lineTo(357.4, 58.733999999999995);
  ctx.bezierCurveTo(
    362.52,
    58.733999999999995,
    365.933,
    62.14699999999999,
    365.933,
    67.267
  );
  ctx.lineTo(365.933, 127);
  ctx.bezierCurveTo(365.933, 132.12, 362.52, 135.533, 357.4, 135.533);
  ctx.closePath();
  ctx.moveTo(323.267, 75.8);
  ctx.lineTo(323.267, 84.333);
  ctx.bezierCurveTo(
    323.267,
    100.54599999999999,
    334.36,
    113.346,
    348.867,
    117.613
  );
  ctx.lineTo(348.867, 75.8);
  ctx.lineTo(323.267, 75.8);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(152.6, 135.533);
  ctx.bezierCurveTo(
    147.48,
    135.533,
    144.067,
    132.11999999999998,
    144.067,
    126.99999999999999
  );
  ctx.lineTo(144.067, 67.267);
  ctx.bezierCurveTo(
    144.067,
    62.147,
    147.48000000000002,
    58.733999999999995,
    152.6,
    58.733999999999995
  );
  ctx.lineTo(195.267, 58.733999999999995);
  ctx.bezierCurveTo(
    200.387,
    58.733999999999995,
    203.79999999999998,
    62.14699999999999,
    203.79999999999998,
    67.267
  );
  ctx.lineTo(203.79999999999998, 84.334);
  ctx.bezierCurveTo(203.8, 112.493, 180.76, 135.533, 152.6, 135.533);
  ctx.closePath();
  ctx.moveTo(161.133, 75.8);
  ctx.lineTo(161.133, 117.613);
  ctx.bezierCurveTo(
    175.64000000000001,
    114.2,
    186.733,
    100.54599999999999,
    186.733,
    84.333
  );
  ctx.lineTo(186.733, 75.8);
  ctx.lineTo(161.133, 75.8);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(357.4, 41.667);
  ctx.lineTo(152.6, 41.667);
  ctx.bezierCurveTo(
    147.48,
    41.667,
    144.067,
    38.254000000000005,
    144.067,
    33.134
  );
  ctx.bezierCurveTo(144.067, 28.013999999999996, 147.48, 24.6, 152.6, 24.6);
  ctx.lineTo(357.4, 24.6);
  ctx.bezierCurveTo(362.52, 24.6, 365.933, 28.013, 365.933, 33.133);
  ctx.bezierCurveTo(365.933, 38.253, 362.52, 41.667, 357.4, 41.667);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(186.733, 263.533);
  ctx.lineTo(152.6, 263.533);
  ctx.bezierCurveTo(
    147.48,
    263.533,
    144.067,
    260.12,
    144.067,
    255.00000000000003
  );
  ctx.bezierCurveTo(
    144.067,
    249.88000000000005,
    147.48000000000002,
    246.46700000000004,
    152.6,
    246.46700000000004
  );
  ctx.lineTo(186.733, 246.46700000000004);
  ctx.bezierCurveTo(
    191.853,
    246.46700000000004,
    195.266,
    249.88000000000005,
    195.266,
    255.00000000000003
  );
  ctx.bezierCurveTo(195.266, 260.12, 191.853, 263.533, 186.733, 263.533);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(169.667, 297.667);
  ctx.lineTo(152.6, 297.667);
  ctx.bezierCurveTo(
    147.48,
    297.667,
    144.067,
    294.25399999999996,
    144.067,
    289.13399999999996
  );
  ctx.bezierCurveTo(
    144.067,
    284.01399999999995,
    147.48000000000002,
    280.60099999999994,
    152.6,
    280.60099999999994
  );
  ctx.lineTo(169.667, 280.60099999999994);
  ctx.bezierCurveTo(
    174.787,
    280.60099999999994,
    178.2,
    284.01399999999995,
    178.2,
    289.13399999999996
  );
  ctx.bezierCurveTo(178.2, 294.253, 174.787, 297.667, 169.667, 297.667);
  ctx.closePath();
  ctx.fill();
};
const trousers3 = (ctx: CanvasRenderingContext2D) => {
  ctx.miterLimit = 4;
  ctx.scale(0.1, 0.1);
  ctx.scale(scale, scale);
  ctx.translate(1, 1);
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(255, 41.667);
  ctx.lineTo(255, 178.2);
  ctx.bezierCurveTo(264.387, 178.2, 272.067, 185.88, 272.92, 195.267);
  ctx.lineTo(280.6, 486.254);
  ctx.bezierCurveTo(
    280.6,
    495.641,
    288.28000000000003,
    502.46700000000004,
    297.66700000000003,
    502.46700000000004
  );
  ctx.lineTo(340.33400000000006, 502.46700000000004);
  ctx.bezierCurveTo(
    349.72100000000006,
    502.46700000000004,
    357.40100000000007,
    494.78700000000003,
    357.40100000000007,
    485.40000000000003
  );
  ctx.lineTo(357.40100000000007, 41.667);
  ctx.lineTo(255, 41.667);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(255, 178.2);
  ctx.lineTo(255, 41.667);
  ctx.lineTo(152.6, 41.667);
  ctx.lineTo(152.6, 485.4);
  ctx.bezierCurveTo(152.6, 494.787, 160.28, 502.467, 169.667, 502.467);
  ctx.lineTo(213.187, 502.467);
  ctx.bezierCurveTo(
    222.574,
    502.467,
    230.25400000000002,
    494.787,
    230.25400000000002,
    486.25399999999996
  );
  ctx.lineTo(237.08100000000002, 195.26699999999994);
  ctx.bezierCurveTo(237.933, 185.88, 245.613, 178.2, 255, 178.2);
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(152.6, 41.667);
  ctx.lineTo(357.4, 41.667);
  ctx.lineTo(357.4, 7.533);
  ctx.lineTo(152.6, 7.533);
  ctx.lineTo(152.6, 41.667);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(340.333, 41.667);
  ctx.lineTo(340.333, 485.4);
  ctx.bezierCurveTo(340.333, 494.787, 332.653, 502.467, 323.266, 502.467);
  ctx.lineTo(340.333, 502.467);
  ctx.bezierCurveTo(
    349.72,
    502.467,
    357.40000000000003,
    494.787,
    357.40000000000003,
    485.4
  );
  ctx.lineTo(357.40000000000003, 41.667);
  ctx.lineTo(340.333, 41.667);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.ORANGE;
  ctx.beginPath();
  ctx.moveTo(340.333, 41.667);
  ctx.lineTo(357.4, 41.667);
  ctx.lineTo(357.4, 7.533);
  ctx.lineTo(340.333, 7.533);
  ctx.lineTo(340.333, 41.667);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(169.667, 41.667);
  ctx.lineTo(169.667, 485.4);
  ctx.bezierCurveTo(169.667, 494.787, 177.347, 502.467, 186.734, 502.467);
  ctx.lineTo(169.667, 502.467);
  ctx.bezierCurveTo(160.28, 502.467, 152.6, 494.787, 152.6, 485.4);
  ctx.lineTo(152.6, 41.667);
  ctx.lineTo(169.667, 41.667);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.WHITE;
  ctx.beginPath();
  ctx.moveTo(152.6, 41.667);
  ctx.lineTo(169.667, 41.667);
  ctx.lineTo(169.667, 7.533);
  ctx.lineTo(152.6, 7.533);
  ctx.lineTo(152.6, 41.667);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(357.4, 101.4);
  ctx.lineTo(357.4, 101.4);
  ctx.bezierCurveTo(
    329.23999999999995,
    101.4,
    306.2,
    78.36000000000001,
    306.2,
    50.2
  );
  ctx.lineTo(306.2, 41.667);
  ctx.lineTo(357.4, 41.667);
  ctx.lineTo(357.4, 101.4);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(152.6, 101.4);
  ctx.lineTo(152.6, 101.4);
  ctx.bezierCurveTo(180.76, 101.4, 203.8, 78.36000000000001, 203.8, 50.2);
  ctx.lineTo(203.8, 41.667);
  ctx.lineTo(152.60000000000002, 41.667);
  ctx.lineTo(152.60000000000002, 101.4);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(152.6, 297.667);
  ctx.lineTo(186.733, 297.667);
  ctx.lineTo(186.733, 212.333);
  ctx.lineTo(152.6, 212.333);
  ctx.lineTo(152.6, 297.667);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(152.6, 246.467);
  ctx.lineTo(186.733, 246.467);
  ctx.lineTo(186.733, 212.333);
  ctx.lineTo(152.6, 212.333);
  ctx.lineTo(152.6, 246.467);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(323.267, 297.667);
  ctx.lineTo(357.4, 297.667);
  ctx.lineTo(357.4, 212.333);
  ctx.lineTo(323.267, 212.333);
  ctx.lineTo(323.267, 297.667);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.YELLOW;
  ctx.beginPath();
  ctx.moveTo(323.267, 246.467);
  ctx.lineTo(357.4, 246.467);
  ctx.lineTo(357.4, 212.333);
  ctx.lineTo(323.267, 212.333);
  ctx.lineTo(323.267, 246.467);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = Colours.BLACK;
  ctx.beginPath();
  ctx.moveTo(357.4, 50.2);
  ctx.lineTo(152.6, 50.2);
  ctx.bezierCurveTo(147.48, 50.2, 144.067, 46.787000000000006, 144.067, 41.667);
  ctx.lineTo(144.067, 7.533);
  ctx.bezierCurveTo(
    144.067,
    2.4130000000000003,
    147.48000000000002,
    -0.9999999999999991,
    152.6,
    -0.9999999999999991
  );
  ctx.lineTo(357.4, -0.9999999999999991);
  ctx.bezierCurveTo(
    362.52,
    -0.9999999999999991,
    365.933,
    2.4130000000000007,
    365.933,
    7.533
  );
  ctx.lineTo(365.933, 41.666000000000004);
  ctx.bezierCurveTo(365.933, 46.787, 362.52, 50.2, 357.4, 50.2);
  ctx.closePath();
  ctx.moveTo(161.133, 33.133);
  ctx.lineTo(348.866, 33.133);
  ctx.lineTo(348.866, 16.067);
  ctx.lineTo(161.133, 16.067);
  ctx.lineTo(161.133, 33.133);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(340.333, 511);
  ctx.lineTo(296.81300000000005, 511);
  ctx.bezierCurveTo(283.16, 511, 271.213, 499.907, 271.213, 486.253);
  ctx.lineTo(264.386, 195.26599999999996);
  ctx.bezierCurveTo(
    264.386,
    190.14599999999996,
    260.119,
    186.73299999999998,
    254.99900000000002,
    186.73299999999998
  );
  ctx.bezierCurveTo(
    249.87900000000002,
    186.73299999999998,
    246.46600000000004,
    183.31999999999996,
    246.46600000000004,
    178.2
  );
  ctx.lineTo(246.46600000000004, 41.667);
  ctx.bezierCurveTo(
    246.46600000000004,
    36.547000000000004,
    249.87900000000005,
    33.134,
    254.99900000000002,
    33.134
  );
  ctx.lineTo(357.399, 33.134);
  ctx.bezierCurveTo(362.519, 33.134, 365.932, 36.547, 365.932, 41.667);
  ctx.lineTo(365.932, 485.4);
  ctx.bezierCurveTo(365.933, 499.907, 354.84, 511, 340.333, 511);
  ctx.closePath();
  ctx.moveTo(263.533, 171.373);
  ctx.bezierCurveTo(
    273.773,
    174.786,
    280.6,
    184.173,
    281.45300000000003,
    195.266
  );
  ctx.lineTo(288.28, 485.4);
  ctx.bezierCurveTo(
    288.28,
    489.667,
    292.54699999999997,
    493.933,
    296.813,
    493.933
  );
  ctx.lineTo(340.33299999999997, 493.933);
  ctx.bezierCurveTo(345.453, 493.933, 348.866, 490.52, 348.866, 485.4);
  ctx.lineTo(348.866, 50.2);
  ctx.lineTo(263.533, 50.2);
  ctx.lineTo(263.533, 171.373);
  ctx.lineTo(263.533, 171.373);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(213.187, 511);
  ctx.lineTo(169.667, 511);
  ctx.bezierCurveTo(155.16, 511, 144.067, 499.907, 144.067, 485.4);
  ctx.lineTo(144.067, 41.667);
  ctx.bezierCurveTo(
    144.067,
    36.547000000000004,
    147.48000000000002,
    33.134,
    152.6,
    33.134
  );
  ctx.lineTo(255, 33.134);
  ctx.bezierCurveTo(260.12, 33.134, 263.533, 36.547, 263.533, 41.667);
  ctx.lineTo(263.533, 178.2);
  ctx.bezierCurveTo(
    263.533,
    183.32,
    260.12,
    186.73299999999998,
    255.00000000000003,
    186.73299999999998
  );
  ctx.bezierCurveTo(
    249.88000000000005,
    186.73299999999998,
    246.46700000000004,
    190.99999999999997,
    245.61300000000003,
    195.26599999999996
  );
  ctx.lineTo(237.93300000000002, 486.253);
  ctx.bezierCurveTo(237.933, 499.907, 226.84, 511, 213.187, 511);
  ctx.closePath();
  ctx.moveTo(161.133, 50.2);
  ctx.lineTo(161.133, 485.4);
  ctx.bezierCurveTo(
    161.133,
    490.52,
    164.54600000000002,
    493.933,
    169.666,
    493.933
  );
  ctx.lineTo(213.186, 493.933);
  ctx.bezierCurveTo(217.453, 493.933, 221.719, 490.52, 221.719, 485.4);
  ctx.lineTo(228.546, 195.267);
  ctx.bezierCurveTo(228.546, 184.174, 236.226, 174.787, 246.466, 171.374);
  ctx.lineTo(246.466, 50.2);
  ctx.lineTo(161.133, 50.2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(357.4, 109.933);
  ctx.bezierCurveTo(
    324.12,
    109.933,
    297.667,
    83.48,
    297.667,
    50.20000000000001
  );
  ctx.lineTo(297.667, 41.66700000000001);
  ctx.bezierCurveTo(
    297.667,
    36.54700000000001,
    301.08,
    33.13400000000001,
    306.2,
    33.13400000000001
  );
  ctx.lineTo(357.4, 33.13400000000001);
  ctx.bezierCurveTo(
    362.52,
    33.13400000000001,
    365.933,
    36.547000000000004,
    365.933,
    41.66700000000001
  );
  ctx.lineTo(365.933, 101.4);
  ctx.bezierCurveTo(365.933, 106.52, 362.52, 109.933, 357.4, 109.933);
  ctx.closePath();
  ctx.moveTo(314.733, 50.2);
  ctx.bezierCurveTo(314.733, 70.68, 329.24, 87.747, 348.866, 92.013);
  ctx.lineTo(348.866, 50.2);
  ctx.lineTo(314.733, 50.2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(152.6, 109.933);
  ctx.bezierCurveTo(
    147.48,
    109.933,
    144.067,
    106.52000000000001,
    144.067,
    101.4
  );
  ctx.lineTo(144.067, 41.667);
  ctx.bezierCurveTo(
    144.067,
    36.547000000000004,
    147.48000000000002,
    33.134,
    152.6,
    33.134
  );
  ctx.lineTo(203.8, 33.134);
  ctx.bezierCurveTo(
    208.92000000000002,
    33.134,
    212.333,
    36.547,
    212.333,
    41.667
  );
  ctx.lineTo(212.333, 50.2);
  ctx.bezierCurveTo(212.333, 83.48, 185.88, 109.933, 152.6, 109.933);
  ctx.closePath();
  ctx.moveTo(161.133, 50.2);
  ctx.lineTo(161.133, 92.013);
  ctx.bezierCurveTo(
    180.76000000000002,
    87.74600000000001,
    195.26600000000002,
    70.68,
    195.26600000000002,
    50.2
  );
  ctx.lineTo(161.133, 50.2);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(186.733, 306.2);
  ctx.lineTo(152.6, 306.2);
  ctx.bezierCurveTo(147.48, 306.2, 144.067, 302.787, 144.067, 297.667);
  ctx.lineTo(144.067, 212.33399999999997);
  ctx.bezierCurveTo(
    144.067,
    207.21399999999997,
    147.48000000000002,
    203.801,
    152.6,
    203.801
  );
  ctx.lineTo(186.733, 203.801);
  ctx.bezierCurveTo(
    191.853,
    203.801,
    195.266,
    207.214,
    195.266,
    212.33399999999997
  );
  ctx.lineTo(195.266, 297.667);
  ctx.bezierCurveTo(195.267, 302.787, 191.853, 306.2, 186.733, 306.2);
  ctx.closePath();
  ctx.moveTo(161.133, 289.133);
  ctx.lineTo(178.2, 289.133);
  ctx.lineTo(178.2, 220.86599999999999);
  ctx.lineTo(161.13299999999998, 220.86599999999999);
  ctx.lineTo(161.13299999999998, 289.133);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(186.733, 255);
  ctx.lineTo(152.6, 255);
  ctx.bezierCurveTo(147.48, 255, 144.067, 251.587, 144.067, 246.467);
  ctx.lineTo(144.067, 212.334);
  ctx.bezierCurveTo(
    144.067,
    207.214,
    147.48000000000002,
    203.80100000000002,
    152.6,
    203.80100000000002
  );
  ctx.lineTo(186.733, 203.80100000000002);
  ctx.bezierCurveTo(
    191.853,
    203.80100000000002,
    195.266,
    207.21400000000003,
    195.266,
    212.334
  );
  ctx.lineTo(195.266, 246.467);
  ctx.bezierCurveTo(195.267, 251.587, 191.853, 255, 186.733, 255);
  ctx.closePath();
  ctx.moveTo(161.133, 237.933);
  ctx.lineTo(178.2, 237.933);
  ctx.lineTo(178.2, 220.86599999999999);
  ctx.lineTo(161.13299999999998, 220.86599999999999);
  ctx.lineTo(161.13299999999998, 237.933);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(357.4, 306.2);
  ctx.lineTo(323.267, 306.2);
  ctx.bezierCurveTo(318.147, 306.2, 314.734, 302.787, 314.734, 297.667);
  ctx.lineTo(314.734, 212.33399999999997);
  ctx.bezierCurveTo(
    314.734,
    207.21399999999997,
    318.147,
    203.801,
    323.267,
    203.801
  );
  ctx.lineTo(357.4, 203.801);
  ctx.bezierCurveTo(
    362.52,
    203.801,
    365.933,
    207.214,
    365.933,
    212.33399999999997
  );
  ctx.lineTo(365.933, 297.667);
  ctx.bezierCurveTo(365.933, 302.787, 362.52, 306.2, 357.4, 306.2);
  ctx.closePath();
  ctx.moveTo(331.8, 289.133);
  ctx.lineTo(348.867, 289.133);
  ctx.lineTo(348.867, 220.86599999999999);
  ctx.lineTo(331.8, 220.86599999999999);
  ctx.lineTo(331.8, 289.133);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(357.4, 255);
  ctx.lineTo(323.267, 255);
  ctx.bezierCurveTo(318.147, 255, 314.734, 251.587, 314.734, 246.467);
  ctx.lineTo(314.734, 212.334);
  ctx.bezierCurveTo(
    314.734,
    207.214,
    318.147,
    203.80100000000002,
    323.267,
    203.80100000000002
  );
  ctx.lineTo(357.4, 203.80100000000002);
  ctx.bezierCurveTo(
    362.52,
    203.80100000000002,
    365.933,
    207.21400000000003,
    365.933,
    212.334
  );
  ctx.lineTo(365.933, 246.467);
  ctx.bezierCurveTo(365.933, 251.587, 362.52, 255, 357.4, 255);
  ctx.closePath();
  ctx.moveTo(331.8, 237.933);
  ctx.lineTo(348.867, 237.933);
  ctx.lineTo(348.867, 220.86599999999999);
  ctx.lineTo(331.8, 220.86599999999999);
  ctx.lineTo(331.8, 237.933);
  ctx.closePath();
  ctx.fill();
};
