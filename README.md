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
// -> 9

console.log(betterDate.month)
// -> 9
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