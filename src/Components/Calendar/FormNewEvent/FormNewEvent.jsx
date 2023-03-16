import React, { useContext, useState } from "react";
import InputField from "../../basic/InputField";
import Button from "../../basic/Button";
import authContext from '../../../api/authentication/authController'

function FormNewEvent({ day }) {
  const _day =
    Object.prototype.toString.call(day) === "[object Date]" ? day : null;

  const {authData} = useContext(authContext)

  const role = authData.role;
  

  const [date, setDate] = useState(_day);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState("");
  const [cabinetId, setCabinetId] = useState("");

  return (
    <form>
      <div>
        <InputField
          type="date"
          value={_day}
          onChange={(event) => {
            setDate(event.target.value);
          }}
        ></InputField>
        <div className="row">
          <span>С</span>
          <InputField
            type="time"
            onChange={(event) => {
              setStartTime(event.target.value);
            }}
          ></InputField>
          <span>По</span>
          <InputField
            type="time"
            onChange={(event) => {
              setEndTime(event.target.value);
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
      </div>
      <div>
        <Button type="submit">Сохранить</Button>
      </div>
    </form>
  );
}

export default FormNewEvent;
