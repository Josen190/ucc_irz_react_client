import VisitingUser from "Helpers/VisitingUser";
import NewsComments from "Helpers/NewsComments";
import {notifyError, notifySuccess} from "Components/Notifications/Notifications";
import fetch from "Fetch/Fetch";
import {url_post_news_comments} from "Constatnts/url";
import MyDate from "Helpers/MyDate";

async function newNewsComments(newsID: string, text: string, author: VisitingUser = new VisitingUser()): Promise<NewsComments> {

  return await fetch.post(url_post_news_comments, {
    newsEntryId: newsID,
    text: text,
  })
      .then((response) => {
        notifySuccess("Комментарий создан");
        return Promise.resolve(new NewsComments(response.data as string, text, author, new MyDate()));
      })
      .catch(() => {
        notifyError("Ощибка, попробуйте снова");
        return Promise.reject(false);
      });
}
export default newNewsComments;