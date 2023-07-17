export interface WeatherData {
  hours: WeatherHour[];
  meta: Meta;
}

export interface WeatherHour {
  airTemperature: DataPoint; // line
  cloudCover: DataPoint; // clouds?
  currentDirection?: DataPoint;
  currentSpeed?: DataPoint;
  gust: DataPoint;
  humidity: DataPoint;
  iceCover: DataPoint;
  precipitation: DataPoint; // rain
  pressure: DataPoint;
  seaLevel?: DataPoint;
  secondarySwellDirection: DataPoint;
  secondarySwellHeight: DataPoint;
  secondarySwellPeriod: DataPoint;
  snowDepth: DataPoint;
  swellDirection: DataPoint;
  swellHeight: DataPoint;
  swellPeriod: DataPoint;
  time: string;
  visibility: DataPoint;
  waterTemperature: DataPoint; // average number for the day?
  waveDirection: DataPoint;
  waveHeight: DataPoint; // ?
  wavePeriod: DataPoint;
  windDirection: DataPoint; // compass arrow?
  windSpeed: DataPoint; // ?
  windWaveDirection: DataPoint;
  windWaveHeight: DataPoint;
  windWavePeriod: DataPoint;
}

export interface DataPoint {
  sg: number;
}

export interface Meta {
  cost: number;
  dailyQuota: number;
  end: string;
  lat: number;
  lng: number;
  params: string[];
  requestCount: number;
  start: string;
}
