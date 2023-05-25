import { notifyError, notifySuccess } from "Components/Notifications/Notifications";

import fetch from "Fetch/Fetch";
import MyDate from "Helpers/MyDate";

const url_put_users_management_id_update_reg_info = (id: string) => {
    return `/api/users_management/${id}/update_reg_info`;
};

async function updateInfo(id: string, fio: string[], birthday: MyDate) {
    const data: { [keys: string]: string } = {
        firstName: fio[0],
        surname: fio[1],
        birthday: birthday.toISOString(),
    }
    if (fio[3]) data.patronymic = fio[2];

    return await fetch.put(url_put_users_management_id_update_reg_info(id), data)
        .then(() => notifySuccess("Информация изменена"))
        .catch(() => notifyError("Ошибка"))
}
export default updateInfo;