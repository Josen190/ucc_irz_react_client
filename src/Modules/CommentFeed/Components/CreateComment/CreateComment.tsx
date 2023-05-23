import React, { useState } from "react";
import Button from "UI/Button/Button";
import InputField from "UI/InputField/InputField";

interface Props {
  addComment: (text: string) => Promise<void>;
}

export default function CreateComment({ addComment }: Props) {
  const [text, setText] = useState("");

  return (
    <form className="tile colume" onSubmit={(e) => {
      e.preventDefault();
      addComment(text).then(() => setText(""));
    }}>
      <InputField
        type="textarea"
        defaultValue={text}
        onSetValue={setText}
      />
      <Button type="submit">Добавть</Button>
    </form>
  );
}
