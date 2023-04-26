import API from 'Fetch/Api';
import MyDate from 'Helpers/MyDate';
import User from 'Helpers/User';
import Button from 'UI/Button/Button'
import InputField from 'UI/InputField/InputField'
import React, { FormEvent, SetStateAction, useState } from 'react'

interface Props {
    setActive: React.Dispatch<SetStateAction<boolean>>;
    user: User;
}

function FormEditInfoUser({ setActive, user }: Props) {
    const [fullName, setFullName] = useState(user.getFullName());
    const [birthday, setBirthday] = useState(user.birthday);
    const [role, setRole] = useState(user.roles);


    const save = (event: FormEvent<HTMLFormElement>) => {
        const fio = fullName.split(" ");
        if (2 > fio.length && fio.length > 3) return;

      
    }
    return (
        <div className='modal' onClick={() => setActive(false)}>
            <form className='tile' onClick={(e) => e.stopPropagation()} onSubmit={save}>
                <InputField type='text' title='ФИО' onSetValue={setFullName}></InputField>
                <InputField type='date' title='дата рождения' onSetValue={setBirthday}></InputField>
                {/* <InputField type='text' ></InputField> */}
                <Button type="submit">Сохранить</Button>
            </form>
        </div>
    )
}

export default FormEditInfoUser