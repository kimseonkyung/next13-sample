import dayjs from 'dayjs';
import type DateTime from './DateTime';

export default class DayJsAdapter implements DateTime {
  format(date: Date, format: string = 'YYYY-MM-DD'): string {
    return dayjs(date).format(format);
  }
  isSameDay(dateLeft: Date, dateRight: Date): boolean {
    return dayjs(dateLeft).isSame(dateRight);
  }
  addDays(date: Date, amount: number): Date {
    return dayjs(date).add(amount, 'day').toDate();
  }
  getQuarter(date: Date): number {
    return dayjs(date).quarter();
  }
}
