import React, { Component } from 'react'
import Button from '../basic/Button'

export default function Profile_Navigation ({isLogin}){
    return (
        <div className='content-centr column w-200px'>
            {isLogin && <Button type='link' href='/edit' color='mini'>Редактировать профиль</Button>}
            {!isLogin &&<Button type='button' color='red' >Подписаться</Button>}
        </div>
    )
  
}
