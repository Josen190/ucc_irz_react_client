import { notifySuccess, notifyError } from "Components/Notifications/Notifications";
import { url_delete_news_id } from "Constatnts/url";
import fetch from "Fetch/Fetch";

const deleteTidings = (id: string, deletElement: any) => {

    fetch
        .delete(url_delete_news_id(id))
        .then(() => {
            deletElement(id);
            notifySuccess("Новость удалена");
        })
        .catch(() => notifyError("Ошибка, новотсь не удалена"));
};
export default deleteTidings;