import Event from "Helpers/Event";
import React from "react";

import "./eventInDay.scss";
import {useNavigate} from "react-router-dom";

interface Props {
  event: Event;
}

function EventInDay({ event }: Props) {
    const navigate = useNavigate()
  return (
    <div className="event-prev" onClick={() => navigate("./event/" + event.id)}>
      <span>{event.start.DatetoStr("hh:mm")}</span>
      <p>{event.title}</p>
    </div>
  );
}

export default EventInDay;
