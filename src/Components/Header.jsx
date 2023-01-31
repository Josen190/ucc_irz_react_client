import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <header>
          <div class='content-centr'>
            <h1>IRZ</h1>
          </div>
          <div class='content-centr'>
            <input type='search'></input>
          </div>
        </header>
    )
  }
}
