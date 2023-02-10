import React, { Component, useState } from "react";
import Month from "../Components/Calendar/Month";
import Button from "../Components/basic/Button";
import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const nextMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() + 1)));
  };
  const prevMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() - 1)));
  };

  console.log(date);

  return (
    <div className="scroll-fix parts-2-page">
      <Header></Header>
      <div className="mg-10-auto grid-col-2 ">
        <Menu></Menu>
        <main className="tile calendar">
          <Month year={date.getFullYear()} numberMonth={date.getMonth()} />
          <div>
            <Button type="button" onClick={prevMonth} value="Предыдущий" />
            <Button type="button" onClick={nextMonth} value="Следующий" />
          </div>
        </main>
      </div>
    </div>
  );
};
export default Calendar;
