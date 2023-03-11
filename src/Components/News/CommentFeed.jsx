import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import API, { url_get_news_comments } from "../../api/Api";
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
          _commentArr.push(<Comment key={index} data={element} />);
        });
        setCommentArr(_commentArr);
      })
      .catch((error) => {});
  }, [newsID]);

  return (
    <div className="column">
      <CreateComment newsID={newsID} />
      {this.state.commentArr}
    </div>
  );
}
