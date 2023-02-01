import React, { Component } from 'react'

// import {Account, Messenger, Calendar, News} from '../Pages'


import ButtonMenu from './ButtonMenu';

export default class Menu extends Component {
  render() {
    return (
        <nav className='menu tile'>
          <ButtonMenu href='/account' value='Личный кабинет' ></ButtonMenu>
          <ButtonMenu href='/news' value='Новости' ></ButtonMenu>
          <ButtonMenu href='/messenger' value='Мессенджер' ></ButtonMenu>
          <ButtonMenu href='/calendar' value='Календарь' ></ButtonMenu>
        </nav>
    )
  }
}
