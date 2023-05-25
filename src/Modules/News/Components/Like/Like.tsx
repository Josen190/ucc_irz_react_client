import React, { useState } from "react";

import SvgHeart from "../../../../Assets/icons/Heart";
import SvgHeartOutline from "../../../../Assets/icons/HeartOutline";
import { notifyError } from "Components/Notifications/Notifications";
import Button from "UI/Button/Button";
import ILikeStatus from "../../Types/TypeLike";
import switchLike from "../../Fetch/fetchLike";
import "./Like.scss";

const size = "25px";

interface Props {
  isLiked: boolean;
  likesCount: number;
  newsID: string;
}

const Like = ({ isLiked, likesCount, newsID }: Props) => {
  const like_off = <SvgHeart size={size}></SvgHeart>;
  const like_on = <SvgHeartOutline size={size}></SvgHeartOutline>;
  const [disabled, setDisabled] = useState(false);

  const [likeStatus, setLikeStatus] = useState<ILikeStatus>({
    isLiked: isLiked,
    likesCount: likesCount,
    like_use: isLiked ? like_off : like_on,
  });


  return <div className="like-icon">
    <Button
        type="button"
        disabled={disabled}
        onClick={() => {
      setDisabled(true);
      switchLike(newsID, likeStatus, like_off, like_on).then((likeStatus) => {
        setDisabled(false);
        setLikeStatus(likeStatus);
    }).catch(() => {
      notifyError("Ошибка, попробуйте снова");
      setDisabled(false);
      })
  }} >
      <span>{likeStatus.likesCount}</span>
      {likeStatus.like_use}
    </Button>
  </div>;
};

export default Like;
