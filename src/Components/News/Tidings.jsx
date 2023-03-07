import React, { setState } from "react";

import Author from "./AuthorNews";
import Content from "../basic/Content";
import Like from "./Like";
import CommentsIcon from "./CommentsIcon";
import CommentFeed from "./CommentFeed";

export default function Tidings(
  author,
  title,
  text,
  likesCount,
  isLiked,
  commentCount
) {

  const [isActiveCommentFeed, setIsActiveCommentFeed] = setState(false);
  return (
    <div>
      <div className="tile">
        <Author author={author}></Author>
        <Content title={title} content={text}></Content>
        <div className="row">
          <Like likesCount={likesCount} isLiked={isLiked}></Like>
          <CommentsIcon commentCount={commentCount} onClick={setIsActiveCommentFeed}></CommentsIcon>
        </div>
      </div>
      {isActiveCommentFeed && <CommentFeed/>}
    </div>
  );
}
