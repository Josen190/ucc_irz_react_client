import React from "react";
import Button from "../../../../UI/Button/Button";
import UserVisitingCard from "../../../../Components/UserVisitingCard/UserVisitingCard";
import NewsComments from "../../../../Helpers/NewsComments";
import VisitingUser from "Helpers/VisitingUser";
import Content from "Components/Content/Content";

interface Props {
  comment: NewsComments;
  deleteComment: (commentId: string) => void;
}

export default function Comment({ comment, deleteComment }: Props) {
  const isMyComment = comment.user ? comment.user.isAuntification() : false;

  return (
    <div className="tile">
      <div className="row">
        <UserVisitingCard user={comment.user ?? new VisitingUser()} />
        {isMyComment && (
          <Button type="button" onClick={() => deleteComment(comment.id)}>
            Удалить
          </Button>
        )}
      </div>
      <Content id={comment.id} text={comment.text ?? ''}></Content>
    </div>
  );
}
