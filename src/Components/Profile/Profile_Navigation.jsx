import React, { Component } from 'react'
import Button from '../basic/Button'

export default class Profile_Navigation extends Component {
  render() {
    return (
        <div className='content-centr column w-200px'>
            <Button type='link' value='Редактировать профиль' href='/account/edit' color='mini'/>
            <Button type='button' value='Подписаться' color='red' />
        </div>
    )
  }
}
