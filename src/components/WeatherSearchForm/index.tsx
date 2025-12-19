import { useState } from 'react';

import { Props } from './types';

import styles from './index.module.scss';

export const WeatherSearchForm = ({ onSetCity }: Props) => {
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
