import React, { useContext } from "react";
import Button from "../../../../UI/Button/Button";
import UserVisitingCard from "../../../../Components/UserVisitingCard/UserVisitingCard";
import NewsComments from "../../../../Helpers/NewsComments";
import authContext, { IAuthContext } from "../../../AuthController/Constants/MyContext/MyContexts";
import MinUser from "Helpers/MinUser";
import deletComment from "Modules/CommentFeed/Fetch/deletComment";
import Content from "Components/Content/Content";

interface Props {
  comment: NewsComments;
}

export default function Comment({ comment }: Props) {
  const { authData } = useContext(authContext) as IAuthContext;
  const isMyComment = authData.user ? authData.user.id === comment.id : false;


  return (
    <div className="tile">
      <div className="row">
        <UserVisitingCard user={comment.user ?? new MinUser()} />
        {isMyComment && (
          <Button type="button" onClick={() => deletComment(comment.id)}>
            Удалить
          </Button>
        )}
      </div>
      <Content id={comment.id} text={comment.text}></Content>
    </div>
  );
}
