import React, { useState } from "react";
import useGetNews from "../..//Hooks/useGetNews";
import HeaderFeedNews from "../HeaderFeedNews/HeaderFeedNews";
import { useAppSelector } from "Hooks";
import {Outlet} from "react-router-dom";
import {INewsFiler} from "../../Reducers/NewsFilterReduser";

interface Props {
  inAccount?: boolean;
  userId?: string
}

export default function FeedNews({
  inAccount = false,
  userId,
}: Props): JSX.Element {
  const { user } = useAppSelector((s) => s.authorization);
  const [filter, setFilter] = useState<INewsFiler>(
    { AuthorId: userId, 
      PublicOnly: undefined, 
      LikedOnly: undefined, 
      SearchString: undefined 
    })

  const {arrNews, newNews} = useGetNews(filter);

  return <div className="column">
    <HeaderFeedNews isLogin={user?.id === userId && inAccount} setFilter={(v) => {setFilter({...v, AuthorId: userId})}} />
    {arrNews}
      <Outlet context={newNews}/>
  </div>;
}
