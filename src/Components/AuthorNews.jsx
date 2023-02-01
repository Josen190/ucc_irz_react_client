import React, { Component } from 'react'
import Profile_Picture from '../Components/Profile/Profile_Picture'

export default class AuthorNews extends Component {
  render() {
    let nameAuthorNews = 'Захаров Вячеслав Сергеевич';

    return (
        <a href='/account' className='row'>
            <Profile_Picture type='mini'></Profile_Picture>
            <h4>{nameAuthorNews}</h4>
        </a>
    )
  }
}
