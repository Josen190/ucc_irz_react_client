
import API from "Fetch/Api";
import MinUser from "Helpers/MinUser";
import News from "Helpers/News";
import NewsComments from "Helpers/NewsComments";
import { notifyError } from "Components/Notifications/Notifications";
import { useContext } from "react";
import { authContext, IAuthContext } from "Modules/AuthController";

async function newNewsComments(newsID: string, text: string): Promise<NewsComments> {
    const { authData } = useContext(authContext) as IAuthContext;
    const author = authData.user;
    const api = new API;
    const result: string | false = await api.postComment(newsID, text)
    .then((commentId) => {
      
      notifyError("Комментарий создан");
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

    return Promise.resolve(new NewsComments(result, text, author ?? new MinUser()))
  }
 export default newNewsComments;