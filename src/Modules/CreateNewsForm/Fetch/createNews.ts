import { notifySuccess, notifyError } from "Components/Notifications/Notifications";
import API from "Fetch/Api";
import Image from "Helpers/Image";
import MinUser from "Helpers/MinUser";
import News from "Helpers/News";


async function createNews(author: MinUser, title: string, content: string, isGlobal: boolean, image?: Image): Promise<News> {
    const api = new API;
    
    const result: string | boolean = await api.postNews(title, content, isGlobal)
      .then((newsID) => {
        notifySuccess("Новость создана");
        return typeof newsID === 'string' ? newsID : false;
      })
      .catch((error) => {
        notifyError("Новость не создана, попробуйте снова");
        return false;
      });

    if (!result)
     return Promise.reject(false);

    return Promise.resolve(new News(result, title, content, isGlobal, author ?? new MinUser(), image))
  }
 export default createNews;