import React, { useEffect, useState } from "react";
import useDeleteNewsFromFeed from "../..//Hooks/useDeleteNewsFromFeed";
import useGetNews from "../..//Hooks/useGetNews";
import News from "Helpers/News";
import Tidings from "../Tidings/Tidings";
import HeaderFeedNews from "../HeaderFeedNews/HeaderFeedNews";
import CreateTidings from "../CreateNewsForm/CreateTidings";
import { useAppSelector } from "Hooks";
import useEndOfPage from "../../Hooks/useEndOfPage"

interface Props {
  inAccount?: boolean;
}

export default function FeedNews({
  inAccount = false,
}: Props): JSX.Element {
  const isLogin = useAppSelector((s) => s.authorization.isLogin);
  const filter = useAppSelector((s) => s.newsFilter);
  const [active, setActive] = useState(false);
  const [arrNews, setArrNews] = useState<JSX.Element[]>([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [deleteKeyElement, setDeleteKeyElement] = useState<string | null>(null);
  const [isEndOfPage, setIsEndOfPage] = useState(false);

  useDeleteNewsFromFeed(deleteKeyElement, arrNews, setArrNews);
  useGetNews(pageIndex, arrNews, setArrNews, setDeleteKeyElement, filter);
  useEndOfPage(setIsEndOfPage);

  useEffect(() => {
    if (isEndOfPage) {
      setPageIndex(pageIndex + 1);
    }
  }, [isEndOfPage])

  const update = (news: News) => {
    setArrNews([<Tidings key={news.id + Math.random()} tidings={news} deletElement={setDeleteKeyElement} />, ...arrNews]);
  };


  return <div className="column">
    <HeaderFeedNews isLogin={isLogin && inAccount} setActive={inAccount ? setActive : undefined}></HeaderFeedNews>
    {arrNews}
    {active && (<CreateTidings setActive={setActive} updateNews={update} />)}
  </div>;
}
