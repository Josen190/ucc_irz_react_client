import React, { useEffect, useState } from "react";
import useDeleteNewsFromFeed from "../..//Hooks/useDeleteNewsFromFeed";
import useGetNews from "../..//Hooks/useGetNews";
import News from "Helpers/News";
import Tidings from "../Tidings/Tidings";
import HeaderFeedNews from "../HeaderFeedNews/HeaderFeedNews";
import CreateTidings from "../CreateNewsForm/CreateTidings";
import { useAppDispatch, useAppSelector } from "Hooks";
import useScrollEndOfPage, { useEndOfPage } from "../../../../Hooks/useEndOfPage"
import { setFilter } from "../../Reducers/NewsFilterReduser";
import { useScroll } from "react-ui-animate";
import usePageIndex from "Hooks/usePageIndex";

interface Props {
  inAccount?: boolean;
}

export default function FeedNews({
  inAccount = false,
}: Props): JSX.Element {
  const {isLogin, user }= useAppSelector((s) => s.authorization);
  const filter = useAppSelector((s) => s.newsFilter);
  const [active, setActive] = useState(false);
  const [arrNews, setArrNews] = useState<JSX.Element[]>([]);
  const [deleteKeyElement, setDeleteKeyElement] = useState<string | null>(null);

  const userId = user ? user.id : undefined;
  const filterInAccount = {AuthorId: userId, PublicOnly: undefined, LikedOnly: undefined, SearchString: undefined};
  useDeleteNewsFromFeed(deleteKeyElement, arrNews, setArrNews);
  useGetNews(arrNews, setArrNews, setDeleteKeyElement, inAccount? filterInAccount : filter);


  const update = (news: News) => {
    setArrNews([<Tidings key={news.id + Math.random()} tidings={news} deletElement={setDeleteKeyElement} />, ...arrNews]);
  };


  return <div className="column">
    <HeaderFeedNews isLogin={isLogin && inAccount} setActive={inAccount ? setActive : undefined}></HeaderFeedNews>
    {arrNews}
    {active && (<CreateTidings setActive={setActive} updateNews={update} />)}
  </div>;
}
