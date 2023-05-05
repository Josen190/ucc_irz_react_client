import { url_get_news_comments } from "Constatnts/url";
import fetch from "Fetch/Fetch";
import PropsNewsComments from "Fetch/Interface/INewsComments";
import NewsComments from "Helpers/NewsComments";

async function getNewsComment(PageIndex: number, newsId: string, PageSize = 10) {
    return await fetch
        .get(url_get_news_comments, {
            params: {
                newsEntryId: newsId,
                PageIndex, 
                PageSize,
            }
        }).then((response) => {
            const data = response.data as PropsNewsComments[];
            return Promise.resolve(data.map(paramComment => new NewsComments(paramComment)));
        }).catch(() => Promise.reject());
}
export default getNewsComment;