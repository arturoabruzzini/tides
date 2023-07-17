export interface AstronomicalData {
  data: AstronomicalDatum[];
  meta: Meta;
}

export interface AstronomicalDatum {
  astronomicalDawn: string | null;
  astronomicalDusk: string | null;
  civilDawn: string | null;
  civilDusk: string | null;
  moonFraction: number;
  moonPhase: MoonPhases;
  moonrise: string;
  moonset: string;
  nauticalDawn: string | null;
  nauticalDusk: string | null;
  sunrise: string;
  sunset: string;
  time: string;
}

export interface MoonPhases {
  closest: MoonPhase;
  current: MoonPhase;
}

export interface MoonPhase {
  text: string;
  time: string;
  value: number;
}

export interface Meta {
  cost: number;
  dailyQuota: number;
  lat: number;
  lng: number;
  requestCount: number;
  start: string;
}
