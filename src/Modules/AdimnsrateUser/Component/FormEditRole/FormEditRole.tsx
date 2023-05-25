import useStorageRole from '../../Hooks/useStorageRole'
import InputField from 'UI/InputField/InputField'
import React from 'react'
import Button from 'UI/Button/Button';

import "./EditRole.scss"
import { useAppSelector } from 'Hooks';
import updateRoles from '../../Fetch/updateRoles';
import { ConstSuperAdmin } from 'Constatnts/role';
import {useNavigate, useOutletContext} from "react-router-dom";
import User from "Helpers/User";
import {notifySuccess} from "../../../../Components/Notifications/Notifications";


function FormEditRole() {
  const myRole = useAppSelector(s => s.authorization.user?.roles)
  if (!myRole) return <></>;


  const user = useOutletContext<User>()
  const navigation = useNavigate();
  const { roleUser, currentRoles } = useStorageRole(user.roles);

  const save = () => {
    updateRoles(user.id, user.roles, currentRoles).then(() => {
      notifySuccess("Инхормация изменена")
      navigation("../")
    });
    return;
  }

  const isSupAdmin = user.roles.includes(ConstSuperAdmin.Id) && !myRole.includes(ConstSuperAdmin.Id);

  return (
    <div className='modal z-index-20' onClick={() => navigation("../")}>
      <div className='tile' onClick={(e) => e.stopPropagation()}>
        <InputField type='checkbox' defaultValue={roleUser.Support.get.isSelected} onSetValue={roleUser.Support.set} title={roleUser.Support.get.name} />
        <InputField type='checkbox' defaultValue={roleUser.CabinetsManager.get.isSelected} onSetValue={roleUser.CabinetsManager.set} title={roleUser.CabinetsManager.get.name} />
        {myRole && myRole.indexOf("SuperAdmin") > -1
          && <InputField type='checkbox' defaultValue={roleUser.Admin.get.isSelected} onSetValue={roleUser.Admin.set} title={roleUser.Admin.get.name} />}
        {!isSupAdmin && <Button type='button' onClick={save}>Сохранить</Button>}
        {isSupAdmin && <p>Вы не можете редактировать роли суперадминистратора</p>}
      </div>
    </div>
  )
}

export default FormEditRole