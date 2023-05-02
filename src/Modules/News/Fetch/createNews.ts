import { notifySuccess, notifyError } from "Components/Notifications/Notifications";

import Image from "Helpers/Image";
import User from "Helpers/User";
import News from "Helpers/News";
import fetch from "Fetch/Fetch";
import { url_post_news } from "Constatnts/url";


async function createNews(author: User, title: string, content: string, isPublic: boolean, image?: Image): Promise<News> {

  const data = {
    title: title,
    text: content,
    isPublic: isPublic,
    image: image ? image.toFetch() : null,
  };

  const result = await fetch.post(url_post_news, data)
    .then((response) => {
      notifySuccess("Новость создана");
      return Promise.resolve(new News(response.data as string, title, content, isPublic, author, image))
    })
    .catch(() => {
      notifyError("Новость не создана, попробуйте снова");
      return Promise.reject();
    });

  return result;
}
export default createNews;