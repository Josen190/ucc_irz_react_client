import { notifySuccess } from "Components/Notifications/Notifications";
import API from "Fetch/Api";


interface dataNewUser{
    firstName: string;
    surname: string;
    patronymic: string | undefined;
    email: string;
    birthday: string;
}

const url_post_users_management_register =
  "/api/users_management/register";

async function newUser(data: dataNewUser) {
    const resule =  await API.post(url_post_users_management_register, data).then(() => {
        notifySuccess("Сотрудник добавлен")
        return Promise.resolve();
    }).catch((error) => {
        notifySuccess("Ошибка")
        return Promise.reject(error.response.data[0].description);
    })

    return resule;
}

export default newUser;