import React, { useState } from "react";
import API from "../../../Fetch/Api";
import SvgHeart from "../../../Constants/icons/Heart";
import SvgHeartOutline from "../../../Constants/icons/HeartOutline";
import { notifyError } from "../../Notifications/Notifications";

const size = "25px";

interface Props {
  isLiked: boolean;
  likesCount: number;
  newsID: string;
}

const Like = ({ isLiked, likesCount, newsID }: Props) => {
  const llke_off = <SvgHeart size={size}></SvgHeart>;
  const like_on = <SvgHeartOutline size={size}></SvgHeartOutline>;

  const [like, setLikeUse] = useState({
    isLiked: isLiked,
    likesCount: likesCount,
    like_use: isLiked ? llke_off : like_on,
  });
  const disableBtnProps = {
    disabled: true,
  };

  const switchLike = () => {
    disableBtnProps.disabled = false;
    let _isLiked = !like.isLiked;
    let _likesCount = like.likesCount;
    if (_isLiked) {
      API.postLike(newsID)
        .then(() => {
          _likesCount++;
          setLikeUse({
            isLiked: _isLiked,
            likesCount: _likesCount,
            like_use: llke_off,
          });
          disableBtnProps.disabled = true;
        })
        .catch(() => {
          notifyError("Ошибка, попробуйте снова");
          disableBtnProps.disabled = true;
        });
    } else {
      API.postUnlike(newsID)
        .then(() => {
          _likesCount--;
          setLikeUse({
            isLiked: _isLiked,
            likesCount: _likesCount,
            like_use: like_on,
          });
          disableBtnProps.disabled = true;
        })
        .catch(() => {
          notifyError("Ошибка, попробуйте снова");
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
