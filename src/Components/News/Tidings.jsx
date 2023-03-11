import React, { useState } from "react";

import Author from "./AuthorNews";
import Content from "../basic/Content";
import Like from "./Like";
import CommentsIcon from "./CommentsIcon";
import CommentFeed from "./CommentFeed";

export default function Tidings({tidings}) {
  const [isActiveCommentFeed, setIsActiveCommentFeed] = useState(false);
  return (
    <div>
      <div className="tile">
        <Author author={tidings.author}></Author>
        <Content title={tidings.title} content={tidings.text}></Content>
        <div className="row">
          <Like likesCount={tidings.likesCount} isLiked={tidings.isLiked} newsID={tidings.id}></Like>
          <CommentsIcon
            commentCount={tidings.commentCount}
            setActive={setIsActiveCommentFeed}
          ></CommentsIcon>
        </div>
      </div>
      {isActiveCommentFeed && <CommentFeed newsID={tidings.id}/>}
    </div>
  );
}
