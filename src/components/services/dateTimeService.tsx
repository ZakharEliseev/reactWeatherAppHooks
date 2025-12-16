// eslint-disable-next-line no-restricted-imports
import dayjs from 'dayjs';

// eslint-disable-next-line no-restricted-imports
import 'dayjs/locale/ru';

export class DateTimeService {
  
  constructor() {
    dayjs.locale('ru');
  }

  getToday = () => {
    return dayjs().format('YYYY-MM-DD')
  }

  format = (date: string, template: string) => {
    return dayjs(date).format(template);
  }

  getWeekday = (date: string): string => {
    const weekday = dayjs(date).format('dddd');
    return weekday[0].toUpperCase() + weekday.slice(1);
  }

  getMonth = (date: string): string => {
    const month = dayjs(date).format('MMMM');
    return month[0].toUpperCase() + month.slice(1);
  }
}
