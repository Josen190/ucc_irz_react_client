import React, { useContext, useEffect, useRef, useState } from "react";
import News from "Helpers/News";
import Image from "Helpers/Image";

import { notifyError, notifySuccess } from "Components/Notifications/Notifications";
import UserVisitingCard from "Components/UserVisitingCard/UserVisitingCard";
import Button from "UI/Button/Button";
import Content from "Components/Content/Content";
import Like from "../Like/Like";
import CommentsIcon from "../CommentsIcon/CommentsIcon";
import CommentFeed from "Modules/CommentFeed";
import { useAppSelector } from "Hooks";
import { ConstSupport } from "Constatnts/role";
import deleteTidings from "../../Fetch/deleteTidings";


interface Props {
  tidings: News;
  deletElement: any;
}

export default function Tidings({ tidings, deletElement }: Props) {
  const isSuuprt = tidings.isPublic &&
   useAppSelector(s => s.authorization.user ? s.authorization.user.roles.includes(ConstSupport.Id) : false);
  const [isActiveCommentFeed, setIsActiveCommentFeed] = useState(false);
  const subMenu = useRef<HTMLUListElement>(null);
  const isMyTiding = tidings.author.isAuntification();


  return (
    <div>
      <div className="tile">
        <div className="row">
          <div className="row">
            <UserVisitingCard user={tidings.author}></UserVisitingCard>
            <span>{tidings.dateTime.DatetoStr('dd-months-yyyy')}</span>
          </div>
          {(isMyTiding || isSuuprt) && (
            <div>
              <Button
                type="button"
                onClick={() => {
                  if (subMenu && subMenu.current) subMenu.current.className = "sub-menu-active";
                }}
              >
                ...
              </Button>
              <ul ref={subMenu} className="sub-menu">
                <ol>
                  <Button type="button" onClick={() => deleteTidings(tidings.id, deletElement)}>
                    Удалить
                  </Button>
                </ol>
              </ul>
            </div>
          )}
        </div>
        <Content
          title={tidings.title}
          text={tidings.clippedText}
          image={tidings.image}
          isClipped={tidings.isClipped}
          id={tidings.id}
        ></Content>
        <div className="row">
          <Like
            likesCount={tidings.likesCount}
            isLiked={tidings.isLiked}
            newsID={tidings.id}
          ></Like>
          <CommentsIcon
            commentCount={tidings.commentCount}
            active={isActiveCommentFeed}
            setActive={setIsActiveCommentFeed}
          ></CommentsIcon>
        </div>
      </div>
      {isActiveCommentFeed && <CommentFeed newsID={tidings.id} />}
    </div>
  );
}
