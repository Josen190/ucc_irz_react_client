

import VisitingUser from "Helpers/VisitingUser";
import News from "Helpers/News";
import NewsComments from "Helpers/NewsComments";
import { notifyError, notifySuccess } from "Components/Notifications/Notifications";
import fetch from "Fetch/Fetch";
import { url_post_news_comments } from "Constatnts/url";

async function newNewsComments(newsID: string, text: string, author: VisitingUser = new VisitingUser()): Promise<NewsComments> {

  const result = await fetch.post(url_post_news_comments, {
    newsEntryId: newsID,
    text: text,
  })
    .then((response) => {
      notifySuccess("Комментарий создан");
      return Promise.resolve(new NewsComments(response.data as string, text, author));
    })
    .catch(() => {
      notifyError("Ощибка, попробуйте снова");
      return Promise.reject(false);
    });

  return result;
}
export default newNewsComments;