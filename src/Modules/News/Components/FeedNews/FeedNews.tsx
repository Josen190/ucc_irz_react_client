import React, { useState } from "react";
import fetchGetNews from "../..//Fetch/fetchGetNews";
import useDeleteNewsFromFeed from "../..//Hooks/useDeleteNewsFromFeed";
import useGetNews from "../..//Hooks/useGetNews";
import useSetUpdate from "../..//Hooks/useSetUpdate";


interface Props {
  userID?: string;
  publicOnly?: boolean;
  likedOnly?: boolean;
  setUpdate?: React.Dispatch<React.SetStateAction<(() => void) | undefined>>;
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

  const update = () => {
    setPageIndex(0);
    setArrNews([]);
    fetchGetNews(pageIndex, arrNews, setArrNews, setPageIndex, setDeleteKeyElement);
  };

  if (setUpdate)
    useSetUpdate(update, setUpdate);


  return <main className="column">{arrNews}</main>;
}
