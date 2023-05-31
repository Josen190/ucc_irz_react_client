import User from 'Helpers/User';
import InputField from 'UI/InputField/InputField'
import React, { useState } from 'react'
import updateInfo from '../../Fetch/updateInfo';
import MyDate from 'Helpers/MyDate';
import {useNavigate, useOutletContext} from "react-router-dom";
import {notifySuccess} from "../../../../Components/Notifications/Notifications";
import {ModalForm} from "UI/Modal";


function FormEditInfoUser() {

    const user = useOutletContext<User>()
    const navigation = useNavigate();

    const [firstNamem, setFirstName] = useState(user.firstName);
    const [surname, setSurname] = useState(user.surname);
    const [patronymic, setPatronymic] = useState(user.patronymic);
    const [birthday, setBirthday] = useState(user.birthday);

    const save = () => {
        const fio = [firstNamem, surname];
        if (patronymic.length > 0) fio.push(patronymic);
        
        updateInfo(user.id, fio, birthday).then(() => {
            notifySuccess("Инхормация изменена")
            navigation("../")
        });
    }


    return (
        <ModalForm title={"Создать"} confirm={save}>
                <InputField type='text' placeholder='Фамилия' defaultValue={firstNamem} onSetValue={setFirstName}></InputField>
                <InputField type='text' placeholder='Имя' defaultValue={surname} onSetValue={setSurname}></InputField>
                <InputField type='text' placeholder='Отчество' defaultValue={patronymic} onSetValue={setPatronymic}></InputField>
                <InputField type='date' title='дата рождения' defaultValue={user.birthday.toString()} onSetValue={setBirthday} MyConstructor={MyDate} ></InputField>
        </ModalForm>
    )
}

export default FormEditInfoUser