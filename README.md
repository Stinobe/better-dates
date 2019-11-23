# Better Dates

The __Better Dates__ packages provides a `Class` which is an extentions of the JavaScript `Date` class. All the `get` and `set` methods from the `Date` class can be accessed as property instead of a function.

There are other JavaScript Date libraries out there, but most of them have a lot of functionallity which I don't need in my projects, making my projects heavier than it actually needs to be.

That's why I created this package with some basic functionallities I tend to need most when using a Date library. Requests for building complex logic into this package will therefore not be accepted.

## Accessing existing methods
You can still access existing methods from the `Date` class as you would do before, but you can acces them as property as well.

```javascript
import BetterDate from "@stino/better-dates"
// I tend to import the package as BD instead of BetterDate

const date = new Date(87, 9, 14, 11);
// Mon Sep 14 1987 11:00:00 GMT+0200 (CEST)

const betterDate = new BetterDate(87, 9, 14, 11);
// Mon Sep 14 1987 11:00:00 GMT+0200 (CEST)
```
Accessing information from the instances:
```javascript
console.log(date.getMonth());
// -> 8

console.log(betterDate.month)
// -> 8
```
Setting information on the instances
```javascript
// Set month to March on Date instance
date.setMonth(2);

// Set month to March on BetterDate instance
betterDate.month = 2;

console.log(date);
// Sat Mar 14 1987 11:00:00 GMT+0100 (CET)

console.log(betterDate)
// Sat Mar 14 1987 11:00:00 GMT+0100 (CET)
```
> GMT differs because of DST

## New properties

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