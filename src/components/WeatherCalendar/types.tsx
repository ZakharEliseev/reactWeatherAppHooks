export interface WeatherEntry {
  time: string;
  temp: number;
  description: string;
  icon: string;
  wind: number;
  pressure: number;
  humidity: number;
}

export type GroupedForecast = {
  [date: string]: WeatherEntry[];
};

export interface ForecastResponseItem {
  dt_txt: string;
  wind: { speed: number };
  main: { temp: number; pressure: number; humidity: number };
  weather: Array<{ description: string; icon: string }>;
}
export interface Props {
  city: string;
}
