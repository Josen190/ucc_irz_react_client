import React, { Component, useState } from "react";
import useMeasure from "react-use-measure";
import Day from "../Day/Day";

//numberMonth - нумерация месецев начинается с 0 - январь ...
function showMonth(year, numberMonth) {
  //получение дня недели для первого дня месеца
  let firstDayOfMonth = new Date(year, numberMonth, 1).getDay();
  //0 - восрресенье в 6 - восткресенье
  firstDayOfMonth = firstDayOfMonth == 0 ? 6 : firstDayOfMonth - 1;
  let firstDayOfCalendar = new Date(year, numberMonth, 1);
  firstDayOfCalendar.setDate(firstDayOfCalendar.getDate() - firstDayOfMonth);

  let indexDay = new Date(firstDayOfCalendar);
  let arrDayOfCalendar = [];
  for (let i = 0; i < 5; i++) {
    arrDayOfCalendar.push([]);
    for (let j = 0; j < 7; j++) {
      arrDayOfCalendar[i].push(new Date(indexDay));
      indexDay.setDate(indexDay.getDate() + 1);
    }
  }

  return arrDayOfCalendar;
}

export default function Month({ year, numberMonth }) {
  let nameDayWeekFull = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятьница",
    "Субота",
    "Воскресенье",
  ];
  let nameDayWeekShort = ["Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб.", "Вс."];
  const [nameDayWeekUse, setNameDayWeekFull] = useState(nameDayWeekShort);
  const [ref, bounds] = useMeasure();
  let isFull = false;

  let arrDayOfCalendar = showMonth(year, numberMonth);

  function onWidth(bounds) {
    if (isFull && bounds.width < 1050) {
      setNameDayWeekFull(nameDayWeekShort);
      isFull = false;
    } else if (!isFull && bounds.width >= 1050) {
      setNameDayWeekFull(nameDayWeekFull);
      isFull = false;
    }
  }

  onWidth(bounds);

  return (
    <div className="month">
      <table>
        <thead>
          <tr ref={ref} className="month-column">
            {nameDayWeekUse.map((e, i) => (
              <th key={i}>{e}</th>
            ))}
          </tr>
        </thead>
        <tbody className="month-row">
          {arrDayOfCalendar.map((week, indexWeek) => (
            <tr key={indexWeek} className="month-column">
              {week.map((day, indexDay) => (
                <td key={indexDay}>
                  <Day day={day} month={numberMonth} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
