import React, { Component } from 'react'
import Button from '../basic/Button'

export default class MenuLink extends Component {
  render() {
    return (
      <Button type="link" href={this.props.href} className='mg-5-0' color='mini'>{this.props.children}</Button>
    )
  }
}
