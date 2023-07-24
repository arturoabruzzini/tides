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
  windspeed_10m: string;
  winddirection_10m: string;
};

export type DailyUnits = {
  time: string;
  windspeed_10m_max: string;
  winddirection_10m_dominant: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  apparent_temperature_max: string;
  apparent_temperature_min: string;
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
  windspeed_10m: number;
  winddirection_10m: number;
};

export type OpenMeteoDay = {
  time: string;
  windspeed_10m_max: number;
  winddirection_10m_dominant: number;
  temperature_2m_max: number;
  temperature_2m_min: number;
  apparent_temperature_max: number;
  apparent_temperature_min: number;
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
  daily_units: DailyUnits;
  daily: OpenMeteoDay[];
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
  windspeed_10m: Array<number>;
  winddirection_10m: Array<number>;
};

export type OpenMeteoDailyArrays = {
  time: Array<string>;
  windspeed_10m_max: Array<number>;
  winddirection_10m_dominant: Array<number>;
  temperature_2m_max: Array<number>;
  temperature_2m_min: Array<number>;
  apparent_temperature_max: Array<number>;
  apparent_temperature_min: Array<number>;
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
  daily_units: DailyUnits;
  daily: OpenMeteoDailyArrays;
};

// Marine api types

export interface MarineUnits {
  time: string;
  wave_height: string;
}

export type MarineOpenMeteoHour = {
  time: string;
  wave_height: number;
};

export type MarineOpenMeteoData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  hourly_units: MarineUnits;
  hourly: MarineOpenMeteoHour[];
};

export interface MarineOpenMeteoHourlyArrays {
  time: string[];
  wave_height: number[];
}

export interface RawMarineOpenMeteoData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  hourly_units: MarineUnits;
  hourly: MarineOpenMeteoHourlyArrays;
}
