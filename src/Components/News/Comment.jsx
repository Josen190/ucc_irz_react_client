import React, { Component } from 'react'
import Button from '../basic/Button'
import Content from './Content'

export default class Comment extends Component {
  render() {
    return (
      <div className='tile'>
        <div className='row'>
          <h5>{fio}</h5>
          <Button value="Удалить"/>
        </div>
        <Content></Content>
      </div>
    )
  }
}
