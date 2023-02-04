import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    

    



    let button = null;
    switch (this.props.type){
      case 'button':
        const buttonprops = {
          className:'' + ' ' + this.props.className,
          disabled: this.props.disabled,
          onClick: this.props.onClick,
        }

        button = <button {...buttonprops}>{this.props.value}</button>;
      break;
      case 'link':
        const linkprops = {
          href: this.props.href,
          className:'' + ' ' + this.props.className,
        }

        button = <a {...linkprops}>{this.props.value}</a>
      break;

      default:
        break;
    }





    return (
      <div>
        {button}
      </div>
      
    )
  }
}
