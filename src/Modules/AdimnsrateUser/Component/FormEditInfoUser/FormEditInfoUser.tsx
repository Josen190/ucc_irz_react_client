import API from 'Fetch/Api';
import MyDate from 'Helpers/MyDate';
import User from 'Helpers/User';
import Button from 'UI/Button/Button'
import InputField from 'UI/InputField/InputField'
import React, { MouseEvent, SetStateAction, useState } from 'react'
import EditRole from '../EditRole/EditRole';
import { useAppSelector } from 'Hooks';
import { ConstSuperAdmin } from '../../Constatnts/role';

interface Props {
    setActive: React.Dispatch<SetStateAction<boolean>>;
    user: User;
}

function FormEditInfoUser({ setActive, user }: Props) {
    const [fullName, setFullName] = useState(user.getFullName());
    const [birthday, setBirthday] = useState(user.birthday);

    const [atviveEditRole, setActiveEditRole] = useState(false);

    const isSuperAdmin = user.roles.includes(ConstSuperAdmin.Id);

    const save = (event: MouseEvent<HTMLButtonElement>) => {
        // event.preventDefault()

        const fio = fullName.split(" ");
        if (2 > fio.length && fio.length > 3) return;


    }


    return (
        <div className='modal' onClick={() => setActive(false)}>
            <div className='tile' onClick={(e) => e.stopPropagation()}>
                <InputField type='text' title='ФИО' onSetValue={setFullName}></InputField>
                <InputField type='date' title='дата рождения' onSetValue={setBirthday}></InputField>
                {!isSuperAdmin && <Button type="button" onClick={() => setActiveEditRole(true)}>Изменить роли</Button>}
                {atviveEditRole && <EditRole id={user.id} role={user.roles} setActive={setActiveEditRole}></EditRole>}
                <Button type="button" onClick={save}>Сохранить</Button>
            </div>
        </div >
    )
}

export default FormEditInfoUser