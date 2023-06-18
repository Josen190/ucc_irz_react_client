import React from 'react'
import newUser from '../../Fetch/newUser';
import {useNavigate} from "react-router-dom";
import {ModalForm} from "UI/Form";
import { InputDate, InputText } from 'UI/Input';
import useText from 'Hooks/useText';
import useDate from 'Hooks/useDate';

function FormNewUser() {
    const [firstName, setFirstName] = useText();
    const [surname, setSurname] = useText();
    const [patronymic, setPatronymic] = useText();
    const [email, setEmail] = useText();
    const [birthday, setBirthday] = useDate();
    const [error, setError] = useText()

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
                <InputText onSetValue={setSurname} placeholder='Фамилия'></InputText>
                <InputText onSetValue={setFirstName} placeholder='Имя'></InputText>
                <InputText onSetValue={setPatronymic} placeholder='Отчество'></InputText>
                <InputText onSetValue={setEmail} placeholder='Электронная почта'></InputText>
                <InputDate onSetValue={setBirthday} placeholder='Отчество'></InputDate>
                {/*{error && <p>{error}</p>}*/}
        </ModalForm>
    )
}

export default FormNewUser