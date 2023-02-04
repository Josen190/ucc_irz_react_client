import React, { Component } from 'react'
import Personal_Information from '../Components/Profile/Personal_Information'
import Profile_Navigation from '../Components/Profile/Profile_Navigation'
import Profile_Picture from '../Components/Profile/Profile_Picture'
import Tidings from '../Components/News/Tidings'
import Button from '../Components/Button'


export default class Account extends Component {
  render() {
    return (
      <main className='grid-col-2'>
        <div className='tile'>
          <Profile_Picture type='norm'></Profile_Picture>
          <Profile_Navigation ></Profile_Navigation>
        </div>
        <div className='main-feed'>
          <Personal_Information></Personal_Information>
          <div>
            <div className='tile'>
              <Button type='button' value='Создать новость' />
            </div>
            <Tidings></Tidings>
          </div>
        </div>

      </main>
    )
  }
}
