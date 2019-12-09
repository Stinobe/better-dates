# Better Dates

The __Better Dates__ packages provides a `Class` which is an extention of the JavaScript `Date` class. Most of the `get` methods from the `Date` class can be accessed as property instead of a function.

There are other JavaScript Date libraries out there, but most of them have a lot of functionallity which I don't need in my projects, making my projects heavier than it actually needs to be.

That's why I created this package with some basic functionallities I tend to need most when using a Date library. Requests for building complex logic into this package will therefore not be accepted.

- [Better Dates](#better-dates)
  - [Accessing existing methods](#accessing-existing-methods)
  - [New properties](#new-properties)
    - [Today](#today)
    - [Start of day](#start-of-day)
    - [End of day](#end-of-day)
    - [Number of days in the month](#number-of-days-in-the-month)
    - [First day of the month](#first-day-of-the-month)
    - [Last day of the month](#last-day-of-the-month)
    - [Is current month](#is-current-month)
    - [Calendar](#calendar)
  - [Methods](#methods)
    - [Before given date](#before-given-date)
    - [After given date](#after-given-date)
    - [Between two given dates](#between-two-given-dates)
    - [Is same month](#is-same-month)
  - [Upcomming](#upcomming)

## Accessing existing methods
You can still access existing methods from the `Date` class as you would do before, but you can acces them as property as well.

```javascript
import BetterDate from "@stino/better-dates"
// I tend to import the package as BD instead of BetterDate

const date = new Date(87, 8, 14, 11);
// Mon Sep 14 1987 11:00:00 GMT+0200 (CEST)

const betterDate = new BetterDate(87, 8, 14, 11);
// Mon Sep 14 1987 11:00:00 GMT+0200 (CEST)
```
Accessing information from the instances:
```javascript
console.log(date.getMonth());
// -> 8

console.log(betterDate.month)
// -> 8
```
> Setting properties should always happen with original methods  
> In above example: `setMonth` should be used to set the month

## New properties

### Today
Check if the date is same day as current system date
```javascript
import BetterDate from "@stino/better-dates"

const date = new BetterDate(96, 2, 21, 10);
// Thu Mar 21 1996 10:00:00 GMT+0100 (CET)

console.log(date.isToday);
// -> false
```

### Start of day
You can get the start of the day (midnight) using the following property
```javascript
import BetterDate from "@stino/better-dates"

const date = new BetterDate(96, 2, 21, 10);
// Thu Mar 21 1996 10:00:00 GMT+0100 (CET)

console.log(date.startOfDay);
// -> Thu Mar 21 1996 00:00:00 GMT+0100 (CET)
```

### End of day
Get the end of the day (23h 23m 999ms)
```javascript
import BetterDate from "@stino/better-dates"

const date = new BetterDate(96, 2, 21, 10);
// Thu Mar 21 1996 10:00:00 GMT+0100 (CET)

console.log(date.endOfDay);
// -> Thu Mar 21 1996 23:59:59 GMT+0100 (CET)
```

### Number of days in the month
Get the number of days in the month where the current date is in.
```javascript
import BetterDate from "@stino/better-dates"

const date = new BetterDate(96, 2, 21, 10);
// Thu Mar 21 1996 10:00:00 GMT+0100 (CET)

console.log(date.daysInMonth);
// -> 31
```

### First day of the month
Get the first day of the month where the current date is in.
```javascript
import BetterDate from "@stino/better-dates"

const date = new BetterDate(96, 2, 21, 10);
// Thu Mar 21 1996 10:00:00 GMT+0100 (CET)

console.log(date.startOfMonth);
// -> Fri Mar 01 1996 00:00:00 GMT+0100 (CET)
```

### Last day of the month
Get the last day of the month where the current date is in.
```javascript
import BetterDate from "@stino/better-dates"

const date = new BetterDate(96, 2, 21, 10);
// Thu Mar 21 1996 10:00:00 GMT+0100 (CET)

console.log(date.endOfMonth);
// -> Sun Mar 31 1996 23:59:59 GMT+0200 (CEST)
```

### Is current month
Check if the date is in the current month
```javascript
import BetterDate from "@stino/better-dates"

const date = new BetterDate(96, 2, 21, 10);
// Thu Mar 21 1996 10:00:00 GMT+0100 (CET)

console.log(date.isCurrentMonth);
// -> false
```

### Calendar
Gets a calendar for the current date in `Array` format.
Returns a month `Array` containing week `Array`'s with instances of `BetterDate`.
The first day of the week will be Monday by default.
```javascript
import BetterDate from "@stino/better-dates"

const date = new BetterDate(96, 2, 21, 10);
// Thu Mar 21 1996 10:00:00 GMT+0100 (CET)

console.log(date.calendar);
// -> [Array, Array, Array, Array, Array]
// An Array contains 7 BetterDate instances
```

> You can change the first day of the week by setting it on the `BetterDate` instance  
> `date.firstDayOfWeek = 0` _(Sunday)_


The `Calendar` property can be used as seperate function without `BetterDate`.

| Param  | Type                  | Description                           |      Defaults      |
| ------ | --------------------- | ------------------------------------- | :----------------: |
| `date` | `Date` / `BetterDate` | Date to compare with                  | `new BetterDate()` |
| `fdow` | `Number`              | First day of week (0 for Sunday, ...) |   `1` _(Monday)_   |

```javascript
import { Calendar } from "@stino/better-dates";

const date = new Date(1987, 8, 14);
// Mon Sep 14 1987 00:00:00 GMT+0200 (CEST)

console.log(Calendar(date));
// -> [Array, Array, Array, Array, Array]
// An Array contains 7 BetterDate instances

console.log(Calendar(date, 3));
// -> [Array, Array, Array, Array, Array]
// An Array contains 7 BetterDate instances with Wednesday as first day of the week
```

## Methods

### Before given date
Check if the current date is before a given date of type `Date` or `BetterDate`.

| Param       | Type                  | Description          |      Defaults      |
| ----------- | --------------------- | -------------------- | :----------------: |
| `givenDate` | `Date` / `BetterDate` | Date to compare with | `new BetterDate()` |

```javascript
import BetterDate from "@stino/better-dates";

const date = new BetterDate(96, 2, 21, 10);
// Thu Mar 21 1996 00:00:00 GMT+0100 (CET)

console.log(date.isBefore());
// -> true
```
```javascript
import BetterDate from "@stino/better-dates";

const date = new BetterDate(96, 2, 21, 10);
// Thu Mar 21 1996 00:00:00 GMT+0100 (CET)
const ny = new BetterDate(2020, 0, 1);
// Wed Jan 01 2020 00:00:00 GMT+0100 (CET)

console.log(date.isBefore(ny));
// -> true
```

### After given date
Check if the current date is after a given date of type `Date` or `BetterDate`.

| Param       | Type                  | Description          |      Defaults      |
| ----------- | --------------------- | -------------------- | :----------------: |
| `givenDate` | `Date` / `BetterDate` | Date to compare with | `new BetterDate()` |

```javascript
import BetterDate from "@stino/better-dates";

const date = new BetterDate(96, 2, 21, 10);
// Thu Mar 21 1996 00:00:00 GMT+0100 (CET)

console.log(date.isAfter());
// -> false
```
```javascript
import BetterDate from "@stino/better-dates";

const date = new BetterDate(96, 2, 21, 10);
// Thu Mar 21 1996 00:00:00 GMT+0100 (CET)
const ny = new BetterDate(2020, 0, 1);
// Wed Jan 01 2020 00:00:00 GMT+0100 (CET)

console.log(date.isAfter(ny));
// -> false
```

### Between two given dates
Check if the current date is between 2 given dates of type `Date` or `BetterDate`.

| Param       | Type                  | Description       |
| ----------- | --------------------- | ----------------- |
| `startDate` | `Date` / `BetterDate` | Start of timespan |
| `endDate`   | `Date` / `BetterDate` | End of timespan   |

```javascript
import BetterDate from "@stino/better-dates";

const date = new BetterDate(96, 2, 21, 10);
// Thu Mar 21 1996 00:00:00 GMT+0100 (CET)
const xmas = new BetterDate(2019, 11, 25);
// Wed Dec 25 2019 00:00:00 GMT+0100 (CET)
const ny = new BetterDate(2020, 0, 1);
// Wed Jan 01 2020 00:00:00 GMT+0100 (CET)

console.log(date.isBetween(xmas, ny));
// -> false
console.log(date.isBetween(ny, xmas));
// -> false
```

### Is same month
Check if two dates are in the same month

| Param       | Type                  | Description                                   | Defaults |
| ----------- | --------------------- | --------------------------------------------- | :------: |
| `givenDate` | `Date` / `BetterDate` | Date to compare with                          |          |
| `strict`    | `Boolean`             | Weither to check if month is in the same year |  `true`  |

```javascript
import BetterDate from "@stino/better-dates";

const date = new BetterDate(96, 2, 21, 10);
// Thu Mar 21 1996 00:00:00 GMT+0100 (CET)
const xmas = new BetterDate(2019, 11, 25);
// Wed Dec 25 2019 00:00:00 GMT+0100 (CET)
const stNicolas = new BetterDate(2019, 11, 6);
// Wed Jan 01 2020 00:00:00 GMT+0100 (CET)
const nextBday = new BetterDate(2020, 2, 21);
// Sat Mar 21 2020 00:00:00 GMT+0100 (CET)

console.log(date.isSameMonth(xmas));
// -> false
console.log(stNicolas.isSameMonth(xmas));
// -> true

// With strict flag
console.log(nextBday.isSameMonth(date));
// -> false
console.log(nextBday.isSameMonth(date), false);
// -> true
```

## Upcomming
- [x] Check if day is before given date
- [x] Check if day is after given day
- [x] Check difference between dates
- [ ] Add Calendar view in `Array` format