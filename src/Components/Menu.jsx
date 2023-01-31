import React, { Component } from 'react'
import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
// import {Account, Messenger, Calendar, News} from '../Pages'

import Account from '../Pages/Account'
import News from '../Pages/News'
import Messenger from '../Pages/Messenger'
import Calendar from '../Pages/Calendar'

export default class Menu extends Component {
  render() {
    return (
        <div>
            <div>
                <a href='/account'>Личный кабинет</a>
            </div>
            <div>
                <a href='/news'>Новости</a>
            </div>
            <div>
                <a href='/messenger'>Мессенджер</a>
            </div>
            <div>
                <a href='/calendar'>Календарь</a>
            </div>
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
