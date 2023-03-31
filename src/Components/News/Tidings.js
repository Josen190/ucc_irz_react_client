import React, { useEffect, useState } from "react";
import Author from "./AuthorNews";
import Content from "../basic/Content";
import Like from "./Like";
import CommentsIcon from "./CommentsIcon";
import CommentFeed from "./CommentFeed";
import Button from "../basic/Button";
import { useRef } from "react";
import API, { url_delete_news_id } from "../../api/Api";
import { notifyError, notifySuccess } from "../Notifications/Notifications";
import { getContext } from "../../api/authentication/MyContexts";
export default function Tidings(_a) {
    var tidings = _a.tidings, deletElement = _a.deletElement;
    var authData = getContext().authData;
    var _b = useState(false), isActiveCommentFeed = _b[0], setIsActiveCommentFeed = _b[1];
    var _c = useState(null), image = _c[0], setImage = _c[1];
    var subMenu = useRef(null);
    var isMyTiding = tidings.author.id === authData.myID;
    var deleteTidings = function (event) {
        event.preventDefault();
        API.delete(url_delete_news_id(tidings.id))
            .then(function () {
            deletElement(tidings.id);
            notifySuccess("Новость удалена");
        })
            .catch(function () { return notifyError("Ошибка, новотсь не удалена"); });
    };
    useEffect(function () {
        tidings.image.getImg(setImage);
    }, []);
    return (React.createElement("div", null,
        React.createElement("div", { className: "tile" },
            React.createElement("div", { className: "row" },
                React.createElement(Author, { user: tidings.author }),
                isMyTiding && (React.createElement("div", null,
                    React.createElement(Button, { type: "button", onClick: function () {
                            subMenu.current.className = "sub-menu-active";
                        } }, "..."),
                    React.createElement("ul", { ref: subMenu, className: "sub-menu" },
                        React.createElement("ol", null,
                            React.createElement(Button, { type: "button", onClick: function (e) { return deleteTidings(e); } }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")))))),
            React.createElement(Content, { title: tidings.title, text: tidings.clippedText, image: image, isClipped: tidings.isClipped, id: tidings.id }),
            React.createElement("div", { className: "row" },
                React.createElement(Like, { likesCount: tidings.likesCount, isLiked: tidings.isLiked, newsID: tidings.id }),
                React.createElement(CommentsIcon, { commentCount: tidings.commentCount, setActive: setIsActiveCommentFeed }))),
        isActiveCommentFeed && React.createElement(CommentFeed, { newsID: tidings.id })));
}
