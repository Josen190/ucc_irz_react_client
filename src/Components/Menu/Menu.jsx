import React, { Component } from 'react'
import Button from '../basic/Button'

export default class Menu extends Component {
  render() {
    return (
      <nav className='menu tile'>
        <Button type='link' href='/account' value='Личный кабинет' ></Button>
        <Button type='link' href='/news' value='Новости' ></Button>
        <Button type='link' href='/messenger' value='Мессенджер' ></Button>
        <Button type='link' href='/calendar' value='Календарь' ></Button>

      </nav>
    )
  }
}
