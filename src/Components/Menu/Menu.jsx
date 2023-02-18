import React, { Component } from "react";
import Button from "../basic/Button";
import MenuLink from "./MenuLink";

export default class Menu extends Component {
  render() {
    return <nav className="menu tile">{this.props.children}</nav>;
  }
}
