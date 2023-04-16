import API from "Fetch/Api";
import { notifySuccess, notifyError } from "Components/Notifications/Notifications";

function deletComment(id: string) {
    
    API.deletComment(id)
      .then(() => {
        notifySuccess("Коментарий удалён");
      })
      .catch(() => {
        notifyError("Ошибка, коментарий не удален");
      });
  };

  export default deletComment;