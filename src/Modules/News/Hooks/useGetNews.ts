
import API from "Fetch/Api";
import React, { useEffect } from "react";
import Tidings from "../Components/Tidings/Tidings";
import fetchGetNews from "../Fetch/fetchGetNews";
import { INewsFiler } from "../Reducers/NewsFilterReduser";


function useGetNews(
    pageIndex: number,
    arrayNews: JSX.Element[],
    setArrayNews: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
    setPageIndex: React.Dispatch<React.SetStateAction<number>>,
    setDeleteKeyElement: React.Dispatch<React.SetStateAction<string | null>>,
    filter?: INewsFiler,
) {
    useEffect(() => {
        fetchGetNews(pageIndex, arrayNews, setArrayNews, setPageIndex, setDeleteKeyElement, filter);
    }, [pageIndex]);
}

export default useGetNews;