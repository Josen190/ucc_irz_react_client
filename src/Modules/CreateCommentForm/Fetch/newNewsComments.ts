
import API from "Fetch/Api";
import MinUser from "Helpers/MinUser";
import News from "Helpers/News";
import NewsComments from "Helpers/NewsComments";
import { notifyError, notifySuccess } from "Components/Notifications/Notifications";

async function newNewsComments(newsID: string, text: string, author: MinUser = MinUser.getAuntificationuUser()): Promise<NewsComments> {
    console.log(text);
    
    const result: string | false = await API.postComment(newsID, text)
    .then((commentId) => {
      
      notifySuccess("Комментарий создан");
      console.log(commentId);
      // return commentId;
      return "dssad";
    })
    .catch(() => {
      notifyError("Ощибка, попробуйте снова");
      return false;
    });

    if (!result)
     return Promise.reject(false);

    return Promise.resolve(new NewsComments(result, text, author))
  }
 export default newNewsComments;