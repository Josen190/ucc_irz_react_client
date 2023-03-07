import React, { useState } from "react";
import SvgHeart from "../icons/Heart";
import SvgHeartOutline from "../icons/HeartOutline";

const size = "25px";

const Like = ({ isLiked, likesCount }) => {
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
    
    if (thisIsLiked) {
      thisLikesCount++;
      setLikeUse({
        isLiked: thisIsLiked,
        likesCount: thisLikesCount,
        like_use: llke_off,
      });
    } else {
      thisLikesCount--;
      setLikeUse({
        isLiked: thisIsLiked,
        likesCount: thisLikesCount,
        like_use: like_on,
      });
    }

    disableBtnProps.disabled = true;
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
