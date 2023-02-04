import React, { Component } from 'react'
import Checkbox from '../Checkbox'
import Textarea from '../basic/Textarea'
import Button from '../Button'

export default class createTidings extends Component {
  render() {
    return (
      <form className='column'>
        <Textarea />
        <Checkbox title='Глобальная новость' />
        <Button type='link' value='Отмена' href='/account'/>
        <Button type='submit' value='Создать'/>
      </form>
    )
  }
}
