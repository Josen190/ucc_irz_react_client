import React, { Component } from "react";
import "./basic.css";
import { Link } from "react-router-dom";

export default function Button ({type, title, color, disabled, onClick, children, href, id, required, className}) {
    let button = null;
    let classNames =
      "button center color-" +
      (color !== undefined ? color : "basic");

    switch (type) {
      case "button":
        const buttonprops = {
          className: classNames,
          disabled: disabled,
          onClick: onClick,
        };

        button = <button {...buttonprops}>{children}</button>;
        break;
      case "link":

        button = (
          <div className={classNames}>
            <Link to={href}>
              <div className="center">{children}</div>
              
            </Link>
          </div>
        );
        break;

      case "submit":
        const submitrops = {
          value: title !== undefined ? title : "",
          onClick: onClick,
          id: id, 
          required: required,
          disabled: disabled,
        };

        button = (
          <label className={classNames}>
            {children}
            <input type="submit" {...submitrops} />
          </label>
        );
        break;

      default:
        break;
    }

    return (
      <div
        className={
          "button-contener center " +
          (className !== undefined ? className : "")
        }
      >
        {button}
      </div>
    );
  }
