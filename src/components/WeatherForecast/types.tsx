import { GroupedForecast } from "../WeatherCalendar/types";

export interface Props {
  forecast: GroupedForecast;
  activeDay: any;
  isFetching: boolean;
  error: { data: { cod: string; message: string } };
}
