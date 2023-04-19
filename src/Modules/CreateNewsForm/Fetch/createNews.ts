import { notifySuccess, notifyError } from "Components/Notifications/Notifications";
import API from "Fetch/Api";
import Image from "Helpers/Image";
import MinUser from "Helpers/MinUser";
import News from "Helpers/News";


async function createNews(author: MinUser, title: string, content: string, isGlobal: boolean, image?: Image): Promise<News> {  
    const result: string | false = await API.pos/tNews(title, content, isGlobal)
      .then((newsID) => {
        notifySuccess("Новость создана");
        return newsID;
      })
      .catch(() => {
        notifyError("Новость не создана, попробуйте снова");
        return false;
      });

    console.log(result);

    if (!result)
     return Promise.reject(false);

    console.log(result);
    
    return Promise.resolve(new News(result, title, content, isGlobal, author, image))
  }
 export default createNews;