import MyDate from "Helpers/MyDate";


export default function showMonth(year: number, numberMonth: number) {
    // получение дня недели для первого дня месяца
    let firstDayOfMonth = new MyDate(year, numberMonth, 1).getDay();
    // 0 - воскресенье, 6 - воскресенье
    firstDayOfMonth = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    const firstDayOfCalendar = new MyDate(year, numberMonth, 1);
    firstDayOfCalendar.setDate(firstDayOfCalendar.getDate() - firstDayOfMonth);
  
    const indexDay = new MyDate(firstDayOfCalendar);
    const arrDayOfCalendar: MyDate[][] = [];
    for (let i = 0; i < 5; i++) {
      arrDayOfCalendar.push([]);
      for (let j = 0; j < 7; j++) {
        arrDayOfCalendar[i].push(new MyDate(indexDay));
        indexDay.setDate(indexDay.getDate() + 1);
      }
    }
    const lastDayOfCalendar = new MyDate(indexDay);
    lastDayOfCalendar.setDate(lastDayOfCalendar.getDate() - 1);
    return { firstDayOfCalendar, lastDayOfCalendar, arrDayOfCalendar };
  }