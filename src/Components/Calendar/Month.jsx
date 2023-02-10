import React, { Component, useState } from "react";
import useMeasure from "react-use-measure";
import Day from "./Day";

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
  for (let i = 0; i < 5 * 7; i++) {
    arrDayOfCalendar.push(new Date(indexDay));
    indexDay.setDate(indexDay.getDate() + 1);
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
    console.log(bounds);
    if (isFull && bounds.width < 1050){
      setNameDayWeekFull(nameDayWeekShort);
      isFull = false;
    } else if (!isFull && bounds.width >= 1050){
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
        {/* {console.log(nameDayWeekUse.forEach((value) => {
          <th>{value}</th>;
        }))} */}
        <th>{nameDayWeekUse[0]}</th>
        <th>{nameDayWeekUse[1]}</th>
        <th>{nameDayWeekUse[2]}</th>
        <th>{nameDayWeekUse[3]}</th>
        <th>{nameDayWeekUse[4]}</th>
        <th>{nameDayWeekUse[5]}</th>
        <th>{nameDayWeekUse[6]}</th>
      </tr>
    </thead>
        <tbody className="month-row">
          <tr className="month-column">
            <td>
              <Day day={arrDayOfCalendar[0]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[1]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[2]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[3]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[4]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[5]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[6]} month={numberMonth} />
            </td>
          </tr>
          <tr className="month-column">
            <td>
              <Day day={arrDayOfCalendar[7]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[8]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[9]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[10]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[11]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[12]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[13]} month={numberMonth} />
            </td>
          </tr>
          <tr className="month-column">
            <td>
              <Day day={arrDayOfCalendar[14]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[15]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[16]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[17]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[18]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[19]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[20]} month={numberMonth} />
            </td>
          </tr>
          <tr className="month-column">
            <td>
              <Day day={arrDayOfCalendar[21]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[22]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[23]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[24]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[25]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[26]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[27]} month={numberMonth} />
            </td>
          </tr>
          <tr className="month-column">
            <td>
              <Day day={arrDayOfCalendar[28]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[29]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[30]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[31]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[32]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[33]} month={numberMonth} />
            </td>
            <td>
              <Day day={arrDayOfCalendar[34]} month={numberMonth} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
