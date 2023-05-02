import { url_get_news_id_full_text } from "Constatnts/url";
import fetch from "./Fetch";

async function getFullTextOfNews(id: string): Promise<string> {
    const result = await fetch
        .get(url_get_news_id_full_text(id))
        .then((response) => Promise.resolve(response.data))
        .catch(() => Promise.reject(null));

    return result;
}

export default getFullTextOfNews;