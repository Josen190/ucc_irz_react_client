import React, { MouseEventHandler } from "react";
import "./basic.css";
import { Link } from "react-router-dom";

interface PropsButton {
  type: "button" | "link" | "submit";
  title?: string;
  color?: "basic" | "red" | "mini";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: any;
  href?: string;
  id?: string;
  required?: boolean;
  className?: string;
}

export default function Button(props: PropsButton) {
  let button: JSX.Element;
  let classNames = `button center color-${props.color ?? "basic"}`;

  switch (props.type) {
    case "button":
      const buttonprops = {
        className: classNames,
        disabled: props.disabled ?? false,
        onClick: props.onClick,
      };

      button = <button {...buttonprops}>{props.children}</button>;
      break;
    case "link":
      button = (
        <div className={classNames}>
          <Link to={props.href ?? ""}>
            <div className="center">{props.children}</div>
          </Link>
        </div>
      );
      break;

    case "submit":
      const submitrops = {
        value: props.title !== undefined ? props.title : "",
        onClick: props.onClick,
        id: props.id ?? "",
        required: props.required ?? false,
        disabled: props.disabled ?? false,
      };

      button = (
        <label className={classNames}>
          {props.children}
          <input type="submit" {...submitrops} />
        </label>
      );
      break;

    default:
      break;
  }

  return (
    <div className={`button-contener center ${props.className ?? ""}`}>
      {button}
    </div>
  );
}
