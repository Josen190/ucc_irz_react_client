import React from "react";
import Button from "../../../../UI/Button/Button";

interface Props{
  children: string | JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLInputElement | HTMLAnchorElement>
}

function ContextButton({ children, onClick }: Props) {
  return (
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  );
}

export default ContextButton;
