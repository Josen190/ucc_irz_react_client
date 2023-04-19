import React from "react";
import MenuLink from "../MenuLink/MenuLink";

interface Props{
  children: React.ReactElement<typeof MenuLink> | React.ReactElement<typeof MenuLink>[];
}

export default function Menu({ children }: Props) {
  return <nav className="menu tile">{children}</nav>;
}
