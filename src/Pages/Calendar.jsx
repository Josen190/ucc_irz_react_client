import React, { Component, useState } from "react";
import Month from "../Components/Calendar/Month";
import Button from "../Components/basic/Button";

const Calendar = () => {
  
  const [date, setDate] = useState(new Date());


  const nextMonth = () =>{
    setDate(new Date(date.setMonth(date.getMonth() + 1)));
  }
  const prevMonth = () =>{
    setDate(new Date(date.setMonth(date.getMonth() - 1)));
  }

  console.log(date);

  return (
    <main className="tile scroll-fix">
      <Month year={date.getFullYear()} numberMonth={date.getMonth()} />
      <div>
        <Button type='button' onClick={prevMonth} value='Предыдущий'/>
        <Button type='button' onClick={nextMonth} value='Следующий'/>
      </div>
    </main>
  );
};
export default Calendar;
