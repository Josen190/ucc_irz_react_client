import React, { useContext, useEffect, useRef, useState } from "react";
import News from "Helpers/News";
import Image from "Helpers/Image";
import API from "Fetch/Api";
import { notifyError, notifySuccess } from "Components/Notifications/Notifications";
import UserVisitingCard from "Components/UserVisitingCard/UserVisitingCard";
import Button from "UI/Button/Button";
import Content from "Components/Content/Content";
import Like from "../Like/Like";
import CommentsIcon from "../CommentsIcon/CommentsIcon";
import CommentFeed from "Modules/CommentFeed";

interface Props {
  tidings: News;
  deletElement: any;
}

export default function Tidings({ tidings, deletElement }: Props) {
  const [isActiveCommentFeed, setIsActiveCommentFeed] = useState(false);
  const [image, setImage] = useState<Image>();
  const subMenu = useRef<HTMLUListElement>(null);
  const isMyTiding = tidings.author.isAuntification();

  const deleteTidings = (event: any) => {
    event.preventDefault();
    
    API.deleteNews(tidings.id)
      .then(() => {
        deletElement(tidings.id);
        notifySuccess("Новость удалена");
      })
      .catch(() => notifyError("Ошибка, новотсь не удалена"));
  };

  useEffect(() => {
    tidings.image?.getImg(setImage);
  }, []);

  return (
    <div>
      <div className="tile">
        <div className="row">
          <div className="row">
            <UserVisitingCard user={tidings.author}></UserVisitingCard> 
            <span>{tidings.dateTime.DatetoStr('dd-months-yyyy')}</span>
          </div>
          {isMyTiding && (
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
                  <Button type="button" onClick={(e) => deleteTidings(e)}>
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
          image={image}
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
