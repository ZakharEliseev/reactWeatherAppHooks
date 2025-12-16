import { DateTimeService } from '../../services/dateTimeService';
import { Weather } from '../WeatherForecast';

import { useCalendar } from './useCalendar';

import calendarClasses from './index.module.scss';

const dateTimeService = new DateTimeService();

export interface CalendarProps {
  city: string;
}

export const Calendar = ({ city }: CalendarProps) => {
  const { days, activeDay, setActiveDay, groupedWeatherData, isFetching, error } = useCalendar({
    city,
  });

  return (
    <>
      <ul className={calendarClasses.calendar}>
        {days.map((day) => (
          <li
            className={
              day === activeDay
                ? `${calendarClasses.activeDate} ${calendarClasses.calendarItem}`
                : calendarClasses.calendarItem
            }
            key={day}
            onClick={() => setActiveDay(day)}>
            <h2 className={calendarClasses.calendarDay}>{dateTimeService.format(day, 'D')}</h2>
            <div className={calendarClasses.calendarHeader}>
              <p className={calendarClasses.calendarHeaderMonth}>{dateTimeService.getMonth(day)}</p>
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
