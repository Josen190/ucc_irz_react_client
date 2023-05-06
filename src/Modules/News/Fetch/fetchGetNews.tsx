import { INewsFiler } from "../Reducers/NewsFilterReduser";
import fetch from "Fetch/Fetch";
import { url_get_news } from "Constatnts/url";
import News from "Helpers/News";
import PropsNews from "Fetch/Interface/INews";

async function fetchGetNews(
    pageIndex: number,
    filter?: INewsFiler,
    pageSize = 10
) {
    const params: { [key: string]: string | number | boolean } = {
        PageIndex: pageIndex,
        PageSize: pageSize,
    };

    if (typeof filter?.AuthorId !== 'undefined') params.AuthorId = filter.AuthorId;
    if (typeof filter?.PublicOnly !== 'undefined') params.PublicOnly = filter.PublicOnly;
    if (typeof filter?.LikedOnly !== 'undefined') params.LikedOnly = filter.LikedOnly;
    if (typeof filter?.SearchString !== 'undefined') params.SearchString = filter.SearchString;

    return await fetch.get(url_get_news, { params: params })
        .then((response) => {
            const data = response.data as PropsNews[];
            const tidings = data.map((tiding) => {
                return (new News(tiding));
            });
            return Promise.resolve(tidings);
        })
        .catch((error) => Promise.reject(error.response.data));
}

export default fetchGetNews;