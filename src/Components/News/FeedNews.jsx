import React, { useEffect, useState } from "react";
import API, { url_get_news } from "../../api/Api";
import Tidings from "./Tidings";

export default function FeedNews({ userID, publicOnly, likedOnly }) {
  const [arrNews, setArrNews] = useState([]);
  const _userID = userID === undefined ? null : userID;
  const _publicOnly = publicOnly === undefined ? null : publicOnly;
  const _likedOnly = likedOnly === undefined ? null : likedOnly;

  useEffect(() => {
    const params = {};
    if (_userID != null) {
      params.AuthorId = _userID;
    }

    if (_publicOnly != null) {
      params.PublicOnly = _publicOnly;
    }

    if (_likedOnly != null) {
      params.LikedOnly = _likedOnly;
    }

    console.log("1");
    API.get(url_get_news, { params: params })
      .then((response) => {
        let arrNews = [];
        response.data.forEach((tiding, index) => {
          arrNews.push(
            <Tidings
              key={index}
              id={tiding.id}
              title={tiding.title}
              text={tiding.text}
              likesCount={tiding.likesCount}
              commentCount={tiding.commentCount}
              author={tiding.author}
              isLiked={tiding.isLiked}
            />
          );
        });
        setArrNews(arrNews);
      })
      .catch((error) => {});
  }, [_userID, _publicOnly, _likedOnly]);

  return <main className="column">{arrNews}</main>;
}
