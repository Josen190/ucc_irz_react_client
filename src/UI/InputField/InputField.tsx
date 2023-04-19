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
  onSetValueStr?: React.Dispatch<React.SetStateAction<string>>;
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
  onSetValueStr,
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
  };

  let input: JSX.Element = <></>;

  const _onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onSetValueStr) onSetValueStr(e.target.value);
    if (onChange) onChange(e);
  };


  if (type === "textarea") {
    input = <Textarea {...inputprops} rows={rows ?? 2} isresize={true} onChange={_onChange} />;
  } else {
    input = <input type={type} {...inputprops} required={required ?? false} onChange={_onChange} />;
  }

  return (
    <label className="input w-100 mg-buttom-10 column ">
      {title && <h4>{title}</h4>}
      {input}
    </label>
  );
}
