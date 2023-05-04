import User from 'Helpers/User';
import Button from 'UI/Button/Button'
import InputField from 'UI/InputField/InputField'
import React, { SetStateAction, useState } from 'react'
import FormEditRole from '../FormEditRole/FormEditRole';
import { ConstSuperAdmin } from '../../../../Constatnts/role';
import updateInfo from '../../Fetch/updateInfo';
import MyDate from 'Helpers/MyDate';

interface Props {
    setActive: React.Dispatch<SetStateAction<boolean>>;
    user: User;
}

function FormEditInfoUser({ setActive, user }: Props) {
    const [firstNamem, setFirstName] = useState(user.firstName);
    const [surname, setSurname] = useState(user.surname);
    const [patronymic, setPatronymic] = useState(user.patronymic);
    const [birthday, setBirthday] = useState(user.birthday);

    const [atviveEditRole, setActiveEditRole] = useState(false);

    const isSuperAdmin = user.roles.includes(ConstSuperAdmin.Id);

    const save = () => {
        const fio = [firstNamem, surname];
        if (patronymic.length > 0) fio.push(patronymic);
        
        updateInfo(user.id, fio, birthday);
    }


    return (
        <div className='modal' onClick={() => setActive(false)}>
            <div className='tile' onClick={(e) => e.stopPropagation()}>
                <InputField type='text' placeholder='Фамилия' value={firstNamem} onSetValue={setFirstName}></InputField>
                <InputField type='text' placeholder='Имя' value={surname} onSetValue={setSurname}></InputField>
                <InputField type='text' placeholder='Отчество' value={patronymic} onSetValue={setPatronymic}></InputField>
                <InputField type='date' title='дата рождения' value={user.birthday.toString()} onSetValue={setBirthday} MyConstructor={MyDate} ></InputField>
                {!isSuperAdmin && <Button type="button" onClick={() => setActiveEditRole(true)}>Изменить роли</Button>}
                {atviveEditRole && <FormEditRole userId={user.id} oldRole={user.roles} setActive={setActiveEditRole}></FormEditRole>}
                <Button type="button" onClick={save}>Сохранить</Button>
            </div>
        </div >
    )
}

export default FormEditInfoUser