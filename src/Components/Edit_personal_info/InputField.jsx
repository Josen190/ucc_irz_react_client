import React, { Component } from 'react'

function fixTextareaSize(textarea) {
  textarea.style.height = 'auto'
  textarea.style.height = textarea.scrollHeight + 2 + "px"
}

export default class InputField extends Component {
  componentDidMount() {
    let textarea = document.getElementsByTagName('textarea');
    for (let i = 0; i < textarea.length; i++) {
      fixTextareaSize(textarea.item(i));
    }
  }

  render() {
    const arrType = ['textarea', 'text']

    const inputprops = {
      className: '',
      placeholder: this.props.placeholder,
      defaultValue: this.props.value,
      autoComplete: 'off',
      maxLength: this.props.maxlength,
      minLength: this.props.minlength,
      name: this.props.name
    };


    let numderType = -1;
    arrType.forEach((t, index) => {
      if (t == this.props.type) {
        numderType = index;
      }
    });

    numderType = numderType == -1 ? 0 : numderType;
    let input = null;

    if (numderType == 0) {
      input = <textarea {...inputprops} rows='2' onInput={(e) => { fixTextareaSize(e.target) }} ></textarea>
    } else {
      input = <input type={this.props.type} {...inputprops} />
    }

    return (
      <div className='input w-100 mg-buttom-10'>
        <h4>{this.props.title}</h4>
        {input}
      </div>
    )
  }
}
