import React, { ChangeEventHandler } from "react";
import Textarea from "./Textarea/Textarea";
import MyDate from "Helpers/MyDate";

import "./InputField.scss"

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
  value?: string | boolean;
  maxlength?: number;
  minlength?: number;
  name?: string;
  rows?: number;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onSetValue?: React.Dispatch<React.SetStateAction<T | undefined>> | ((value: T | undefined) => void);
  MyConstructor?: { new(...args: any[]): T };
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

  let input: JSX.Element = <></>;

  const _onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onSetValue) {
      if (MyConstructor && MyConstructor.name === 'MyDate') {
        const myDateConstructor = MyConstructor as { new(...args: any[]): T };
        onSetValue(new myDateConstructor(e.target.value) as T);
      } else {
        if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox')
          onSetValue(e.target.checked as T);
        else
          onSetValue(e.target.value.length > 0 ? e.target.value as T : undefined);
      }
    }
    if (onChange) onChange(e);
  };

  const inputprops = {
    className: "",
    id: id,
    placeholder: placeholder,
    autoComplete: "off",
    maxLength: maxlength,
    minLength: minlength,
    name: name,
    onChange: _onChange,
  };

  switch (type) {
    case "textarea": {
      const _propsTextarea = {
        ...inputprops,
        value: value as string,
        isresize: true,
        rows: rows ?? 2,
      }
      input = <Textarea {..._propsTextarea} />;
      break;
    }

    case "checkbox": {
      const _propsCheckbox = {
        ...inputprops,
        defaultChecked: value as boolean,
        required: required ?? false,
      }
      input = <input type={type} {..._propsCheckbox} />;
      break;
    }

    default: {
      const _propsDefault = {
        ...inputprops,
        defaultValue: value as string,
        required: required ?? false,
      }
      input = <input type={type} {..._propsDefault} />;
      break;
    }

  }

  return (
    <label className="input">
      {title && <h4>{title}</h4>}
      {input}
    </label>
  );
}
