import {notifyError, notifySuccess} from "Components/Notifications/Notifications";

import Image from "Helpers/Image";
import VisitingUser from "Helpers/VisitingUser";
import News from "Helpers/News";
import fetch from "Fetch/Fetch";
import {url_post_news} from "Constatnts/url";


async function createNews(author: VisitingUser, title: string, content: string, isPublic: boolean, image?: Image): Promise<News> {

    const data = new FormData();
    data.append('Title', title); // Установите значение заголовка
    data.append('Text', content); // Установите значение текста
    if (image && image.blob) {
        const file = new File([image.blob], 'logo.png', { type: 'image' })
        data.append('Image', file);
    } // Добавьте двоичные данные изображения
    data.append('IsPublic', String(isPublic)); // Установите значение IsPublic



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