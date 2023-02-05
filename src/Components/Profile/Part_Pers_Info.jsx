import React, { Component } from "react";

export default class Part_Pers_Info extends Component {
  render() {
    return (
      <span>
        <h5>{this.props.title}: </h5>
        <p>{this.props.value}</p>
      </span>
    );
  }
}
