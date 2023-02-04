import React, { Component } from 'react'

export default class Textarea extends Component {
  render() {
    return (
      <textarea name={this.props.name} cols={this.props.cols} rows={this.props.rows}></textarea>
    )
  }
}
