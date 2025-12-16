import { Circles } from 'react-loader-spinner';

import { GroupedForecast, WeatherEntry } from '../WeatherCalendar/useCalendar';

import weatherClasses from './index.module.scss';

interface WeatherProps {
  forecast: GroupedForecast;
  activeDay: any;
  isFetching: boolean;
  error: { data: { cod: string; message: string } };
}

export const Weather = ({ forecast, activeDay, isFetching, error }: WeatherProps) => {
  const currentDay = forecast[activeDay];
  const spinner = (
    <Circles
      height="40"
      width="40"
      color="#1875f0"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );

  return (
    <>
      <ul className={weatherClasses.weather}>
        {!currentDay ? (
          <>
            <li className={!error ? weatherClasses.loadData : `${weatherClasses.loadData} header`}>
              {error ? `${error.data.cod} ${error.data.message}` : 'Данные не были загружены.'}
            </li>
            <li className={weatherClasses.loadData}>{isFetching ? spinner : null}</li>
          </>
        ) : (
          currentDay?.map((data: WeatherEntry) => (
            <li key={data.time} className={weatherClasses.weatherItem}>
              <div className={weatherClasses.weatherTemp}>
                <p>{data.time}</p>
                <p className={weatherClasses.weatherTempDegree}>{data.temp} °C</p>
              </div>
              <div className={weatherClasses.weatherDescr}>
                <p>{data.description}</p>
                <img
                  className={weatherClasses.weatherDescrIcon}
                  src={`./src/img/icons/${data.icon}@2x.png`}
                />
              </div>
              <div className={weatherClasses.weatherWind}>
                <p>Скорость ветра</p>
                <p>{data.wind} м/с</p>
              </div>
              <div className={weatherClasses.weatherPressure}>
                <p>Атмосферное давление</p>
                <p>{data.pressure} мм рт.</p>
              </div>
              <div className={weatherClasses.weatherHumidity}>
                <p>Влажность</p>
                <p>{data.humidity}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
};
