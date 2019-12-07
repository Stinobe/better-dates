import BetterDate from "../src";

const date = new BetterDate(1987, 8, 14);

const ny = new BetterDate(2020, 0, 1);
const nyDate = new Date(2020, 0, 1);

const xmas = new BetterDate(2019, 11, 25);
const xmasDate = new Date(2019, 11, 25);

const origin = new BetterDate(0);
const originDate = new Date(0);

describe('Comparison', () => {

  test('Date is before now', () => {
    expect(date.isBefore()).toBeTruthy();
  });

  test('Date is after now', () => {
    expect(date.isAfter()).toBeFalsy();
  });

  test('Date is between future dates', () => {
    expect(date.isBetween(xmas, ny)).toBeFalsy();
    expect(date.isBetween(ny, xmas)).toBeFalsy();
    expect(date.isBetween(xmasDate, nyDate)).toBeFalsy();
    expect(date.isBetween(nyDate, xmasDate)).toBeFalsy();
  });

  test('Date is between history dates', () => {
    expect(date.isBetween(origin, ny)).toBeTruthy();
    expect(date.isBetween(ny, origin)).toBeTruthy();
    expect(date.isBetween(originDate, nyDate)).toBeTruthy();
    expect(date.isBetween(nyDate, originDate)).toBeTruthy();
  });

});