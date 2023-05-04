import useStorageRole from '../../Hooks/useStorageRole'
import InputField from 'UI/InputField/InputField'
import React, { MouseEvent, SetStateAction, useState } from 'react'
import Button from 'UI/Button/Button';

import "./EditRole.scss"
import { useAppDispatch, useAppSelector } from 'Hooks';
import updateRoles from '../../Fetch/updateRoles';
import { ConstSuperAdmin } from 'Constatnts/role';

interface Props {
  userId: string;
  oldRole: string[];
  setActive: React.Dispatch<SetStateAction<boolean>>;
}

function FormEditRole({ userId, oldRole, setActive }: Props) {
  const myRole = useAppSelector(s => s.authorization.user?.roles)
  if (!myRole) return <></>;
  const { roleUser, currentRoles } = useStorageRole(oldRole);

  const save = (event: MouseEvent<HTMLButtonElement>) => {
    updateRoles(userId, oldRole, currentRoles);
    return;
  }

  const isSupAdmin = oldRole.includes(ConstSuperAdmin.Id) && !myRole.includes(ConstSuperAdmin.Id);

  return (
    <div className='modal z-index-20' onClick={() => setActive(false)}>
      <div className='tile' onClick={(e) => e.stopPropagation()}>
        <InputField type='checkbox' value={roleUser.Support.get.isSelected} onSetValue={roleUser.Support.set} title={roleUser.Support.get.name} />
        <InputField type='checkbox' value={roleUser.CabinetsManager.get.isSelected} onSetValue={roleUser.CabinetsManager.set} title={roleUser.CabinetsManager.get.name} />
        {myRole && myRole.indexOf("SuperAdmin") > -1
          && <InputField type='checkbox' value={roleUser.Admin.get.isSelected} onSetValue={roleUser.Admin.set} title={roleUser.Admin.get.name} />}
        {!isSupAdmin && <Button type='button' onClick={save}>Сохранить</Button>}
        {isSupAdmin && <p>Вы не можете редактировать роли суперадминистратора</p>}
      </div>
    </div>
  )
}

export default FormEditRole