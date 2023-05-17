import React from 'react'
import Profile_Picture from '../../../../Components/Avatar/Avatar'
import Image from 'Helpers/Image';

import "./UserCardAdmin.scss"
import Button from 'UI/Button/Button';
import UserInformation from '../UserInfomation/UserInformation';
import useGetUser from '../../Hooks/useGetUser';
import {ConstSuperAdmin} from "../../../../Constatnts/role";
import {Outlet, useNavigate} from "react-router-dom";
import {useParams} from "react-router";


function UserCard() {
    const {userId} = useParams<{userId: string}>()
    const navigation = useNavigate();
    if (!userId){

        navigation("/admin/staff");
        return <></>
    }
    const user = useGetUser(userId);

    if (!user){
        navigation("/admin/staff");
        return <></>
    }

    const isSuperAdmin = user.roles.includes(ConstSuperAdmin.Id);

    return (
        <div className="UserCard-admin">
            <div className='info-user'>
                <Profile_Picture type="norm" image={user && user.image ? user.image : new Image()} />
                <UserInformation user={user} />
            </div>
            <div className="button-opportunities">
                <Button type='button' onClick={() => navigation("./edit_info")}>Редактировать</Button>
                <Button type='button' onClick={() => navigation("./edit_position")}>Изменить должность</Button>
                {!isSuperAdmin && <Button type="button" onClick={() => navigation("./edit_role")}>Изменить роли</Button>}
            </div>


            <Outlet context={user}/>
        </div>
    )
}

export default UserCard