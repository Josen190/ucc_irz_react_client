import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import API, { url_get_news_comments } from "../../api/Api";
import NewsComments from "../../class/NewsComments";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
export default function CommentFeed(_a) {
    var newsID = _a.newsID;
    var _b = useState([]), commentArr = _b[0], setCommentArr = _b[1];
    useEffect(function () {
        API.get(url_get_news_comments, {
            params: { newsEntryId: newsID },
        })
            .then(function (response) {
            var _commentArr = [];
            response.data.forEach(function (element, index) {
                if (element) {
                    var _comment = new NewsComments(element);
                    _commentArr.push(React.createElement(Comment, { key: _comment.id, comment: _comment }));
                }
            });
            setCommentArr(_commentArr);
        })
            .catch(function (error) { });
    }, [newsID]);
    return (React.createElement("div", { className: "column" },
        React.createElement(CreateComment, { newsID: newsID }),
        commentArr));
}
