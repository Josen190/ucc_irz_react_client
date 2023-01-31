import React, { Component } from 'react'
import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
// import {Account, Messenger, Calendar, News} from '../Pages'

import Account from '../Pages/Account'
import News from '../Pages/News'
import Messenger from '../Pages/Messenger'
import Calendar from '../Pages/Calendar'
import ButtonMenu from './ButtonMenu';

export default class Menu extends Component {
  render() {
    return (
        <div>
          <ButtonMenu href='/account' value='Личный кабинет' ></ButtonMenu>
          <ButtonMenu href='/news' value='Новости' ></ButtonMenu>
          <ButtonMenu href='/messenger' value='Мессенджер' ></ButtonMenu>
          <ButtonMenu href='/calendar' value='Календарь' ></ButtonMenu>

            <BrowserRouter>
              <Routes>
                <Route path='/account' element={<Account />}/>
                <Route path='/news' element={<News />}/>
                <Route path='/messenger' element={<Messenger />}/>
                <Route path='/calendar' element={<Calendar />}/>
              </Routes>
            </BrowserRouter>
        </div>
    )
  }
}
