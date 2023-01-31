import React, { Component } from 'react'
import Personal_Information from '../Components/Personal_Information'
import Tidings from '../Components/Tidings'
import logo from '../logo.svg'

export default class Account extends Component {
  render() {
    return (
      <main>
        <div>
          <div>
            <img src={logo} alt="аватар" />
          </div>
          <div>
            <div>
              <a href='/setting'>Настройки</a>
            </div>
            <div>
              <button>Подписаться</button>
            </div>
          </div>
        </div>
        <div>
          <Personal_Information></Personal_Information>
          <div>
            <Tidings></Tidings>
          </div>
        </div>

      </main>
    )
  }
}
