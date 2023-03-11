import React, { useContext, useEffect } from "react";
import Button from "../basic/Button";
import Content from "../basic/Content";
import Author from "./AuthorNews";
import { authContext } from "../../api/authentication/authController";
import API, { url_delete_news_comments_id } from "../../api/Api";
import { notifyError, notifySuccess } from "../Notifications/Notifications";

export default function Comment({ data }) {
  const { authData } = useContext(authContext);
  let isMyComment =
    authData.myID === data.user.id ? authData.myID !== null : false;

  const deletComment = () => {
    API.delete(url_delete_news_comments_id(data.id))
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
        <Author author={data.user} />
        {isMyComment && (
          <Button type="button" onClick={deletComment}>
            Удалить
          </Button>
        )}
      </div>
      <Content content={data.text}></Content>
    </div>
  );
}
