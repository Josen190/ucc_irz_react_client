import React, { useState } from "react";
import API from "../../../../Fetch/Api";
import Button from "../../../Button/Button";
import InputField from "../../../InputField/InputField";
import { notifyError } from "../../../Notifications/Notifications";

export default function CreateComment({ newsID }) {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const newNewsComments = (event) => {
    event.preventDefault();
    API.postComment(newsID, text)
      .then(() => {
        setText("");
        setValue("");
        notifyError("Комментарий создан");
      })
      .catch(() => {
        notifyError("Ощибка, попробуйте снова");
      });
  };

  return (
    <form className="tile colume" onSubmit={(e) => newNewsComments(e)}>
      <InputField
        type="textarea"
        value={value}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit">Добавть</Button>
    </form>
  );
}
