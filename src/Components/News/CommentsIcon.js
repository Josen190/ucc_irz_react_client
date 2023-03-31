import React from "react";
import ChatBoxOutline from "../icons/ChatBoxOutline";
export default function CommentsIcon(_a) {
    var commentCount = _a.commentCount, setActive = _a.setActive;
    var switchComments = function () {
        setActive(true);
    };
    var button = (React.createElement("button", { className: "icon row", onClick: switchComments },
        React.createElement("span", null, commentCount),
        React.createElement(ChatBoxOutline, null)));
    return React.createElement("div", { className: "icon" }, button);
}
