import BetterDate from '../src';

const day = 14;
const month = 8;
const year = 1987;
const hours = 21;
const minutes = 3;
const seconds = 19;
const ms = 96;

describe('Create a new BetterDate instance', () => {

  test('without parameters', () => {
    const betterDate = new BetterDate();
    const date = new Date();
    expect(betterDate).toEqual(date);
    expect(betterDate.time).toEqual(date.getTime());
    expect(betterDate.milliseconds).toEqual(date.getMilliseconds());
    expect(betterDate.seconds).toEqual(date.getSeconds());
    expect(betterDate.minutes).toEqual(date.getMinutes());
    expect(betterDate.hours).toEqual(date.getHours());
  });

  test('with year parameter', () => {
    const betterDate = new BetterDate(year);
    const date = new Date(year);
    expect(betterDate).toEqual(date);
  });

  test('with month parameter', () => {
    const betterDate = new BetterDate(null, month);
    const date = new Date(null, month);
    expect(betterDate).toEqual(date);
  });

  test('with day parameter', () => {
    const betterDate = new BetterDate(null, null, day);
    const date = new Date(null, null, day);
    expect(betterDate).toEqual(date);
  });

  test('with hours parameter', () => {
    const betterDate = new BetterDate(null, null, null, hours);
    const date = new Date(null, null, null, hours);
    expect(betterDate).toEqual(date);
  });

  test('with minutes parameter', () => {
    const betterDate = new BetterDate(null, null, null, null, minutes);
    const date = new Date(null, null, null, null, minutes);
    expect(betterDate).toEqual(date);
  });

  test('with seconds parameter', () => {
    const betterDate = new BetterDate(null, null, null, null, null, seconds);
    const date = new Date(null, null, null, null, null, seconds);
    expect(betterDate).toEqual(date);
  });

  test('with milliseconds parameter', () => {
    const betterDate = new BetterDate(null, null, null, null, null, null, ms);
    const date = new Date(null, null, null, null, null, null, ms);
    expect(betterDate).toEqual(date);
  });

  test('with all parameters', () => {
    const betterDate = new BetterDate(year, month, day, hours, minutes, seconds, ms);
    const date = new Date(year, month, day, hours, minutes, seconds, ms);
    expect(betterDate).toEqual(date);
  });

});