import React, { Component } from "react";

interface PropsCheckbox{
  title: string
}

export default function Checkbox(props: PropsCheckbox) {
  return (
    <label>
      <input type="checkbox" />
      <p>{props.title}</p>
    </label>
  );
}
