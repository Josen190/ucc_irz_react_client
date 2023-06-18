import User from 'Helpers/User';
import React from 'react'
import updateInfo from '../../Fetch/updateInfo';
import {useNavigate, useOutletContext} from "react-router-dom";
import {notifySuccess} from "../../../../Components/Notifications/Notifications";
import {ModalForm} from "UI/Form";
import { Input, InputText } from 'UI/Input';
import useText from 'Hooks/useText';
import useDate from 'Hooks/useDate';



function FormEditInfoUser() {

    const user = useOutletContext<User>()
    const navigation = useNavigate();

    const [firstNamem, setFirstName] = useText(user.firstName);
    const [surname, setSurname] = useText(user.surname);
    const [patronymic, setPatronymic] = useText(user.patronymic);
    const [birthday, setBirthday] = useDate(user.birthday);

    const save = () => {
        if (!firstNamem || !surname || !birthday) return;

        const fio = [firstNamem, surname];
        if (patronymic && patronymic.length > 0) fio.push(patronymic);
        
        updateInfo(user.id, fio, birthday).then(() => {
            notifySuccess("Инхормация изменена")
            navigation("../")
        });
    }


    return (
        <ModalForm title={"Создать"} confirm={save}>
            <InputText 
                placeholder='Фамилия' 
                defaultValue={firstNamem} 
                onSetValue={setFirstName} />
            <InputText 
                placeholder='Имя' 
                defaultValue={surname} 
                onSetValue={setSurname} />
            <InputText 
                placeholder='Отчество' 
                defaultValue={patronymic} 
                onSetValue={setPatronymic} />
            <Input 
                type='date' 
                title='дата рождения' 
                defaultValue={user.birthday.toString()} 
                onSetValue={setBirthday} />
        </ModalForm>
    )
}

export default FormEditInfoUser