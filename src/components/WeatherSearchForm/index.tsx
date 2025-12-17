import { useState } from 'react';

import styles from './index.module.scss';

interface WeatherSearchFormProps {
  onSetCity: (cityName: string) => void;
}

export const WeatherSearchForm = ({ onSetCity }: WeatherSearchFormProps) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <form
      className={styles.weatherForm}
      onSubmit={(e) => {
        e.preventDefault();
        onSetCity(inputValue);
        setInputValue('');
      }}>
      <input
        type="text"
        name="searchForm"
        className={styles.weatherFormInput}
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <button type="submit">Найти</button>
    </form>
  );
};
