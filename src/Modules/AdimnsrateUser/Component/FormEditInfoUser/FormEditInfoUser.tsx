import User from 'Helpers/User';
import Button from 'UI/Button/Button'
import InputField from 'UI/InputField/InputField'
import React, { useState } from 'react'
import updateInfo from '../../Fetch/updateInfo';
import MyDate from 'Helpers/MyDate';
import {useNavigate, useOutletContext} from "react-router-dom";


function FormEditInfoUser() {

    const user = useOutletContext<User>()
    const navigation = useNavigate();

    const [firstNamem, setFirstName] = useState(user.firstName);
    const [surname, setSurname] = useState(user.surname);
    const [patronymic, setPatronymic] = useState(user.patronymic);
    const [birthday, setBirthday] = useState(user.birthday);

    // const [atviveEditRole, setActiveEditRole] = useState(false);



    const save = () => {
        const fio = [firstNamem, surname];
        if (patronymic.length > 0) fio.push(patronymic);
        
        updateInfo(user.id, fio, birthday);
    }


    return (
        <div className='modal' onClick={() => navigation("../")}>
            <div className='tile' onClick={(e) => e.stopPropagation()}>
                <InputField type='text' placeholder='Фамилия' defaultValue={firstNamem} onSetValue={setFirstName}></InputField>
                <InputField type='text' placeholder='Имя' defaultValue={surname} onSetValue={setSurname}></InputField>
                <InputField type='text' placeholder='Отчество' defaultValue={patronymic} onSetValue={setPatronymic}></InputField>
                <InputField type='date' title='дата рождения' defaultValue={user.birthday.toString()} onSetValue={setBirthday} MyConstructor={MyDate} ></InputField>


                <Button type="button" onClick={save}>Сохранить</Button>
            </div>
        </div >
    )
}

export default FormEditInfoUser