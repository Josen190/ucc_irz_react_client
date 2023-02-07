import React, { Component } from 'react'
import Button from '../basic/Button'
import Search from '../basic/Search'

export default class Header extends Component {
  render() {
    let isauth = this.props.isauth != undefined ? this.props.isauth : false;
    return (
        <header>
          <div className='content-centr'>
            <h1>IRZ</h1>
          </div>
          <Search></Search>
          {!isauth && <Button type='link' href='/auth' value='Войти'/>}

        </header>
    )
  }
}
