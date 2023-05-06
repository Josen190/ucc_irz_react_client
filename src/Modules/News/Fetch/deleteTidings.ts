import { url_delete_news_id } from "Constatnts/url";
import fetch from "Fetch/Fetch";

const deleteTidings = async (id: string) => {
    return await fetch.delete(url_delete_news_id(id));
};
export default deleteTidings;