import MyDate from 'Helpers/MyDate';
import newUser from '../../Fetch/newUser';
import Button from 'UI/Button/Button';
import InputField from 'UI/InputField/InputField';
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import {ModalForm} from "UI/Modal";

function FormNewUser() {
    const [firstName, setFirstName] = useState<string>();
    const [surname, setSurname] = useState<string>();
    const [patronymic, setPatronymic] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [birthday, setBirthday] = useState<MyDate>();
    const [error, setError] = useState<string>()

    const navigate = useNavigate();

    const save = () => {
        if (!firstName) return;
        if (!surname) return;
        if (!email) return;
        if (!birthday) return;

        const data = { firstName, surname, patronymic, email, birthday: birthday.toISOString() }

        newUser(data)
            .then(() => {
                navigate("../");
            })
            .catch((error) => {
                setError(error as string)
            })
    }

    return (
        <ModalForm title={"Создать"} confirm={save}>
                <InputField<string> type='text' onSetValue={setSurname} placeholder='Фамилия'></InputField>
                <InputField<string> type='text' onSetValue={setFirstName} placeholder='Имя'></InputField>
                <InputField<string> type='text' onSetValue={setPatronymic} placeholder='Отчество'></InputField>
                <InputField<string> type='email' onSetValue={setEmail} placeholder='Электронная почта'></InputField>
                <InputField type='date' onSetValue={setBirthday} MyConstructor={MyDate} placeholder='Отчество'></InputField>
                {/*{error && <p>{error}</p>}*/}
        </ModalForm>
    )
}

export default FormNewUser