import React, { Component } from 'react'

export default class ButtonMenu extends Component {
  render() {
    return (
        <div className='button'>
            <a href={this.props.href}>{this.props.value}</a>
        </div>
    )
  }
}

