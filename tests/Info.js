import BetterDate from "../src";

const day = 14;
const month = 8;
const year = 1987;
const hours = 21;
const minutes = 3;
const seconds = 19;
const ms = 96;

const daysInMonth = 30;

const betterDate = new BetterDate(year, month, day, hours, minutes, seconds, ms);

describe('Additional information', () => {

  test('Start of day', () => {
    const startOfDay = new Date(year, month, day, 0, 0, 0);
    expect(betterDate.startOfDay).toEqual(startOfDay);
  });

  test('End of day', () => {
    const endOfDay = new Date(year, month, day, 23, 59, 59, 999);
    expect(betterDate.endOfDay).toEqual(endOfDay);
  });

  test('Days in month', () => {
    expect(betterDate.daysInMonth).toEqual(daysInMonth);
  });

  test('Start of month', () => {
    const startOfMonth = new Date(year, month, 1, 0, 0, 0, 0);
    expect(betterDate.startOfMonth).toEqual(startOfMonth);
  });

  test('End of month', () => {
    const endOfMonth = new Date(year, month, daysInMonth, 23, 59, 59, 999);
    expect(betterDate.endOfMonth).toEqual(endOfMonth);
  });

});