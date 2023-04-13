
import API from "Fetch/*";
import React, { useEffect } from "react";
import Tidings from "../Components/Tidings/Tidings";
import fetchGetNews from "../Fetch/fetchGetNews";


function useGetNews(
    pageIndex: number,
    arrayNews: JSX.Element[],
    setArrayNews: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
    setPageIndex: React.Dispatch<React.SetStateAction<number>>,
    setDeleteKeyElement: React.Dispatch<React.SetStateAction<string | null>>
) {
    useEffect(() => {
        fetchGetNews(pageIndex, arrayNews, setArrayNews, setPageIndex, setDeleteKeyElement);
    }, [pageIndex]);
}

export default useGetNews;