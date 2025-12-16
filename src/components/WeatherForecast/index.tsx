import weatherClasses from './index.module.scss';

export const Weather = () => {
  return (
    <>
      <ul className={weatherClasses.weather}></ul>
    </>
  );
}