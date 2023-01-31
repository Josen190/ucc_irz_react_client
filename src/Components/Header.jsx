import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <header>
          <div className='content-centr'>
            <h1>IRZ</h1>
          </div>
          <div className='content-centr'>
            <input type='search'></input>
          </div>
        </header>
    )
  }
}
