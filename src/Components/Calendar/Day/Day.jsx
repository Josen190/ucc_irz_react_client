import React, { Component } from "react";
import "../calendar.css";

export default function Day({ day, month }) {
  let today = new Date();
  today.setHours(0, 0, 0, 0);

  let className = "day";

  if (today.getTime() === day.getTime()) {
    className += " today";
  }

  if (day.getMonth() != month) {
    className += " noThisMonth";
  }

  return <div className={className}>{day.getDate()}</div>;
}
