import { useState } from 'react';

import { dateTimeService } from '../../services/dateTimeService';
import { useGetWeatherQuery } from '../../store/WeatherApi';

import { ForecastResponseItem, GroupedForecast, Props } from './types';

export const useCalendar = ({ city }: Props) => {
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
