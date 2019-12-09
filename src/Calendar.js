import BetterDate from './index';

const calendar = (date, fdow = 1) => {
  if (!(date instanceof BetterDate)) date = new BetterDate(date);

  const firstDayOfMonth = remapDayOfWeek(date.startOfMonth.getDay(), fdow);

  let count = 1;

  const month = new Array();
  for (let w = 0; w < 6; w++) {
    const week = new Array();

    if (count <= date.daysInMonth) {


      for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        if (w === 0 && dayOfWeek < firstDayOfMonth) {
          const day = ((dayOfWeek + 1) - firstDayOfMonth);
          week.push(new BetterDate(date.year, date.month, day));
        } else {
          week.push(new BetterDate(date.year, date.month, count));
          count++;
        }
      }

      month.push(week);
    }
  }
  return month;
};

const remapDayOfWeek = (dayOfWeek, firstDayOfWeek) => {
  const mappedDOW = dayOfWeek - firstDayOfWeek;
  return mappedDOW > -1 ? mappedDOW : 7 + mappedDOW;
};

export default calendar;