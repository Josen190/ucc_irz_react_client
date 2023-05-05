import React from "react";
import MyDate from "Helpers/MyDate";
import { useAppSelector } from "Hooks";
import Button from "UI/Button/Button";
import InputField from "UI/InputField/InputField";
import { useContext, useState, useEffect } from "react";
import User from "Helpers/User";
import FormCabinet from "../FormCabinet/FormCabinet";
import Cabinet from "Helpers/Cabinet";
import { ConstCabinetsManager } from "Constatnts/role";
import FormSearchUser from "Modules/FormSearchUser";
import postEvent from "../../Fetch/postEvent";


interface Props {
  day: MyDate | null;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormNewEvent({ day, setActive }: Props): JSX.Element {
  const user = useAppSelector((s) => {
    const paramsUser = s.authorization.user;
    return paramsUser ? new User(paramsUser) : null;
  })

  const [date, setDate] = useState<MyDate | null>(day);
  const [startTime, setStartTime] = useState<MyDate | null>(day);
  const [endTime, setEndTime] = useState<MyDate | null>(day);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [cabinet, setCabinet] = useState<Cabinet | null>(null);
  const [listeners, setListeners] = useState<string[]>([]);

  const [activeFormCabinet, setActiveFormCabinet] = useState(false);

  useEffect(() => {
    if (date) {
      setStartTime(startTime ? startTime.setNewDate(date) : null);
      setEndTime(endTime ? endTime.setNewDate(date) : null);
    }
  }, [date]);

  const newEvent = () => {
    const data = {
      title: title,
      description: description,
      start: startTime,
      end: endTime,
      isPublic: isPublic,
      cabinetId: cabinet ? cabinet.id : null,
      listenersIds: listeners.length > 0? listeners: null,
    };

    postEvent(data).then()
  };

  return (
    <div
      className="modal"
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className="column tile"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div>
          <InputField
            type="date"
            value={day?.DatetoStr("yyyy-mm-dd")}
            onChange={(event) => {
              setDate(new MyDate(event.target.value));
            }}
          ></InputField>
          <div className="row">
            <span>С</span>
            <InputField
              type="time"
              onChange={(event) => {
                if (date)
                  setStartTime(date.setNewTime(event.target.value));
              }}
            ></InputField>
            <span>По</span>
            <InputField
              type="time"
              onChange={(event) => {
                if (date)
                  setEndTime(date.setNewTime(event.target.value));
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
          <InputField type='checkbox' title="Публичное" onSetValue={setIsPublic}></InputField>
          {user?.roles.includes(ConstCabinetsManager.Id) && startTime && endTime &&
            <div>
              <Button type="button" onClick={() => setActiveFormCabinet(true)}>выбрать кабинет</Button>
              <span>кабинет: {cabinet?.name}</span>
            </div>
          }
          {activeFormCabinet && startTime && endTime &&
            <FormCabinet start={startTime} end={endTime} setActive={setActiveFormCabinet} setCabinet={setCabinet} />}
          {!isPublic && <FormSearchUser setSelected={setListeners}></FormSearchUser>}
        </div>
        <div>
          <Button type="button" onClick={() => newEvent()}>Сохранить</Button>
        </div>
      </div>
    </div>
  );
}
