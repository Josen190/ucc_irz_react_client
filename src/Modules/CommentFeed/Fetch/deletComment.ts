import fetch from "Fetch/Fetch";
import { url_delete_news_comments_id } from "Constatnts/url";

async function deletComment(id: string) {

  return await fetch
    .delete(url_delete_news_comments_id(id))

}

export default deletComment;
