
import API from "Fetch/Api";
import React, { useEffect } from "react";
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
    const [pageIndex, nextPage] = usePageIndex();
    useEndOfPage(nextPage);

    useEffect(() => {
        fetchGetNews(pageIndex, arrayNews, setArrayNews, setDeleteKeyElement, filter);
    }, [pageIndex]);
}

export default useGetNews;