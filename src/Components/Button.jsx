import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <button disabled={this.props.disabled = true} className={this.props.className}>{this.props.value}</button>
    )
  }
}
