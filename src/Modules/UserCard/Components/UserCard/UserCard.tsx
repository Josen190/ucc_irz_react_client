import React, { useEffect } from 'react'
import PersonalInformation from '../Information/ProfileInformation'
import ProfileNavigation from '../Navigation/ProfileNavigation'
import ProfilePicture from '../../../../Components/Avatar/Avatar'
import User from 'Helpers/User';
import Image from 'Helpers/Image';

import { useAppDispatch } from 'Hooks';
import { setUserImage } from 'Modules/AuthController';

import "./UserCard.scss"
import getImage from 'Fetch/getImage';

interface Props{
    user: User;
    isMyProfile: boolean;
}


function UserCard({user, isMyProfile}: Props) {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    if (!user.image) return;

    getImage(user.image.id).then(image => {
      dispatch(setUserImage({image}));
    })
  }, [])

  return (
    <div className="tile UserCard">
        <div className="nav">
          <ProfilePicture type="norm" image={user.image ?? new Image()} />
          <ProfileNavigation
            isLogin={isMyProfile}
            userID={user ? user.id : null}
            isSubcribe={user ? user.isSubscription : null}
          />
        </div>
        <PersonalInformation user={user} />
      </div>
  )
}

export default UserCard