

import React, { useEffect, useRef, useState } from "react";
import fetchGetNews from "../Fetch/fetchGetNews";
import { INewsFiler } from "../Reducers/NewsFilterReduser";
import useEndOfPage from "Hooks/useEndOfPage";
import usePageIndex from "Hooks/usePageIndex";
import useDeleteNewsFromFeed from "./useDeleteNewsFromFeed";
import News from "Helpers/News";
import Tidings from "../Components/Tidings/Tidings";

function useGetNews(
    filter?: INewsFiler,
) {
    const { pageIndex, nextPage, restart } = usePageIndex();
    const [arrNews, setArrNews] = useState<JSX.Element[]>([]);
    const [isEnd, setIsEnd] = useState(false)
    const [deleteKeyElement, setDeleteKeyElement] = useState<string | null>(null);
    const prevFilterRef = useRef<INewsFiler>();
    useEndOfPage(nextPage, undefined, isEnd);

    useDeleteNewsFromFeed(deleteKeyElement, arrNews, setArrNews);

    useEffect(() => {
        let _arrNews = arrNews;
        if (!prevFilterRef.current || prevFilterRef.current !== filter) {
            setArrNews([]);
            _arrNews = [];
            setIsEnd(false);
            restart();
        }

        prevFilterRef.current = filter;

        fetchGetNews(pageIndex, _arrNews, setArrNews, setDeleteKeyElement, setIsEnd, filter);
    }, [pageIndex, filter]);


    const update = (news: News) => {
        setArrNews([<Tidings key={news.id} tidings = { news } deletElement = { setDeleteKeyElement } />, ...arrNews]);
    };

    return {arrNews, update}
}

export default useGetNews;