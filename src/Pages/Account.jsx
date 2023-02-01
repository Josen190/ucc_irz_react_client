import React, { Component } from 'react'
import Personal_Information from '../Components/Profile/Personal_Information'
import Profile_Navigation from '../Components/Profile/Profile_Navigation'
import Profile_Picture from '../Components/Profile/Profile_Picture'
import Tidings from '../Components/News/Tidings'


export default class Account extends Component {
  render() {
    return (
      <main className='grid-col-2'>
        <div className='mg-0-5 tile'>
          <Profile_Picture type='norm'></Profile_Picture>
          <Profile_Navigation></Profile_Navigation>
        </div>
        <div className='mg-0-5 main-feed'>
          <Personal_Information></Personal_Information>
          <div>
            <Tidings></Tidings>
          </div>
        </div>

      </main>
    )
  }
}
