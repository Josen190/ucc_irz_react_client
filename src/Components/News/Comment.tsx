import React, { useContext, useEffect } from "react";
import Button from "../basic/Button";
import Content from "../basic/Content";
import Author from "./AuthorNews";
import { authContext } from "../../api/authentication/authController";
import API, { url_delete_news_comments_id } from "../../api/Api";
import { notifyError, notifySuccess } from "../Notifications/Notifications";
import { getContext } from "../../api/authentication/MyContexts";
import NewsComments from "../../class/NewsComments";

interface Props{
  comment: NewsComments;
}

export default function Comment({ comment }: Props) {
  const { authData } = getContext();
  let isMyComment =
    authData.myID === comment.user.id ? authData.myID !== null : false;

  const deletComment = () => {
    API.delete(url_delete_news_comments_id(comment.id))
      .then(() => {
        notifySuccess("Коментарий удалён");
      })
      .catch(() => {
        notifyError("Ошибка, коментарий не удален");
      });
  };

  return (
    <div className="tile">
      <div className="row">
        <Author user={comment.user} />
        {isMyComment && (
          <Button type="button" onClick={deletComment}>
            Удалить
          </Button>
        )}
      </div>
      <Content id={comment.id} text={comment.text}></Content>
    </div>
  );
}
