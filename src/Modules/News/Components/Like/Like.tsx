import React, { useState } from "react";

import SvgHeart from "../../../../Assets/icons/Heart";
import SvgHeartOutline from "../../../../Assets/icons/HeartOutline";
import { notifyError } from "Components/Notifications/Notifications";
import Button from "UI/Button/Button";
import ILikeStatus from "../../Types/TypeLike";
import switchLike from "../../Fetch/fetchLike";

const size = "25px";

interface Props {
  isLiked: boolean;
  likesCount: number;
  newsID: string;
}

const Like = ({ isLiked, likesCount, newsID }: Props) => {
  const llke_off = <SvgHeart size={size}></SvgHeart>;
  const like_on = <SvgHeartOutline size={size}></SvgHeartOutline>;
  const [disabled, setDisabled] = useState(false);

  const [like, setLikeUse] = useState<ILikeStatus>({
    isLiked: isLiked,
    likesCount: likesCount,
    like_use: isLiked ? llke_off : like_on,
  });




  return <div className="icon">
    <Button type="button" onClick={() => {
      setDisabled(true);
      switchLike(newsID, like, llke_off, like_on).then((likeStatus) => {
        setDisabled(false);
        setLikeUse(likeStatus);
    }).catch(() => {
      notifyError("Ошибка, попробуйте снова");
      setDisabled(false);
      })
  }} className="icon row">
      <span>{like.likesCount}</span>
      {like.like_use}
    </Button>
  </div>;
};

export default Like;
