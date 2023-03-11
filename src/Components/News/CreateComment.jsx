import React, { useState } from "react";
import { useEffect } from "react";
import API, { url_post_news_comments } from "../../api/Api";
import Button from "../basic/Button";
import InputField from "../basic/InputField";
import { notifyError } from "../Notifications/Notifications";

export default function CreateComment({ newsID }) {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const newNewsComments = (event) => {
    event.preventDefault();
    const data = {
      newsEntryId: newsID,
      text: text,
    };
    API.post(url_post_news_comments, data)
      .then(() => {
        setText("");
        setValue("");
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
