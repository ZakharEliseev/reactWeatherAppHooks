import { useState } from 'react';

import { Calendar } from './WeatherCalendar';
import { WeatherSearchForm } from './WeatherSearchForm/index';

export const App = () => {
  const [city, setCity] = useState('');
  return (
    <>
      <h1 className="header">{city}</h1>
      <WeatherSearchForm onSetCity={setCity} />
      <Calendar city={city} />
    </>
  );
};
