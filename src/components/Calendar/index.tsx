import { useGetWeatherQuery } from '../store/WeatherApi';
import { Weather } from '../WeatherForecast';
 
import calendarClasses from './index.module.scss';

export const Calendar = () => {
  const {data = [], isLoading} = useGetWeatherQuery('Москва');
  console.log('>>', data)
  if (isLoading) return <h1>Данные не были загружены</h1>
  return(
    <>
    <ul className={calendarClasses.calendar}></ul>
    <Weather/>
    </>
  )
}