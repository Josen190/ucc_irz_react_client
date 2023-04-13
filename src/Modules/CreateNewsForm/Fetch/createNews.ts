import { notifySuccess, notifyError } from "Components/Notifications/Notifications";
import API from "Fetch/Api";
import Image from "Helpers/Image";
import MinUser from "Helpers/MinUser";
import News from "Helpers/News";
import { authContext, IAuthContext } from "Modules/AuthController";
import { useContext } from "react";


async function createNews(title: string, content: string, isGlobal: boolean, image?: Image): Promise<News> {
    const { authData } = useContext(authContext) as IAuthContext;
    const author = authData.user;
    const api = new API;
    const result: string | boolean = await api.postNews(title, content, isGlobal)
      .then((newsID) => {
        notifySuccess("Новость создана");
        // if (updateNews)
        //  updateNews();
        return typeof newsID === 'string' ? "newsID" : false;
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