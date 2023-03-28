import React, { useContext, useState } from "react";
import InputField from "../../basic/InputField";
import Button from "../../basic/Button";
import { authContext } from "../../../api/authentication/authController";
import FormSeachUser from '../../basic/formSearchUser/FormSearchUser'


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

  const newEvent = (event) => {
    event.preventDefault();
  }

  return (
    <div className="modal"
    onClick={() => {
      setActive(false);
    }}>
      <form className="column tile"
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
          <FormSeachUser></FormSeachUser>
        </div>
        <div>
          <Button type="submit">Сохранить</Button>
        </div>
      </form>
    </div>
  );
}

export default FormNewEvent;
