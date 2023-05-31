import React from "react";
import { Link } from "react-router-dom";
import {Path} from "@remix-run/router/history";
import InputButton from "./InputButton";
import * as C from "./Button.c"

interface PropsButton extends React.HTMLProps<HTMLInputElement>{
  type: "button" | "link" | "submit";
  stale?: "basic" | "link";
  view?: "basic" | "red" | "gray" | "red-reverse";
  children?: string | JSX.Element | JSX.Element[];
  to?: string | Partial<Path>,
}

export default function Button({
                                 type,
                                 stale = "basic",
                                 view = "basic",
                                 children,
                                 to,
                                 ...rest
                               }: PropsButton) {

  let button: JSX.Element | null = null;

  switch (type) {
    case "link":
      button = (
          <Link to={to ?? ""}>
              <InputButton type="button">
                  {children}
              </InputButton>
          </Link>
      );
      break;

    case "button":
      switch (stale) {
        case "basic":
          button = <InputButton type={type}>
              {children}
          </InputButton>
          break;
        case "link":
          button = (
              <a
                  role="button"
                  {...rest as React.HTMLProps<HTMLAnchorElement>}
              >
                {children}
              </a>
          );
          break;
      }
      break;

    case "submit":
      button = (
          <InputButton type={type}>
              {children}
          </InputButton>
      );
      break;

    default:
      button = <div />;
      break;
  }

  return <C.StyledButtonContainer view={view}>
      {button}
  </C.StyledButtonContainer>;
}
