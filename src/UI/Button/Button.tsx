import React, { MouseEventHandler } from "react";
import "./button.scss";
import { Link } from "react-router-dom";

interface PropsButton {
  type: "button" | "link" | "submit";
  stale?: "basic" | "link";
  title?: string;
  color?: "basic" | "red" | "mini";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLInputElement | HTMLAnchorElement>;
  children?: string | JSX.Element;
  href?: string;
  id?: string;
  required?: boolean;
}

export default function Button({
  type,
  stale = "basic",
  title,
  color,
  disabled,
  onClick,
  children,
  href,
  id,
  required,
}: PropsButton) {
  let button: JSX.Element | null = null;
  const classNames = `button color-${color ?? "basic"}`;

  const buttonprops = {
    className: classNames,
    disabled: disabled ?? false,
    onClick: onClick,
  };

  const submitProps = {
    value: title ?? "",
    onClick: onClick as MouseEventHandler<HTMLInputElement> | undefined,
    id: id ?? "",
    required: required ?? false,
    disabled: disabled ?? false,
    
  };

  switch (type) {
    case "button":
      switch(stale){
        case "basic":
          button = <button {...buttonprops}>{children}</button>;
          break;
        case "link":
          button = <a role="button" {...buttonprops}>{children}</a>;
          break;
      }
     

    case "link":
      button = (
        <div className={classNames}>
          <Link to={href ?? ""}>
            <div className="center">{children}</div>
          </Link>
        </div>
      );
      break;

    case "submit":
      button = (
        <label className={classNames}>
          {children}
          <input type={"submit"} {...submitProps} />
        </label>
      );
      break;

    default:
      button = <div />;
      break;
  }

  return <div className={`button-container`}>{button}</div>;
}
