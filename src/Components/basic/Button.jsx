import React, { Component } from "react";
import "./basic.css";

export default class Button extends Component {
  render() {
    let button = null;
    let className =
      "button center color-" +
      (this.props.color != undefined ? this.props.color : "basic");

    switch (this.props.type) {
      case "button":
        const buttonprops = {
          className: className,
          disabled: this.props.disabled,
          onClick: this.props.onClick,
        };

        button = <button {...buttonprops}>{this.props.value}</button>;
        break;
      case "link":
        const linkprops = {
          href: this.props.href,
        };

        button = (
          <div className={className}>
            <a {...linkprops}>
              <div  className="center">{this.props.value}</div>
              
            </a>
          </div>
        );
        break;

      case "submit":
        const submitrops = {
          value: this.props.title != undefined ? this.props.title : "",
        };

        button = (
          <label className={className}>
            {this.props.value}
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
          (this.props.className != undefined ? this.props.className : "")
        }
      >
        {button}
      </div>
    );
  }
}
