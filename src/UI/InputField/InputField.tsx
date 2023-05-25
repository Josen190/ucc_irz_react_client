import React, {ChangeEventHandler, FocusEventHandler} from "react";
import Textarea from "./Textarea/Textarea";
import MyDate from "Helpers/MyDate";

import "./InputField.scss"

type s = string | boolean | MyDate | undefined;

interface Props<T extends s> {
  MyConstructor?: { new(...args: unknown[]): T };
  id?: string;
  maxlength?: number;
  minlength?: number;
  name?: string;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onEnter?: () => void;
  onSetValue?: React.Dispatch<React.SetStateAction<T>> | ((value: T) => void);
  placeholder?: string;
  required?: boolean;
  rows?: number;
  title?: string;
  type:
      | "textarea"
      | "text"
      | "password"
      | "email"
      | "date"
      | "time"
      | "checkbox";
  defaultValue?: string | boolean;
  Value?: string | boolean;
}

export default function InputField<T extends s>({
  type,
  id,
  title,
  placeholder,
  defaultValue,
  Value,
  maxlength,
  minlength,
  name,
  rows,
  required,
  onChange,
  onFocus,
  onBlur,
  onSetValue,
  MyConstructor,
                                                  onEnter
}: Props<T>): JSX.Element {

  let input: JSX.Element;

  const _onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onSetValue) {
      if (MyConstructor && MyConstructor.name === 'MyDate') {
        const myDateConstructor = MyConstructor as { new(...args: unknown[]): T };
        onSetValue(new myDateConstructor(e.target.value) as T);
      } else {
        if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox')
          onSetValue(e.target.checked as T);
        else
          onSetValue(e.target.value as T);
      }
    }
    if (onChange) onChange(e);

  };

  const _onKeyUp = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if(e.key === "Enter" && onEnter) {
      onEnter();
    }
  }

  const inputProps = {
    className: "",
    id: id,
    placeholder: placeholder,
    autoComplete: "off",
    maxLength: maxlength,
    minLength: minlength,
    name: name,
    onChange: _onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    onKeyUp: _onKeyUp,
  };

  switch (type) {
    case "textarea": {
      const _propsTextarea = {
        ...inputProps,
        value: Value as string,
        isresize: true,
        rows: rows ?? 2,
      }
      input = <Textarea {..._propsTextarea} />;
      break;
    }

    case "checkbox": {
      const _propsCheckbox = {
        ...inputProps,
        defaultChecked: defaultValue as boolean,
        checked: Value as boolean,
        required: required ?? false,
      }
      input = <input type={type} {..._propsCheckbox}/>;
      break;
    }

    default: {
      const _propsDefault = {
        ...inputProps,
        defaultValue: defaultValue as string,
        value: Value as string,
        required: required ?? false,
      }
      input = <input type={type} {..._propsDefault}/>;
      break;
    }

  }

  return (
    <label className={`input ${type === "checkbox" ? "checkbox" : ""}`}>
      {title && <h4 className={"title"}>{title}</h4>}
      {input}
    </label>
  );
}
