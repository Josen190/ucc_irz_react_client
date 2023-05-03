import User from 'Helpers/User';
import Button from 'UI/Button/Button'
import InputField from 'UI/InputField/InputField'
import React, { MouseEvent, SetStateAction, useState } from 'react'
import EditRole from '../EditRole/EditRole';
import { ConstSuperAdmin } from '../../../../Constatnts/role';
import updateInfo from '../../Fetch/updateInfo';

interface Props {
    setActive: React.Dispatch<SetStateAction<boolean>>;
    user: User;
}

function FormEditInfoUser({ setActive, user }: Props) {
    const [fullName, setFullName] = useState(user.getFullName());
    const [birthday, setBirthday] = useState(user.birthday);

    const [atviveEditRole, setActiveEditRole] = useState(false);

    const isSuperAdmin = user.roles.includes(ConstSuperAdmin.Id);

    const save = () => {
        const fio = fullName.split(" ");
        if (2 > fio.length && fio.length > 3) return;

        updateInfo(user.id, fio, birthday);
    }


    return (
        <div className='modal' onClick={() => setActive(false)}>
            <div className='tile' onClick={(e) => e.stopPropagation()}>
                <InputField type='text' title='ФИО' value={user.getFullName()} onSetValue={setFullName}></InputField>
                <InputField type='date' title='дата рождения' value={user.birthday.toString()} onSetValue={setBirthday}></InputField>
                {!isSuperAdmin && <Button type="button" onClick={() => setActiveEditRole(true)}>Изменить роли</Button>}
                {atviveEditRole && <EditRole id={user.id} role={user.roles} setActive={setActiveEditRole}></EditRole>}
                <Button type="button" onClick={save}>Сохранить</Button>
            </div>
        </div >
    )
}

export default FormEditInfoUser