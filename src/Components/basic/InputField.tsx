import React, { ChangeEventHandler } from "react";
import Textarea from "./Textarea";

interface Props {
  type: "textarea" | "text" | "password" | "email" | "date" | "time" | "checkbox";
  title?: string;
  placeholder?: string;
  value?: string;
  maxlength?: number;
  minlength?: number;
  name?: string;
  rows?: number;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export default function InputField({
  type,
  title,
  placeholder,
  value,
  maxlength,
  minlength,
  name,
  rows,
  onChange,
}: Props): JSX.Element {
  const inputprops = {
    className: "",
    placeholder: placeholder,
    defaultValue: value,
    autoComplete: "off",
    maxLength: maxlength,
    minLength: minlength,
    name: name,
    onChange: onChange,
  };


  let input = null;

  if (type === "textarea") {
    input = <Textarea {...inputprops} rows={rows ?? 2} isresize />;
  } else {
    input = <input type={type} {...inputprops} />;
  }

  return (
    <label className="input w-100 mg-buttom-10 column ">
      {title && <h4>{title}</h4>}
      {input}
    </label>
  );
}
