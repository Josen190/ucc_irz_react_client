import React, { Component } from 'react'

export default class Profile_Navigation extends Component {
  render() {
    return (
        <div className='content-centr column'>
            <div>
                <a href='/account/edit'>Редактировать профиль</a>
            </div>
            <button>Подписаться</button>
        </div>
    )
  }
}
