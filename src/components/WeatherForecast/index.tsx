import { Circles } from 'react-loader-spinner';

import { GroupedForecast, WeatherEntry } from '../WeatherCalendar/useCalendar';

import classes from './index.module.scss';

interface Props {
  forecast: GroupedForecast;
  activeDay: any;
  isFetching: boolean;
  error: { data: { cod: string; message: string } };
}

const Loader = () => (
  <ul className={classes.weather}>
    <li className={classes.loadData}>
      <Circles height="40" width="40" color="#1875f0" visible />
    </li>
  </ul>
);

const Stub = ({ error }: Pick<Props, 'error'>) => (
  <ul className={classes.weather}>
    <li className={!error ? classes.loadData : `${classes.loadData} header`}>
      {error ? `${error.data.cod} ${error.data.message}` : 'Данные не были загружены.'}
    </li>
  </ul>
);

const List = ({ currentDay }: { currentDay: WeatherEntry[] }) => (
  <ul className={classes.weather}>
    {currentDay?.map(({ time, temp, description, icon, wind, pressure, humidity }: WeatherEntry) => (
      <li key={time} className={classes.weatherItem}>
        <div className={classes.weatherTemp}>
          <p>{time}</p>
          <p className={classes.weatherTempDegree}>{temp} °C</p>
        </div>
        <div className={classes.weatherDescr}>
          <p>{description}</p>
          <img className={classes.weatherDescrIcon} src={`./src/img/icons/${icon}@2x.png`} />
        </div>
        <div className={classes.weatherWind}>
          <p>Скорость ветра</p>
          <p>{wind} м/с</p>
        </div>
        <div className={classes.weatherPressure}>
          <p>Атмосферное давление</p>
          <p>{pressure} мм рт.</p>
        </div>
        <div className={classes.weatherHumidity}>
          <p>Влажность</p>
          <p>{humidity}</p>
        </div>
      </li>
    ))}
  </ul>
);

export const Weather = ({ forecast, activeDay, isFetching, error }: Props) => {
  const currentDay = forecast[activeDay];

  if (isFetching) {
    return <Loader />;
  }

  if (!currentDay && error) {
    return <Stub error={error} />;
  }

  return <List currentDay={currentDay} />;
};
