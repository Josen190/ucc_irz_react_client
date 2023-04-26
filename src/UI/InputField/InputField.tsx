import React, { ChangeEventHandler } from "react";
import Textarea from "./Textarea/Textarea";
import MyDate from "Helpers/MyDate";

type s = string | boolean | MyDate;

interface Props<T extends s> {
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
  onSetValue?: React.Dispatch<React.SetStateAction<T>>;
  MyConstructor?: { new (...args: any[]): T };
}

export default function InputField<T extends s>({
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
  onSetValue,
  MyConstructor,
}: Props<T>): JSX.Element {
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
    if (onSetValue) {
      if (MyConstructor && MyConstructor.name === 'MyDate') {
        const myDateConstructor = MyConstructor as { new (...args: any[]): T };
        onSetValue(new myDateConstructor(e.target.value) as T);
      } else {
        onSetValue(e.target.value as T);
      }
    }
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
