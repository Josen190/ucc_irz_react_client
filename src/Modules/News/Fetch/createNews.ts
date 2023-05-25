import {notifyError, notifySuccess} from "Components/Notifications/Notifications";

import Image from "Helpers/Image";
import VisitingUser from "Helpers/VisitingUser";
import News from "Helpers/News";
import fetch from "Fetch/Fetch";
import {url_post_news} from "Constatnts/url";


async function createNews(author: VisitingUser, title: string, content: string, isPublic: boolean, image?: Image): Promise<News> {

    const data = new FormData();
    data.append('Title', title);
    data.append('Text', content);
    if (image) {
        const file = new File([image.blob], image.name, { type: image.file?.type })
        data.append('Image', file);
    }
    data.append('IsPublic', String(isPublic));



  return await fetch.post(url_post_news, data, {
      headers: {
          "Content-Type": "multipart/form-data",
      }
  })
      .then((response) => {
        notifySuccess("Новость создана");
        return Promise.resolve(new News(response.data as string, title, content, isPublic, author, image))
      })
      .catch(() => {
        notifyError("Новость не создана, попробуйте снова");
        return Promise.reject();
      });
}
export default createNews;