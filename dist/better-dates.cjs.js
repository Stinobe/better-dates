'use strict';

/**
 * 
 */
class BetterDate extends Date {
  constructor(...args) {
    // Send given arguments to the JavaScript Date object
    super(...args);
  }

  get time() {
    return this.getTime();
  }

  get milliseconds() {
    return this.getMilliseconds();
  }

  get seconds() {
    return this.getSeconds();
  }

  get minutes() {
    return this.getMinutes();
  }

  get hours() {
    return this.getHours();
  }

  get date() {
    return this.getDate();
  }

  get month() {
    return this.getMonth();
  }

  get year() {
    return this.getFullYear();
  }

  get startOfDay() {
    return new BetterDate(this.year, this.month, this.date, 0, 0, 0);
  }

  get endOfDay() {
    return new BetterDate(this.year, this.month, this.date, 23, 59, 59, 999);
  }

  get startOfMonth() {
    return new BetterDate(this.year, this.month, 1, 0, 0, 0);
  }

  get daysInMonth() {
    return 32 - new BetterDate(this.year, this.month, 32).date;
  }

  get endOfMonth() {
    return new BetterDate(this.year, this.month, this.daysInMonth, 23, 59, 59, 999);
  }

}

module.exports = BetterDate;