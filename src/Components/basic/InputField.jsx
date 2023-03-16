import React, { Component } from "react";
import Textarea from "./Textarea";

export default function InputField({
  type,
  title,
  placeholder,
  value,
  maxlength,
  minlength,
  name,
  onChange,
}) {
  const arrType = ["textarea", "text", "password", "email", "date", "time"];

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

  let numderType = arrType.indexOf(type);
  numderType = numderType == -1 ? 0 : numderType;
  let input = null;

  if (numderType == 0) {
    input = <Textarea {...inputprops} rows="2" isresize="true"></Textarea>;
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
