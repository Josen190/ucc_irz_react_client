import authContext, { IAuthContext } from "Modules/AuthController/Constants/MyContext/MyContexts";
import MyDate from "Helpers/MyDate";
import Button from "UI/Button/Button";
import InputField from "UI/InputField/InputField";
import { useContext, useState, useEffect } from "react";


interface Props {
  day: MyDate | null;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormNewEvent({ day, setActive }: Props): JSX.Element {
  const { authData } = useContext(authContext) as IAuthContext;
  const role = authData.user?.roles;

  const [date, setDate] = useState<MyDate | null>(day);
  const [startTime, setStartTime] = useState<MyDate | null>(day);
  const [endTime, setEndTime] = useState<MyDate | null>(day);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [cabinetId, setCabinetId] = useState<number | null>(null);

  useEffect(() => {
    if (date) {
      setStartTime(startTime ? startTime.parseDate(date) : null);
      setEndTime(endTime ? endTime.parseDate(date) : null);
    }

  }, [date]);

  const newEvent = (event: React.FormEvent<HTMLFormElement>) => {
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
                  setStartTime(date.parseTime(event.target.value));
              }}
            ></InputField>
            <span>По</span>
            <InputField
              type="time"
              onChange={(event) => {
                if (date)
                  setEndTime(date.parseTime(event.target.value));
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
          {/* <FormSeachUser></FormSeachUser> */}
        </div>
        <div>
          <Button type="submit">Сохранить</Button>
        </div>
      </form>
    </div>
  );
}
