import { useState } from 'react';

import formClasses from './index.module.scss';

interface WeatherSearchFormProps {
  onSetCity: (cityName: string) => void;
}

export const WeatherSearchForm = ({ onSetCity }: WeatherSearchFormProps) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <form className={formClasses.weatherForm} onSubmit={(e) => {
      e.preventDefault();
      onSetCity(inputValue);
      setInputValue('');
      }}>
      <input
        type="text"
        name="searchForm"
        className={formClasses.weatherFormInput}
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <button type="submit">Найти</button>
    </form>
  );
};
