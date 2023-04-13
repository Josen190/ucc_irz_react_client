import React from "react";

interface Props{
  children: JSX.Element | JSX.Element[];
}

export default function Menu({ children }: Props) {
  return <nav className="menu tile">{children}</nav>;
}
