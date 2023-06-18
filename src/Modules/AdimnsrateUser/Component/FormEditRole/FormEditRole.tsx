import useStorageRole from '../../Hooks/useStorageRole'
import React from 'react'
import "./EditRole.scss"
import updateRoles from '../../Fetch/updateRoles';
import {useNavigate, useOutletContext} from "react-router-dom";
import User from "Helpers/User";
import {notifySuccess} from "../../../../Components/Notifications/Notifications";
import {ModalForm} from "UI/Form";
import { InputCheckbox } from 'UI/Input';


function FormEditRole() {
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

  return (
    <ModalForm title={"Сохранить"} confirm={save}>
        <InputCheckbox 
          defaultChecked={roleUser.Support.get.isSelected} 
          onSetValue={roleUser.Support.set} 
          title={roleUser.Support.get.name} />
        <InputCheckbox 
          defaultChecked={roleUser.CabinetsManager.get.isSelected} 
          onSetValue={roleUser.CabinetsManager.set} 
          title={roleUser.CabinetsManager.get.name} />
    </ModalForm>
  )
}

export default FormEditRole