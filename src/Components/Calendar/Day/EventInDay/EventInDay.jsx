import React from "react";

function EventInDay({ event }) {
  return (
    <div>
      <p>{event.title}</p>
      <span>{event.start}</span>
      <span>{event.end}</span>
    </div>
  );
}

export default EventInDay;
