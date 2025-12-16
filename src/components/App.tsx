
import { Calendar } from './Calendar';
import {WeatherSearchForm} from './WeatherSearchForm/index';

import appClasses from './App.module.scss';

export const App = () => {
  return(
  <>
  <h1 className={appClasses.city}></h1>
    <WeatherSearchForm/>
    <Calendar/>
  </>
  )
}