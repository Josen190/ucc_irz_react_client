import React from "react";
import Button from "../basic/Button";
import Content from "../basic/Content";
import Author from "./AuthorNews";
import API, { url_delete_news_comments_id } from "../../api/Api";
import { notifyError, notifySuccess } from "../Notifications/Notifications";
import { getContext } from "../../api/authentication/MyContexts";
export default function Comment(_a) {
    var comment = _a.comment;
    var authData = getContext().authData;
    var isMyComment = authData.myID === comment.user.id ? authData.myID !== null : false;
    var deletComment = function () {
        API.delete(url_delete_news_comments_id(comment.id))
            .then(function () {
            notifySuccess("Коментарий удалён");
        })
            .catch(function () {
            notifyError("Ошибка, коментарий не удален");
        });
    };
    return (React.createElement("div", { className: "tile" },
        React.createElement("div", { className: "row" },
            React.createElement(Author, { user: comment.user }),
            isMyComment && (React.createElement(Button, { type: "button", onClick: deletComment }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))),
        React.createElement(Content, { id: comment.id, text: comment.text })));
}
