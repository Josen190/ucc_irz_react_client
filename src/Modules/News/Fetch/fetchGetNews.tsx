
import Tidings from "../Components/Tidings/Tidings";
import React from "react";
import { INewsFiler } from "../Reducers/NewsFilterReduser";
import fetch from "Fetch/Fetch";
import { url_get_news } from "Constatnts/url";
import News from "Helpers/News";
import PropsNews from "Fetch/Interface/INews";

function fetchGetNews(
    pageIndex: number,
    arrNews: JSX.Element[],
    setArrNews: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
    setDeleteKeyElement: React.Dispatch<React.SetStateAction<string | null>>,
    setIsEnd: React.Dispatch<React.SetStateAction<boolean>>,
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

    fetch.get(url_get_news, { params: params })
        .then((response) => {
            const data = response.data as PropsNews[];
            const tidings = data.map((tiding) => {
                return (new News(tiding));
            });
            if (tidings.length == 0) {
                setIsEnd(true);
                return;
            }
            const _arrNews: JSX.Element[] = [];
            _arrNews.push(...arrNews);
            tidings.forEach((tiding) => {
                _arrNews.push(
                    <Tidings
                        key={tiding.id}
                        tidings={tiding}
                        deletElement={setDeleteKeyElement}
                    />
                );
            });

            setArrNews(_arrNews);

            return Promise.resolve(tidings);
        })
        .catch((error) => Promise.reject());
}

export default fetchGetNews;