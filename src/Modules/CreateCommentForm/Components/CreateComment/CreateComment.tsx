import React, { useState } from "react";
import newNewsComments from "Modules/CreateCommentForm/Fetch/newNewsComments";
import Button from "UI/Button/Button";
import InputField from "UI/InputField/InputField";

interface Props {
  newsID: string;
}

export default function CreateComment({ newsID }: Props) {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");


  return (
    <form className="tile colume" onSubmit={(e) => {
      e.preventDefault();
      newNewsComments(newsID, text).then(() => {
        setText("");
        setValue("");
      })
      
    }}>
      <InputField
        type="textarea"
        value={value}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit">Добавть</Button>
    </form>
  );
}
