import React, { ChangeEventHandler } from "react";
import Textarea from "./Textarea";

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
    id: id ?? null,
    placeholder: placeholder ?? null,
    defaultValue: value ?? null,
    autoComplete: "off",
    maxLength: maxlength ?? null,
    minLength: minlength ?? null,
    name: name ?? null,
    onChange: onChange ?? null,
  };

  let input: JSX.Element;

  if (type === "textarea") {
    input = <Textarea {...inputprops} rows={rows ?? 2} isresize />;
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
