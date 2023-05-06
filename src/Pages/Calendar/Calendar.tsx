import React, { useState } from "react";
import "./calendar.scss";
import { Outlet, useNavigate } from "react-router-dom";
import MyDate from "Helpers/MyDate";
import Button from "UI/Button/Button";
import {Month} from "Modules/Calendar";

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
  const [selectedDay, setSelectedDay] = useState<MyDate | null>(null);
  const navigate = useNavigate();


  const nextMonth = () => {
    setDate(new MyDate(date.setMonth(date.getMonth() + 1)));
  };
  const prevMonth = () => {
    setDate(new MyDate(date.setMonth(date.getMonth() - 1)));
  };

  const setEventSelectedDay = (day: MyDate | null) => {
    setSelectedDay(day);
    navigate("./new_event")
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
          <Button type="button" onClick={() => navigate("/calendar/new_event")}>
            Добавить событие
          </Button>
        </div>
      </div>
      <Month
        year={date.getFullYear()}
        numberMonth={date.getMonth()}
        setSelectedDay={setEventSelectedDay}
      />
      <Outlet context={selectedDay} />
    </main>
  );
};
export default Calendar;
