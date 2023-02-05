import React, { Component } from 'react'
import Button from '../basic/Button'
import Textarea from '../basic/Textarea'

export default class CreateComment extends Component {
  render() {
    return (
      <div className='tile colume'>
        <Textarea />
        <Button type='submit' value='Добавть' />
      </div>
    )
  }
}
