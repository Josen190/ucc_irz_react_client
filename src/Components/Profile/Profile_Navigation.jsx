import React, { Component } from 'react'
import Button from '../basic/Button'

export default class Profile_Navigation extends Component {
  render() {
    return (
        <div className='content-centr column w-200px'>
            <Button type='link' href='/account/edit' color='mini'>Редактировать профиль</Button>
            <Button type='button' color='red' >Подписаться</Button>
        </div>
    )
  }
}
