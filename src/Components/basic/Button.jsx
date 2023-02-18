import React, { Component } from "react";
import "./basic.css";
import { Link } from "react-router-dom";

export default class Button extends Component {
  render() {
    let button = null;
    let className =
      "button center color-" +
      (this.props.color !== undefined ? this.props.color : "basic");

    switch (this.props.type) {
      case "button":
        const buttonprops = {
          className: className,
          disabled: this.props.disabled,
          onClick: this.props.onClick,
        };

        button = <button {...buttonprops}>{this.props.children}</button>;
        break;
      case "link":

        button = (
          <div className={className}>
            <Link to={this.props.href}>
              <div className="center">{this.props.children}</div>
              
            </Link>
          </div>
        );
        break;

      case "submit":
        const submitrops = {
          value: this.props.title !== undefined ? this.props.title : "",
          onClick: this.props.onClick,
          id: this.props.id, 
          required: this.props.required,
          disabled: this.props.disabled,
        };

        button = (
          <label className={className}>
            {this.props.children}
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
          (this.props.className !== undefined ? this.props.className : "")
        }
      >
        {button}
      </div>
    );
  }
}
