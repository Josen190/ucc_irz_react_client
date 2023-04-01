import React, { useEffect, useState } from "react";
import API, { url_get_news } from "../../Fetch/Api";
import Tidings from "./Tidings";

interface Props {
  userID?: string;
  publicOnly?: boolean;
  likedOnly?: boolean;
  setUpdate?: React.Dispatch<
    React.SetStateAction<{
      update: any;
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
    const _userID = userID ?? null;
    const _publicOnly = publicOnly ?? null;
    const _likedOnly = likedOnly ?? null;
    const pageSize = 10;

    const params: { [key: string]: string | number | boolean } = {
      PageIndex: pageIndex,
      PageSize: pageSize,
    };
    if (_userID != null) {
      params.AuthorId = _userID;
    }

    if (_publicOnly != null) {
      params.PublicOnly = _publicOnly;
    }

    if (_likedOnly != null) {
      params.LikedOnly = _likedOnly;
    }

    API.get(url_get_news, { params: params })
      .then((response) => {
        let _arrNews = [];
        _arrNews.push(...arrNews);
        response.data.forEach((tiding) => {
          _arrNews.push(
            <Tidings
              key={tiding.id}
              tidings={tiding}
              deletElement={setDeleteKeyElement}
            />
          );
        });

        setArrNews(_arrNews);
        if (response.data.length === pageSize) setPageIndex(pageIndex + 1);
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
