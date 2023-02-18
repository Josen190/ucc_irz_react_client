import React, { Component, useState } from "react";
import Month from "../Components/Calendar/Month";
import Button from "../Components/basic/Button";
import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";
import User from "./User";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const nextMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() + 1)));
  };
  const prevMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() - 1)));
  };

  return (
    <User>
      <main className="tile calendar">
        <div>
          <h4></h4>
        </div>
        <Month year={date.getFullYear()} numberMonth={date.getMonth()} />
        <div>
          <Button type="button" onClick={prevMonth}>
            Предыдущий
          </Button>
          <Button type="button" onClick={nextMonth}>
            Следующий
          </Button>
        </div>
      </main>
    </User>
  );
};
export default Calendar;
