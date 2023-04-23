import Event from "Helpers/Event";
import React, { SetStateAction } from "react";

import "./eventInDay.scss";
import { ParamsOpenEvent } from "../Month/Month";

interface Props {
  event: Event;
  setActive: React.Dispatch<SetStateAction<ParamsOpenEvent>>;
}

function EventInDay({ event, setActive }: Props) {
  return (
    <div className="event-prev" onClick={() => setActive({
      isActive: true,
      event
    })}>
      <span>{event.start.DatetoStr("hh:mm")}</span>
      <p>{event.title}</p>
    </div>
  );
}

export default EventInDay;
