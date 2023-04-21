import React, { useState } from "react";
import newNewsComments from "../../Fetch/newNewsComments";
import Button from "UI/Button/Button";
import InputField from "UI/InputField/InputField";
import NewsComments from "Helpers/NewsComments";

interface Props {
  newsID: string;
  update: (coment: NewsComments) => void;
}

export default function CreateComment({ newsID, update }: Props) {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");


  return (
    <form className="tile colume" onSubmit={(e) => {
      e.preventDefault();
      newNewsComments(newsID, text).then((_comment) => {
        setText("");
        setValue("");
        update(_comment);
      })
      
    }}>
      <InputField
        type="textarea"
        value={value}
        onSetValueStr={setText}
      />
      <Button type="submit">Добавть</Button>
    </form>
  );
}
