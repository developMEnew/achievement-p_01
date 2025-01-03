export const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
] as const;

export type Month = typeof months[number];

export function getMonthFromKey(key: string): string {
  return key.split('-')[0];
}

export function countSelectedDaysPerMonth(selectedDays: Set<string>): Map<string, number> {
  const monthCounts = new Map<string, number>();
  
  selectedDays.forEach(dayKey => {
    const month = getMonthFromKey(dayKey);
    monthCounts.set(month, (monthCounts.get(month) || 0) + 1);
  });
  
  return monthCounts;
}

export function getDaysInMonth(month: string, year: number): number {
  const monthIndex = months.indexOf(month);
  return new Date(year, monthIndex + 1, 0).getDate();
}

export function getFirstDayOfMonth(month: string, year: number): number {
  const monthIndex = months.indexOf(month);
  return new Date(year, monthIndex, 1).getDay();
}