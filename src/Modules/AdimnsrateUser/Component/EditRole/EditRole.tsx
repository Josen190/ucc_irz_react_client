import useStorageRole from '../../Hooks/useStorageRole'
import InputField from 'UI/InputField/InputField'
import React, { MouseEvent, SetStateAction, useState } from 'react'
import Button from 'UI/Button/Button';

import "./EditRole.scss"
import { useAppDispatch, useAppSelector } from 'Hooks';
import updateRoles from '../../Fetch/updateRoles';

interface Props {
  id: string;
  role: string[];
  setActive: React.Dispatch<SetStateAction<boolean>>;
}

function EditRole({ id, role, setActive }: Props) {
  const myRole = useAppSelector(s => s.authorization.user?.roles)
  const { roleUser, currentRoles } = useStorageRole(role ?? []);

  const save = (event: MouseEvent<HTMLButtonElement>) => {
    updateRoles(id, role, currentRoles);
    return;
  }


  return (
    <div className='modal z-index-20' onClick={() => setActive(false)}>
      <div className='tile' onClick={(e) => e.stopPropagation()}>
        <InputField type='checkbox' value={roleUser.Support.get.isSelected} onSetValue={roleUser.Support.set} title={roleUser.Support.get.name} />
        <InputField type='checkbox' value={roleUser.CabinetsManager.get.isSelected} onSetValue={roleUser.CabinetsManager.set} title={roleUser.CabinetsManager.get.name} />
        {myRole && myRole.indexOf("SuperAdmin") > -1
          && <InputField type='checkbox' value={roleUser.Admin.get.isSelected} onSetValue={roleUser.Admin.set} title={roleUser.Admin.get.name} />}
        <Button type='button' onClick={save}>Сохранить</Button>
      </div>
    </div>
  )
}

export default EditRole