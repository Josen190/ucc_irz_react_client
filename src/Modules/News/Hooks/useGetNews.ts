
import API from "Fetch/Api";
import React, { useEffect, useRef, useState } from "react";
import Tidings from "../Components/Tidings/Tidings";
import fetchGetNews from "../Fetch/fetchGetNews";
import { INewsFiler } from "../Reducers/NewsFilterReduser";
import useEndOfPage from "Hooks/useEndOfPage";
import usePageIndex from "Hooks/usePageIndex";


function useGetNews(
    arrayNews: JSX.Element[],
    setArrayNews: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
    setDeleteKeyElement: React.Dispatch<React.SetStateAction<string | null>>,
    filter?: INewsFiler,
) {
    const [pageIndex, nextPage, restart] = usePageIndex();
    const [isEnd, setIsEnd] = useState(false)
   
    const prevFilterRef = useRef<INewsFiler>();

    useEffect(() => {
        let _arrNews = arrayNews;
        if (!prevFilterRef.current || prevFilterRef.current !== filter){
            setArrayNews([]);
            _arrNews = [];
            setIsEnd(false);
            restart();
        }

        prevFilterRef.current = filter;
        
        fetchGetNews(pageIndex, _arrNews, setArrayNews, setDeleteKeyElement, setIsEnd, filter);
    }, [pageIndex, filter]);

    useEndOfPage(nextPage, isEnd);

}

export default useGetNews;