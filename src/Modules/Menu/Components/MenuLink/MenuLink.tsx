import React from "react";
import Button from "../../../../UI/Button/Button";

interface Props{
  href: string;
  children: string | JSX.Element;
}

export default function MenuLink({ href, children }: Props) {
  return (
    <Button type="link" href={href} color="mini">
      {children}
    </Button>
  );
}
