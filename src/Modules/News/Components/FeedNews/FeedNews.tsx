import React, { useEffect, useState } from "react";
import useDeleteNewsFromFeed from "../..//Hooks/useDeleteNewsFromFeed";
import useGetNews from "../..//Hooks/useGetNews";
import News from "Helpers/News";
import Tidings from "../Tidings/Tidings";
import HeaderFeedNews from "../HeaderFeedNews/HeaderFeedNews";
import CreateTidings from "../CreateNewsForm/CreateTidings";
import { useAppSelector } from "Hooks";

interface Props {
  inAccount?: boolean;
  userId?: string
}

export default function FeedNews({
  inAccount = false,
  userId,
}: Props): JSX.Element {
  const { isLogin, user } = useAppSelector((s) => s.authorization);
  const [active, setActive] = useState(false);
  const [arrNews, setArrNews] = useState<JSX.Element[]>([]);
  const [deleteKeyElement, setDeleteKeyElement] = useState<string | null>(null);
  const [filter, setFilter] = useState(
    { AuthorId: userId, 
      PublicOnly: undefined, 
      LikedOnly: undefined, 
      SearchString: undefined 
    })

  useDeleteNewsFromFeed(deleteKeyElement, arrNews, setArrNews);
  useGetNews(arrNews, setArrNews, setDeleteKeyElement, filter);


  const update = (news: News) => {
    setArrNews([<Tidings key={news.id + Math.random()} tidings={news} deletElement={setDeleteKeyElement} />, ...arrNews]);
  };


  return <div className="column">
    <HeaderFeedNews isLogin={isLogin && inAccount} setActive={inAccount ? setActive : undefined}
    setFilter={(v) => {setFilter({...v, AuthorId: userId})}}></HeaderFeedNews>
    {arrNews}
    {active && (<CreateTidings setActive={setActive} updateNews={update} />)}
  </div>;
}
