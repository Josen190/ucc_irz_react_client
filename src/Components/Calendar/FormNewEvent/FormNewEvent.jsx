import React, {useState} from "react";
import InputField from "../../basic/InputField";
import Button from "../../basic/Button";

function FormNewEvent({ day }) {
  const _day =
    Object.prototype.toString.call(day) === "[object Date]" ? day : null;

    const [date, setDate] = useState(_day);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

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
        <InputField type="time"></InputField>
        <InputField type="time"></InputField>
        <InputField type="text"></InputField>
        <InputField type="textarea"></InputField>
      </div>
      <div>
        <Button type="submit">Сохранить</Button>
      </div>
    </form>
  );
}

export default FormNewEvent;
