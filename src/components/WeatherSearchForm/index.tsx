import formClasses from './index.module.scss';

export const WeatherSearchForm = () => {
  return (
    <form className={formClasses.weatherForm}>
      <input type="text" name="searchForm" className={formClasses.weatherFormInput} />
      <button type="submit">Найти</button>
    </form>
  );
}