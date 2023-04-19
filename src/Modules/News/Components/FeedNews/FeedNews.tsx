import React, { useEffect, useState } from "react";
import fetchGetNews from "../..//Fetch/fetchGetNews";
import useDeleteNewsFromFeed from "../..//Hooks/useDeleteNewsFromFeed";
import useGetNews from "../..//Hooks/useGetNews";
import News from "Helpers/News";
import Tidings from "../Tidings/Tidings";
import HeaderFeedNews from "../HeaderFeedNews/HeaderFeedNews";
import CreateTidings from "../CreateNewsForm/CreateTidings";
import { useAppSelector } from "Hooks";


interface Props {
  inAccount?: boolean;
}

export default function FeedNews({
  inAccount = false,
}: Props): JSX.Element {
  const isLogin = useAppSelector((s)=> s.authorization.isLogin);
  const filter = useAppSelector((s)=> s.newsFilter);
  const [active, setActive] = useState(false);
  const [arrNews, setArrNews] = useState<JSX.Element[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [deleteKeyElement, setDeleteKeyElement] = useState<string | null>(null);

  useDeleteNewsFromFeed(deleteKeyElement,arrNews,setArrNews);
  useGetNews(pageIndex, arrNews, setArrNews, setPageIndex, setDeleteKeyElement, filter);

  const update = (news: News) => {
    console.log(news);
    if (news) {
      setArrNews([<Tidings key={news.id} tidings={news} deletElement={setDeleteKeyElement} />, ...arrNews]);
    }

  };


  return <div className="column">
    <HeaderFeedNews isLogin={isLogin}></HeaderFeedNews>
    {arrNews}
    {active && (<CreateTidings setActive={setActive} updateNews={update} />)}
  </div>;
}
