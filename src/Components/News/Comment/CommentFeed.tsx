import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import API, { url_get_news_comments } from "../../../Fetch/Api";
import NewsComments from "../../../Helpers/NewsComments";
import Comment from "./Comment";
import CreateComment from "./Create/CreateComment";
import PropsNewsComments from "../../../Fetch/Interface/INewsComments";

interface Props {
  newsID: string;
}

export default function CommentFeed({ newsID }: Props) {
  const [commentArr, setCommentArr] = useState([]);

  useEffect(() => {
    API.getNewsComment().then((newsComments) => {
      let _commentArr: JSX.Element[];
      newsComments.forEach((comment) => {
        _commentArr.push(<Comment key={comment.id} comment={comment} />);
      });
      setCommentArr(_commentArr);
    });
  }, [newsID]);

  return (
    <div className="column">
      <CreateComment newsID={newsID} />
      {commentArr}
    </div>
  );
}
