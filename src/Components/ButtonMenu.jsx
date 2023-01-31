import React, { Component } from 'react'

export default class ButtonMenu extends Component {
  render() {
    return (
        <div>
            <a href={this.props.href}>{this.props.value}</a>
        </div>
    )
  }
}

