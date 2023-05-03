import React, { useEffect } from 'react'
import Personal_Information from '../Information/ProfileInformation'
import Profile_Navigation from '../Navigation/Profile_Navigation'
import Profile_Picture from '../../../../Components/Avatar/Avatar'
import User from 'Helpers/User';
import Image from 'Helpers/Image';

import { useAppDispatch } from 'Hooks';
import { setUserImage } from 'Modules/AuthController';

import "./UserCard.scss"
import getImage from 'Fetch/getImage';

interface Props{
    user: User;
    isLogin: boolean;
}


function UserCard({user, isLogin}: Props) {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    if (!user.image) return;

    getImage(user.image.id).then(image => {
      dispatch(setUserImage({image}));
    })
  }, [])

  return (
    <div className="tile UserCard">
        <div className="">
          <Profile_Picture type="norm" image={user.image ?? new Image()}></Profile_Picture>
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