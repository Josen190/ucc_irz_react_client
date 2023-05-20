import React, { useRef, useState } from "react";
import News from "Helpers/News";
import UserVisitingCard from "Components/UserVisitingCard/UserVisitingCard";
import Button from "UI/Button/Button";
import Like from "../Like/Like";
import CommentsIcon from "../CommentsIcon/CommentsIcon";
import CommentFeed from "Modules/CommentFeed";
import { useAppSelector } from "Hooks";
import { ConstSupport } from "Constatnts/role";
import ContentNews from "../ContentNews/ContentNews";



interface Props {
  tidings: News;
  deletElement: (newsId: string) => void;
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
                  <Button type="button" onClick={() => deletElement(tidings.id)}>
                    Удалить
                  </Button>
                </ol>
              </ul>
            </div>
          )}
        </div>
        <ContentNews news={tidings}></ContentNews>
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
