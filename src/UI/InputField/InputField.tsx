import React, { ChangeEventHandler } from "react";
import Textarea from "./Textarea/Textarea";

interface Props {
  type:
    | "textarea"
    | "text"
    | "password"
    | "email"
    | "date"
    | "time"
    | "checkbox";
  title?: string;
  id?: string;
  placeholder?: string;
  value?: string;
  maxlength?: number;
  minlength?: number;
  name?: string;
  rows?: number;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export default function InputField({
  type,
  id,
  title,
  placeholder,
  value,
  maxlength,
  minlength,
  name,
  rows,
  required,
  onChange,
}: Props): JSX.Element {
  const inputprops = {
    className: "",
    id: id,
    placeholder: placeholder,
    defaultValue: value,
    autoComplete: "off",
    maxLength: maxlength,
    minLength: minlength,
    name: name,
    onChange: onChange,
  };

  let input: JSX.Element = <></>;

  if (type === "textarea") {
    input = <Textarea {...inputprops} rows={rows ?? 2} isresize={true} />;
  } else {
    input = <input type={type} {...inputprops} required={required ?? false} />;
  }

  return (
    <label className="input w-100 mg-buttom-10 column ">
      {title && <h4>{title}</h4>}
      {input}
    </label>
  );
}
