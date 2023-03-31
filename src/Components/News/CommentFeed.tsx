import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import API, { url_get_news_comments } from "../../api/Api";
import NewsComments, { PropsNewsComments } from "../../class/NewsComments";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

export default function CommentFeed({ newsID }) {
  const [commentArr, setCommentArr] = useState([]);

  useEffect(() => {
    API.get(url_get_news_comments, {
      params: { newsEntryId: newsID },
    })
      .then((response) => {
        let _commentArr = [];
        response.data.forEach((element, index) => {
          if (element as PropsNewsComments) {
            const _comment = new NewsComments(element);
            _commentArr.push(<Comment key={_comment.id} comment={_comment} />);
          }

        });
        setCommentArr(_commentArr);
      })
      .catch((error) => { });
  }, [newsID]);

  return (
    <div className="column">
      <CreateComment newsID={newsID} />
      {commentArr}
    </div>
  );
}
