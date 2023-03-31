import React, { ChangeEventHandler } from "react";

interface PropsCheckbox{
  title: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export default function Checkbox({title, onChange}: PropsCheckbox) {
  return (
    <label>
      <input type="checkbox" />
      <p>{title}</p>
    </label>
  );
}
