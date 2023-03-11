import React, { useContext, useState } from "react";

import Author from "./AuthorNews";
import Content from "../basic/Content";
import Like from "./Like";
import CommentsIcon from "./CommentsIcon";
import CommentFeed from "./CommentFeed";
import { authContext } from "../../api/authentication/authController";
import Button from "../basic/Button";
import { useRef } from "react";
import API, { url_delete_news_id } from "../../api/Api";
import { notifyError, notifySuccess } from "../Notifications/Notifications";
import ReactDOM from "react-dom";

export default function Tidings({ tidings, deletElement }) {
  const { authData } = useContext(authContext);
  const [isActiveCommentFeed, setIsActiveCommentFeed] = useState(false);
  const subMenu = useRef(null);
  const isMyTiding = tidings.author.id === authData.myID;

  const deleteTidings = (event) => {
    event.preventDefault();

    API.delete(url_delete_news_id(tidings.id))
      .then(() => {
        deletElement(tidings.id);
        notifySuccess("Новость удалена");
      })
      .catch(() => notifyError("Ошибка, новотсь не удалена"));
  };

  return (
    <div>
      <div className="tile">
        <div className="row">
          <Author author={tidings.author}></Author>
          {isMyTiding && (
            <div>
              <Button
                type="button"
                onClick={() => {
                  subMenu.current.className = "sub-menu-active";
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
        <Content title={tidings.title} content={tidings.text}></Content>
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
