import React, { useEffect, useState } from "react";
import fetchGetNews from "../..//Fetch/fetchGetNews";
import useDeleteNewsFromFeed from "../..//Hooks/useDeleteNewsFromFeed";
import useGetNews from "../..//Hooks/useGetNews";
import News from "Helpers/News";
import Tidings from "../Tidings/Tidings";


interface Props {
  userID?: string;
  publicOnly?: boolean;
  likedOnly?: boolean;
  setUpdate?: React.Dispatch<React.SetStateAction<((news: News) => void) | undefined>>;
}

export default function FeedNews({
  userID,
  publicOnly,
  likedOnly,
  setUpdate,
}: Props): JSX.Element {
  const [arrNews, setArrNews] = useState<JSX.Element[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [deleteKeyElement, setDeleteKeyElement] = useState<string | null>(null);

  useDeleteNewsFromFeed(
    deleteKeyElement,
    arrNews,
    setArrNews);


  useGetNews(pageIndex, arrNews, setArrNews, setPageIndex, setDeleteKeyElement);

  const update = (news: News) => {
    console.log(news);
    if (news){
      setArrNews([<Tidings key={news.id} tidings={news} deletElement={setDeleteKeyElement}/>, ...arrNews]);
    }
    
  };

  if (setUpdate)
    useEffect(() => {
      console.log("1-iter");
      
      setUpdate(update);
    }, [setUpdate]);

  return <main className="column">{arrNews}</main>;
}
