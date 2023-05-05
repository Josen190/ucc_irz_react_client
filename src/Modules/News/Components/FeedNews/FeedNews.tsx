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
  const { user } = useAppSelector((s) => s.authorization);
  const [active, setActive] = useState(false);
  const [filter, setFilter] = useState(
    { AuthorId: userId, 
      PublicOnly: undefined, 
      LikedOnly: undefined, 
      SearchString: undefined 
    })

  const {arrNews, update} = useGetNews(filter);



  return <div className="column">
    <HeaderFeedNews isLogin={user?.id === userId && inAccount} setActive={inAccount ? setActive : undefined}
    setFilter={(v) => {setFilter({...v, AuthorId: userId})}}></HeaderFeedNews>
    {arrNews}
    {active && (<CreateTidings setActive={setActive} updateNews={update} />)}
  </div>;
}
