import React, { Component, useState } from "react";
import Month from "../../Modules/Calendar/Components/Month/Month";
import Button from "../../UI/Button/Button";
import FormNewEvent from "../../Modules/Calendar/Components/FormNewEvent/FormNewEvent";
import MyDate from "../../Helpers/MyDate";

import "./calendar.scss";

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
  const [date, setDate] = useState(new MyDate());
  const [active, setActive] = useState(false);
  const [selectedDay, setSelectedDay] = useState<MyDate | null>(null);

  const nextMonth = () => {
    setDate(new MyDate(date.setMonth(date.getMonth() + 1)));
  };
  const prevMonth = () => {
    setDate(new MyDate(date.setMonth(date.getMonth() - 1)));
  };

  const setEventSelectedDay = (day: MyDate | null) => {
    setSelectedDay(day);
    setActive(true);
  };

  return (
    <main className="tile calendar">
      <div>
        <div className="row">
          <div className="row">
            <Button type="button" onClick={prevMonth}>
              {"<"}
            </Button>
            <div className="row">
              <span>{nameMonth[date.getMonth()]}</span>
              <span>{date.getFullYear()}</span>
            </div>
            <Button type="button" onClick={nextMonth}>
              {">"}
            </Button>
          </div>
          <Button type="button" onClick={() => setActive(true)}>
            Добавить событие
          </Button>
        </div>
      </div>
      <Month
        year={date.getFullYear()}
        numberMonth={date.getMonth()}
        setSelectedDay={setEventSelectedDay}
      />
      {active && <FormNewEvent day={selectedDay ?? null} setActive={setActive} />}
    </main>
  );
};
export default Calendar;
