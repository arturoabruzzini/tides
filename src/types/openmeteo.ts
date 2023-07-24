export type Units = {
  time: string;
  temperature_2m: string;
  apparent_temperature: string;
  precipitation_probability: string;
  precipitation: string;
  weathercode: string;
  cloudcover: string;
  visibility: string;
  is_day: string;
};

export type OpenMeteoHour = {
  time: string;
  temperature_2m: number;
  apparent_temperature: number;
  precipitation_probability: number;
  precipitation: number;
  weathercode: number;
  cloudcover: number;
  visibility: number;
  is_day: number;
};

export type OpenMeteoData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: Units;
  hourly: OpenMeteoHour[];
};

export type OpenMeteoHourlyArrays = {
  time: Array<string>;
  temperature_2m: Array<number>;
  apparent_temperature: Array<number>;
  precipitation_probability: Array<number>;
  precipitation: Array<number>;
  weathercode: Array<number>;
  cloudcover: Array<number>;
  visibility: Array<number>;
  is_day: Array<number>;
};

export type RawOpenMeteoData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: Units;
  hourly: OpenMeteoHourlyArrays;
};
