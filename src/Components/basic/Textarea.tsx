import React, { Component, createRef } from "react";

function fixTextareaSize(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + 2 + "px";
}

export default class Textarea extends Component {
  textareaRef = createRef(null);

  componentDidMount() {
    const textarea = this.textareaRef.current;

    fixTextareaSize(textarea);
  }


  render() {

    const funOnInput = (this.props.isresize == 'true'
    ? (e) => {
        fixTextareaSize(e.target);
      }
    : undefined);

    const textarea = (
      <textarea
        {...this.props}
        ref = {this.textareaRef}
        // className={this.props.className}
        // name={this.props.name}
        // cols={this.props.cols}
        // rows={this.props.rows}
        // placeholder = {this.props.placeholder}
        // defaultValue = {this.props.value}
        // autoComplete = {this.props.autoComplete}
        // maxLength = {this.props.maxlength}
        // minLength = {this.props.minlength}
        onInput={funOnInput}
      ></textarea>
    );


    return textarea;
  }
}
