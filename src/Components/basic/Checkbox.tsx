import React, { Component } from "react";

export default function Checkbox({title}) {
  return (
    <label>
      <input type="checkbox" />
      <p>{title}</p>
    </label>
  );
}
