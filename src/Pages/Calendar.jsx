import React, { Component, useState } from "react";
import Month from "../Components/Calendar/Month/Month";
import Button from "../Components/basic/Button";

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
        <div className="row">
          <Button type="button" onClick={prevMonth}>
            {"<"}
          </Button>
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
