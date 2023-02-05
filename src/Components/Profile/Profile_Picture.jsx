import React, { Component } from "react";
import logo from "../../logo.svg";

export default class Profile_Picture extends Component {
  render() {
    return (
      <div className={"logo " + this.props.type}>
        <img src={logo} alt="аватар" />
      </div>
    );
  }
}
