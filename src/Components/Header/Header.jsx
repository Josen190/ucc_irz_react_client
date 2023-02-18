import React, { Component } from 'react'
import Button from '../basic/Button'
import Search from '../basic/Search'

export default class Header extends Component {
  render() {
    let isLogin = this.props.islogin != undefined ? this.props.islogin : false;
    return (
        <header>
          <div className='content-centr'>
            <h1>IRZ</h1>
          </div>
          {isLogin && <Search></Search>}
          {!isLogin && <Button type='link' href='/login'>Войти</Button>}

        </header>
    )
  }
}
