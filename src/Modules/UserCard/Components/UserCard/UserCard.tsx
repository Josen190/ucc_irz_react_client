import React from 'react'
import Personal_Information from '../Information/ProfileInformation'
import Profile_Navigation from '../Navigation/Profile_Navigation'
import Profile_Picture from '../../../../Components/Avatar/Avatar'
import User from 'Helpers/User';
import Image from 'Helpers/Image';

interface Props{
    user: User | null;
    isLogin: boolean;
}


function UserCard({user, isLogin}: Props) {
  return (
    <div className="tile UserCard">
        <div className="">
          <Profile_Picture type="norm" image={user ? user.image : new Image()}></Profile_Picture>
          <Profile_Navigation
            isLogin={isLogin}
            userID={user ? user.id : null}
            isSubcribe={user ? user.isSubscription : null}
          ></Profile_Navigation>
        </div>
        <Personal_Information
          user={user}
        ></Personal_Information>
      </div>
  )
}

export default UserCard