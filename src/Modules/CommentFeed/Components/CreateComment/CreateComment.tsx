import { Button } from "UI/Button";
import React, { useState } from "react";

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
      <textarea
        defaultValue={text}
        // onSetValue={setText}
      />
      <Button type="submit">Добавть</Button>
    </form>
  );
}
