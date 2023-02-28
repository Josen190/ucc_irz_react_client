import React, { Component } from "react";
import Textarea from "./Textarea";



export default class InputField extends Component {
  render() {
    const arrType = ["textarea", "text", 'password', 'email'];
    
    const inputprops = {
      className: "",
      placeholder: this.props.placeholder,
      defaultValue: this.props.value,
      autoComplete: "off",
      maxLength: this.props.maxlength,
      minLength: this.props.minlength,
      name: this.props.name,
      onChange: this.props.onChange,
    };

    let numderType = arrType.indexOf(this.props.type);
    numderType = numderType == -1 ? 0 : numderType;
    let input = null;

    if (numderType == 0) {
      input = (
        <Textarea
          {...inputprops}
          rows="2"
          isresize='true'
        ></Textarea>
      );
    } else {
      input = <input type={this.props.type} {...inputprops}  />;
    }

    return (
      <label className="input w-100 mg-buttom-10 column ">
        {this.props.title && <h4>{this.props.title}</h4>}
        {input}
      </label>
    );
  }
}
