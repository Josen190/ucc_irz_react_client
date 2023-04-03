import React, { useContext } from "react";
import Button from "../../Button/Button";
import Content from "../../Content/Content";
import Author from "../AuthorNews";
import API, { url_delete_news_comments_id } from "../../../Fetch/Api";
import { notifyError, notifySuccess } from "../../Notifications/Notifications";
import NewsComments from "../../../Helpers/NewsComments";
import authContext from "../../../Constants/MyContext/MyContexts";

interface Props {
  comment: NewsComments;
}

export default function Comment({ comment }: Props) {
  const { authData } = useContext(authContext);
  let isMyComment = authData.user ? authData.user.id === comment.id : false;

  const deletComment = () => {
    API.deletComment(comment.id)
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
