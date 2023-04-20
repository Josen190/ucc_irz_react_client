import API from "Fetch/Api";
import Tidings from "../Components/Tidings/Tidings";
import React from "react";
import { INewsFiler } from "../Reducers/NewsFilterReduser";

function fetchGetNews(
    pageIndex: number,
    arrNews: JSX.Element[],
    setArrNews: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
    setDeleteKeyElement: React.Dispatch<React.SetStateAction<string | null>>,
    filter?: INewsFiler,
) {

    API.getListingNews(pageIndex, filter)
        .then((tidings) => {
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
        })
        .catch(() => undefined);
}

export default fetchGetNews;