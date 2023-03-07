import React, { useState } from "react";

import Author from "./AuthorNews";
import Content from "../basic/Content";
import Like from "./Like";
import CommentsIcon from "./CommentsIcon";
import CommentFeed from "./CommentFeed";

export default function Tidings({
  title,
  text,
  likesCount,
  commentCount,
  author,
  isLiked,
}) {
  const [isActiveCommentFeed, setIsActiveCommentFeed] = useState(false);
  console.log(isActiveCommentFeed);
  return (
    <div>
      <div className="tile">
        <Author author={author}></Author>
        <Content title={title} content={text}></Content>
        <div className="row">
          <Like likesCount={likesCount} isLiked={isLiked}></Like>
          <CommentsIcon
            commentCount={commentCount}
            setActive={setIsActiveCommentFeed}
          ></CommentsIcon>
        </div>
      </div>
      {isActiveCommentFeed && <CommentFeed />}
    </div>
  );
}
