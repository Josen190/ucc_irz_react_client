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
import { authContext, IAuthContext } from "Modules/AuthController";

interface Props {
  tidings: News;
  deletElement: any;
}

export default function Tidings({ tidings, deletElement }: Props) {
  const { authData } = useContext(authContext) as IAuthContext;
  const [isActiveCommentFeed, setIsActiveCommentFeed] = useState(false);
  const [image, setImage] = useState<Image>();
  const subMenu = useRef<HTMLUListElement>(null);
  const isMyTiding = authData.user ? tidings.author.id === authData.user.id : false;

  const deleteTidings = (event: any) => {
    event.preventDefault();
    const api = new API();
    api.deleteNews(tidings.id)
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
          <UserVisitingCard user={tidings.author}></UserVisitingCard>
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
            setActive={setIsActiveCommentFeed}
          ></CommentsIcon>
        </div>
      </div>
      {isActiveCommentFeed && <CommentFeed newsID={tidings.id} />}
    </div>
  );
}
