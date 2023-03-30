import React, { Component } from "react";
import Button from "../basic/Button";
import MenuLink from "./MenuLink";

export default function Menu({ children }) {
  return <nav className="menu tile">{children}</nav>;
}
