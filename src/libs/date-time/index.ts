import type DateTime from './DateTime';
import Adapter from './DayJsAdapter';

const instance: DateTime = new Adapter();

export function format(date: Date | string, dateFormat: string): String {
  return instance.format(date, dateFormat);
}
export function isSameDay(dateLeft: Date | string, dateRight: Date): boolean {
  return instance.isSameDay(dateLeft, dateRight);
}
export function addDays(date: Date | string, amount: number): Date {
  return instance.addDays(date, amount);
}
export function getQuarter(date: Date | string): number {
  return instance.getQuarter(date);
}
