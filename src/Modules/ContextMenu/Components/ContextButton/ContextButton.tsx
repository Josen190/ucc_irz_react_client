import React from "react";
import Button from "../../../../UI/Button/Button";
import { OnClickHandler } from "Types/types";




interface Props{
  children: string | JSX.Element;
  onClick?: OnClickHandler
}

function ContextButton({ children, onClick }: Props) {
  return (
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  );
}

export default ContextButton;
