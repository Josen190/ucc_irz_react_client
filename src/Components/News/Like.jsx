import React, { useState } from "react";
import API, {
  url_post_likes_like_news_entry,
  url_post_likes_unlike_news_entry,
} from "../../api/Api";
import SvgHeart from "../icons/Heart";
import SvgHeartOutline from "../icons/HeartOutline";
import { notifyError } from "../Notifications/Notifications";

const size = "25px";

const Like = ({ isLiked, likesCount, newsID }) => {
  const llke_off = <SvgHeart size={size}></SvgHeart>;
  const like_on = <SvgHeartOutline size={size}></SvgHeartOutline>;

  const [like, setLikeUse] = useState({
    isLiked: isLiked,
    likesCount: likesCount,
    like_use: isLiked ? llke_off : like_on,
  });
  const disableBtnProps = {};

  const switchLike = () => {
    disableBtnProps.disabled = false;
    let thisIsLiked = !like.isLiked;
    let thisLikesCount = like.likesCount;
    const params = {};
    if (typeof newsID === 'string'){
      params.newsEntryId = newsID;
    } 

    if (thisIsLiked) {
      API.post(url_post_likes_like_news_entry, undefined,{
        params: params,
      }).then(() => {
        thisLikesCount++;
        setLikeUse({
          isLiked: thisIsLiked,
          likesCount: thisLikesCount,
          like_use: llke_off,
        });
        disableBtnProps.disabled = true;
      }).catch(() => {
        notifyError("Ошибка, попробуйте снова")
        disableBtnProps.disabled = true;
      });
    } else {
      API.post(url_post_likes_unlike_news_entry, {
        params: params,
      }).then(() => {
        thisLikesCount--;
        setLikeUse({
          isLiked: thisIsLiked,
          likesCount: thisLikesCount,
          like_use: like_on,
        });
        disableBtnProps.disabled = true;
      }).catch(() => {
        notifyError("Ошибка, попробуйте снова")
        disableBtnProps.disabled = true;
      });
    }

    
  };

  let button = (
    <button {...disableBtnProps} onClick={switchLike} className="icon row">
      <span>{like.likesCount}</span>
      {like.like_use}
    </button>
  );

  return <div className="icon">{button}</div>;
};

export default Like;
