import React, { useEffect, useState } from "react";
import API, { url_get_news } from "../../Fetch/Api";
import Tidings from "./Tidings";

interface Props {
  userID?: string;
  publicOnly?: boolean;
  likedOnly?: boolean;
  setUpdate?: React.Dispatch<
    React.SetStateAction<{
      update: Function;
    }>
  >;
}

export default function FeedNews({
  userID,
  publicOnly,
  likedOnly,
  setUpdate,
}: Props): JSX.Element {
  const [arrNews, setArrNews] = useState<JSX.Element[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [deleteKeyElement, setDeleteKeyElement] = useState(0);

  useEffect(() => {
    const arr = arrNews.filter((element) => {
      return element.key !== deleteKeyElement;
    });
    setArrNews(arr);
  }, [deleteKeyElement]);

  const getNews = () => {
    API.getListingNews(pageIndex)
      .then((tidings) => {
        let _arrNews = [];
        _arrNews.push(...arrNews);
        tidings.forEach((tiding) => {
          _arrNews.push(
            <Tidings
              key={tiding.id}
              tidings={tiding}
              deletElement={setDeleteKeyElement}
            />
          );
        });

        setArrNews(_arrNews);
        if (tidings.length === 10) setPageIndex(pageIndex + 1);
      })
      .catch((error) => {});
  };

  const update = () => {
    // setArrNews([]);
    getNews();
  };

  useEffect(getNews, [pageIndex]);
  useEffect(() => {
    if (typeof setUpdate === "function") setUpdate({ update: update });
  }, [setUpdate]);

  return <main className="column">{arrNews}</main>;
}
