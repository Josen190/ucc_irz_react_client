import React, { Component, useState } from "react";
import Month from "../Components/Calendar/Month/Month";
import Button from "../Components/basic/Button";

const nameMonth = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const nextMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() + 1)));
  };
  const prevMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() - 1)));
  };

  return (
    <main className="tile calendar">
      <div>
        <div className="center row">
          <Button type="button" onClick={prevMonth}>
            {"<"}
          </Button>
          <p>{nameMonth[date.getMonth()]}</p>
          <Button type="button" onClick={nextMonth}>
            {">"}
          </Button>
        </div>
      </div>
      <Month year={date.getFullYear()} numberMonth={date.getMonth()} />
    </main>
  );
};
export default Calendar;
