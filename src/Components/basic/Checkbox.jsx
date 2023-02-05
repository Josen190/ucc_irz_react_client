import React, { Component } from "react";

export default class Checkbox extends Component {
  render() {
    return (
      <label>
        <input type="checkbox" />
        <p>{this.props.title}</p>
      </label>
    );
  }
}
