import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const Api = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/forecast' }),
  endpoints: (build) => ({
    getWeather: build.query({
      query: (cityName: string) => ({
        url: '',
        params: {
          q: cityName,
          appid: API_KEY,
          units: 'metric',
          lang: 'ru',
        },
      }),
    }),
  }),
});

export const { useGetWeatherQuery } = Api;