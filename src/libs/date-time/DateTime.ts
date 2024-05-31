export default interface DateTime {
  format(date: Date | string, format: string): String;
  isSameDay(dateLeft: Date | string, dateRight: Date): boolean;
  addDays(date: Date | string, amount: number): Date;
  getQuarter(date: Date | string): number;
}
