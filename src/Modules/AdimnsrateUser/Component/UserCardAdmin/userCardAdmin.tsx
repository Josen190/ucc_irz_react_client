import React, { useState } from 'react'
import Profile_Picture from '../../../../Components/Avatar/Avatar'
import Employee from 'Helpers/Employee';
import Image from 'Helpers/Image';

import "./UserCardAdmin.scss"
import Button from 'UI/Button/Button';
import UserInformation from '../UserInfomation/UserInformation';
import FormEditInfoUser from '../FormEditInfoUser/FormEditInfoUser';
import { useAppSelector } from 'Hooks';
import useGetUser from '../../Hooks/useGetUser';


function UserCard() {
    const user = useAppSelector((s) => {
        const ParamsUser = s.userAdministration.user;
        return ParamsUser ? new Employee(ParamsUser) : null;
    })
    const [isActive, setActive] = useState(false);

    useGetUser(user ? user.id : null);

    return (
        <div className="tile">
            <div className='UserCard'>
                <Profile_Picture type="norm" image={user && user.image ? user.image : new Image()} />
                <UserInformation user={user} />
            </div>
            <Button type='button' onClick={() => setActive(true)}>Редактировать</Button>
            {isActive && user && <FormEditInfoUser user={user} setActive={setActive}></FormEditInfoUser>}
        </div>
    )
}

export default UserCard