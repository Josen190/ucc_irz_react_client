import React, { Component } from "react";
import logo from "../../logo.svg";

export default function Profile_Picture({ type }) {
  return (
    <div className={"logo " + type}>
      <img src={logo} alt="аватар" />
    </div>
  );
}
