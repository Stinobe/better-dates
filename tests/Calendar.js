import BetterDate from '../src/index';
import Calendar from '../src/Calendar';

const dateA = new BetterDate(1987, 8, 14);
const dateB = new Date(1996, 2, 1);

describe('Test calendar', () => {

  test('Calendar in BetterDate', () => {
    const day = dateA.startOfMonth.getDay();
    const calendar = dateA.calendar;

    expect(calendar[0][day - 1]).toEqual(dateA.startOfMonth);
  });

  test('Calendar in BetterDate with different first day of week', () => {
    const day = dateA.startOfMonth.getDay();
    dateA.firstDayOfWeek = 0;
    const calendar = dateA.calendar;

    expect(calendar[0][day]).toEqual(dateA.startOfMonth);
  });

  test('Calendar in Date', () => {
    const calendar = Calendar(dateB);

    expect(calendar[0][dateB.getDay() - 1]).toEqual(dateB);
  });

  test('Calendar in Date with different first day of week', () => {
    const calendar = Calendar(dateB, 0);

    expect(calendar[0][dateB.getDay()]).toEqual(dateB);
  });

});