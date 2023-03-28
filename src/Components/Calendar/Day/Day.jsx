import React, { Component } from "react";
import "../calendar.css";
import EventInDay from "./EventInDay/EventInDay";
import MyDate from "../../../class/MyDate";

export default function Day({ day, month, listEvents, activeContextMenu }) {
  let today = new MyDate();
  today.setHours(0, 0, 0, 0);

  let className = "day column";

  if (today.getTime() === day.getTime()) {
    className += " today";
  }

  if (day.getMonth() != month) {
    className += " noThisMonth";
  }

  

  return (
    <div className={className} onContextMenu={(e) => activeContextMenu(e, day)} onContextMenuCapture={null}>
      <span> {day.getDate()}</span>
      <div className="column"> 
        {listEvents.map((event) => {
          return <EventInDay key={event.id} event={event} />;
        })}
      </div>
    </div>
  );
}
