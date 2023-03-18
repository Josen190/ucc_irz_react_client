import React, { Component } from "react";
import "../calendar.css";
import EventInDay from "./EventInDay/EventInDay";

export default function Day({ day, month, listEvents }) {
  let today = new Date();
  today.setHours(0, 0, 0, 0);

  let className = "day";

  if (today.getTime() === day.getTime()) {
    className += " today";
  }

  if (day.getMonth() != month) {
    className += " noThisMonth";
  }

  return (
    <div className={className}>
      <span> {day.getDate()}</span>
      <div className="column"> 
        {listEvents.map((event) => {
          return <EventInDay key={event.id} event={event} />;
        })}
      </div>
    </div>
  );
}
