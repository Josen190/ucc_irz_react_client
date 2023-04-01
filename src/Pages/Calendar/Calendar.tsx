import React, { Component, useState } from "react";
import Month from "../../Components/Calendar/Month/Month";
import Button from "../../Components/Button/Button";
import FormNewEvent from "../../Components/Calendar/Day/EventInDay/FormNewEvent/FormNewEvent";
import MyDate from "../../Helpers/MyDate";

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
  const [selectedDay, setSelectedDay] = useState(null);

  const nextMonth = () => {
    setDate(new MyDate(date.setMonth(date.getMonth() + 1)));
  };
  const prevMonth = () => {
    setDate(new MyDate(date.setMonth(date.getMonth() - 1)));
  };

  const setEventSelectedDay = (day) => {
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
      {active && <FormNewEvent day={selectedDay} setActive={setActive} />}
    </main>
  );
};
export default Calendar;
