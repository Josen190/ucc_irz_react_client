import React from "react";
import MyDate from "Helpers/MyDate";
import { useAppSelector } from "Hooks";
import { useState, useEffect } from "react";
import User from "Helpers/User";
import FormCabinet from "../FormCabinet/FormCabinet";
import Cabinet from "Helpers/Cabinet";
import { ConstCabinetsManager } from "Constatnts/role";
import FormSearchUser from "Modules/FormSearchUser";
import postEvent from "../../Fetch/postEvent";
import {useNavigate, useOutletContext} from "react-router-dom";
import "./FormNewEvent.scss"
import {ModalForm} from "UI/Form";
import { InputCheckbox, InputDate, InputText } from "UI/Input";
import { Button } from "UI/Button";

export default function FormNewEvent(): JSX.Element {
  const navigate = useNavigate();
  const day = useOutletContext() as MyDate | null;

  const user = useAppSelector((s) => {
    const paramsUser = s.authorization.user;
    return paramsUser ? new User(paramsUser) : null;
  });

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
      listenersIds: listeners.length > 0 ? listeners : null,
    };

    postEvent(data).then();
  };

  return (
    <ModalForm title={"Создать"} confirm={newEvent}>
        <div>
          <InputDate
            defaultValue={day?.DatetoStr("yyyy-mm-dd")}
            onChange={(event) => {
              setDate(new MyDate(event.target.value));
            }}
          />
          <div className="row">
            <span>С</span>
            <InputDate
              onChange={(event) => {
                if (date) setStartTime(date.setNewTime(event.target.value));
              }}
            ></InputDate>
            <span>По</span>
            <InputDate
              onChange={(event) => {
                if (date) setEndTime(date.setNewTime(event.target.value));
              }}
            ></InputDate>
          </div>
          <InputText
            placeholder="Заголовок"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></InputText>
          <textarea
            placeholder="Опписание"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></textarea>
          <InputCheckbox
            title="Публичное"
            onSetValue={setIsPublic}
          />
          {user?.roles.includes(ConstCabinetsManager.Id) &&
            startTime &&
            endTime && (
              <div>
                <Button
                  type="button"
                  onClick={() => setActiveFormCabinet(true)}
                >
                  выбрать кабинет
                </Button>
                <span>кабинет: {cabinet?.name}</span>
              </div>
            )}
          {activeFormCabinet && startTime && endTime && (
            <FormCabinet
              start={startTime}
              end={endTime}
              setActive={setActiveFormCabinet}
              setCabinet={setCabinet}
            />
          )}
          {!isPublic && (
            <FormSearchUser setSelected={setListeners}></FormSearchUser>
          )}
        </div>
    </ModalForm>
  );
}
