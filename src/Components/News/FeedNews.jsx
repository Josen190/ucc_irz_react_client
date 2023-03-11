import React, { useEffect, useState } from "react";
import API, { url_get_news } from "../../api/Api";
import Tidings from "./Tidings";

export default function FeedNews({ userID, publicOnly, likedOnly, setUpdate }) {
  const [arrNews, setArrNews] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

  const getNews = () => {
    const _userID = userID === undefined ? null : userID;
    const _publicOnly = publicOnly === undefined ? null : publicOnly;
    const _likedOnly = likedOnly === undefined ? null : likedOnly;
    const pageSize = 10;

    const params = {
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
    console.log("Новости");
    API.get(url_get_news, { params: params })
      .then((response) => {
        let _arrNews = [];
        _arrNews.push(...arrNews);
        response.data.forEach((tiding) => {
          _arrNews.push(<Tidings key={_arrNews.length} tidings={tiding} />);
        });
        console.log(_arrNews);

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
    if (typeof setUpdate === "function") setUpdate({update: update});
  }, [setUpdate]);

  return <main className="column">{arrNews}</main>;
}
