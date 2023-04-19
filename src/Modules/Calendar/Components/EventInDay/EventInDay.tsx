import Event from "Helpers/Event";
import React from "react";
interface Props{
  event: Event;
}

function EventInDay({ event }: Props) {
  return (
    <div>
      <p>{event.title}</p>
    </div>
  );
}

export default EventInDay;
