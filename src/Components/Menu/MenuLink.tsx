import React, { Component } from "react";
import Button from "../basic/Button";

export default function MenuLink({ href, children }) {
  return (
    <Button type="link" href={href} className="mg-5-0" color="mini">
      {children}
    </Button>
  );
}