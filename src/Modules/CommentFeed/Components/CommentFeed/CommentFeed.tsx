import API from "Fetch/Api";
import Comment from "../Comment/Comment";
import CreateComment from "../CreateComment/CreateComment";
import React, { useState, useEffect } from "react";
import NewsComments from "Helpers/NewsComments";


interface Props {
  newsID: string;
}

export default function CommentFeed({ newsID }: Props) {
  const [commentArr, setCommentArr] = useState<JSX.Element[]>([]);

  useEffect(() => {
    API.getNewsComment(newsID).then((newsComments) => {
      const _commentArr: JSX.Element[] = [];
      newsComments.forEach((comment) => {
        _commentArr.push(<Comment key={comment.id} comment={comment} />);
      });
      setCommentArr(_commentArr);
    });
  }, [newsID]);

  const update = (comment: NewsComments) => {
    setCommentArr([<Comment key={comment.id} comment={comment} />, ...commentArr])
  }

  return (
    <div className="column">
      <CreateComment newsID={newsID} update={update}/>
      {commentArr}
    </div>
  );
}