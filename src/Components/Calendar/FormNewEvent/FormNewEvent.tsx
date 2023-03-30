import React, { useContext, useEffect, useState } from "react";
import InputField from "../../basic/InputField";
import Button from "../../basic/Button";
import { authContext } from "../../../api/authentication/authController";
import FormSeachUser from "../../basic/formSearchUser/FormSearchUser";
import API, { url_post_events } from "../../../api/Api";

const FormNewEvent = ({ day, setActive }) => {
  const _day =
    Object.prototype.toString.call(day) === "[object Date]" ? day : null;
  const { authData } = useContext(authContext);
  const role = authData.role;

  const [date, setDate] = useState(_day);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState("");
  const [cabinetId, setCabinetId] = useState("");

  useEffect(() => {
    
    let dateTimeStart = new Date(startTime);
    dateTimeStart.setFullYear(date.getFullYear);
    dateTimeStart.setMonth(date.getMonth);
    dateTimeStart.setDate(date.getDate);
    setStartTime(dateTimeStart);

    let dateTimeEnd = new Date(endTime);
    dateTimeEnd.setFullYear(date.getFullYear);
    dateTimeEnd.setMonth(date.getMonth);
    dateTimeEnd.setDate(date.getDate);
    setEndTime(dateTimeEnd);

  }, [date]);

  const newEvent = (event) => {
    event.preventDefault();

    const data = {
      title: title,
      description: description,
      start: startTime,
      end: endTime,
      isPublic: isPublic,
      cabinetId: cabinetId,
      listenersIds: null,
    };

    // API.post(url_post_events, data);
  };

  return (
    <div
      className="modal"
      onClick={() => {
        setActive(false);
      }}
    >
      <form
        className="column tile"
        onClick={(e) => {
          e.stopPropagation();
        }}
        onSubmit={newEvent}
      >
        <div>
          <InputField
            type="date"
            value={_day.toCustomString()}
            onChange={(event) => {
              setDate(event.target.value);
            }}
          ></InputField>
          <div className="row">
            <span>С</span>
            <InputField
              type="time"
              onChange={(event) => {
                const time = event.target.value.split(":");
                let dateTime = new Date(date);
                dateTime.setHours(time[0], time[1], 0, 0);
                setStartTime(dateTime);
              }}
            ></InputField>
            <span>По</span>
            <InputField
              type="time"
              onChange={(event) => {
                const time = event.target.value.split(":");
                let dateTime = new Date(date);
                dateTime.setHours(time[0], time[1], 0, 0);
                setEndTime(dateTime);
              }}
            ></InputField>
          </div>
          <InputField
            type="text"
            placeholder="Заголовок"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></InputField>
          <InputField
            type="textarea"
            placeholder="Опписание"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></InputField>
          <FormSeachUser></FormSeachUser>
        </div>
        <div>
          <Button type="submit">Сохранить</Button>
        </div>
      </form>
    </div>
  );
};

export default FormNewEvent;
