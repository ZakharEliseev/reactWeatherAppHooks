import { useState } from 'react';

import { DateTimeService } from '../services/dateTimeService';
import { useGetWeatherQuery } from '../store/WeatherApi';

import { CalendarProps } from './index';

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

const dateTimeService = new DateTimeService();

export const useCalendar = ({ city }: CalendarProps) => {
  const { data = { list: [] }, isFetching, error } = useGetWeatherQuery(city, { skip: !city });
  const [activeDay, setActiveDay] = useState(dateTimeService.getToday());

  const groupedWeatherData = data?.list?.reduce(
    (acc: GroupedForecast, item: ForecastResponseItem) => {
      const date: string = dateTimeService.format(item.dt_txt, 'YYYY-MM-DD');
      const time: string = dateTimeService.format(item.dt_txt, 'HH:mm');
      const entry = {
        time,
        temp: Math.ceil(item.main.temp),
        description: item.weather[0].description,
        icon: item.weather[0].icon,
        wind: Math.ceil(item.wind.speed),
        pressure: Math.ceil(item.main.pressure / 1.33),
        humidity: item.main.humidity,
      };
      return {
        ...acc,
        [date]: acc[date] ? [...acc[date], entry] : [entry],
      };
    },
    {},
  );

  const days: string[] = Object.keys(groupedWeatherData);

  return { days, activeDay, setActiveDay, groupedWeatherData, isFetching, error };
};
