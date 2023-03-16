import React, { Component, useState } from "react";
import Month from "../Components/Calendar/Month/Month";
import Button from "../Components/basic/Button";
import FormNewEvent from "../Components/Calendar/FormNewEvent/FormNewEvent";

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
  const [active, setActive] = useState(new Date());

  const nextMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() + 1)));
  };
  const prevMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() - 1)));
  };

  const newEvent = () => {
    
  }


  return (
    <main className="tile calendar">
      <div>
        <div className="row">
          <div className="row">
          <Button type="button" onClick={prevMonth}>
            {"<"}
          </Button>
          <span>{nameMonth[date.getMonth()]}</span>
          <Button type="button" onClick={nextMonth}>
            {">"}
          </Button>
          </div>
          <Button type="button" onClick={() => setActive(true)}>
            Добавить событие
          </Button>
        </div>
      </div>
      <Month year={date.getFullYear()} numberMonth={date.getMonth()} />
      {active && <FormNewEvent />}
    </main>
  );
};
export default Calendar;
