import { dateTimeService } from '../../services/dateTimeService';
import { Weather } from '../WeatherForecast';

import { useCalendar } from './useCalendar';

import styles from './index.module.scss';

export interface CalendarProps {
  city: string;
}

export const Calendar = ({ city }: CalendarProps) => {
  const { days, activeDay, setActiveDay, groupedWeatherData, isFetching, error } = useCalendar({
    city,
  });

  return (
    <>
      <ul className={styles.calendar}>
        {days.map((day) => (
          <li
            className={
              day === activeDay
                ? `${styles.activeDate} ${styles.calendarItem}`
                : styles.calendarItem
            }
            key={day}
            onClick={() => setActiveDay(day)}>
            <h2 className={styles.calendarDay}>{dateTimeService.format(day, 'D')}</h2>
            <div className={styles.calendarHeader}>
              <p className={styles.calendarHeaderMonth}>{dateTimeService.getMonth(day)}</p>
              <p>{dateTimeService.getWeekday(day)}</p>
            </div>
          </li>
        ))}
      </ul>
      <Weather
        error={error}
        forecast={groupedWeatherData}
        activeDay={activeDay}
        isFetching={isFetching}
      />
    </>
  );
};
