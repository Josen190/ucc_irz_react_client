
import { notifySuccess, notifyError } from "Components/Notifications/Notifications";
import fetch from "Fetch/Fetch";
import { url_delete_news_comments_id } from "Constatnts/url";

function deletComment(id: string) {

  fetch
    .delete(url_delete_news_comments_id(id))
    .then(() => {
      notifySuccess("Коментарий удалён");
    })
    .catch(() => {
      notifyError("Ошибка, коментарий не удален");
    });
};

export default deletComment;
