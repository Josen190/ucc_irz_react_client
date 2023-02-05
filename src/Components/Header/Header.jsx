import React, { Component } from 'react'
import Search from '../basic/Search'

export default class Header extends Component {
  render() {
    return (
        <header>
          <div className='content-centr'>
            <h1>IRZ</h1>
          </div>
          <Search></Search>
        </header>
    )
  }
}
