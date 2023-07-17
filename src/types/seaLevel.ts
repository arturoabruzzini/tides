export interface SeaLevelData {
  data: SeaLevelDatum[];
  meta: Meta;
}

export interface SeaLevelDatum {
  sg: number;
  time: string;
}

export enum Type {
  High = "high",
  Low = "low",
}

export interface Meta {
  cost: number;
  dailyQuota: number;
  datum: string;
  end: string;
  lat: number;
  lng: number;
  requestCount: number;
  start: string;
  station: Station;
}

export interface Station {
  distance: number;
  lat: number;
  lng: number;
  name: string;
  source: string;
}
