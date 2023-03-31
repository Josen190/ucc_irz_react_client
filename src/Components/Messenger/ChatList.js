import React from "react";
import Button from "../basic/Button";
import "./messenger.css";
export default function ChatList() {
    return (React.createElement("div", { className: "chat-list column" },
        React.createElement(Button, { type: "link", color: "mini" }, "\u0447\u0430\u0442 1"),
        React.createElement(Button, { type: "link", color: "mini" }, "\u0447\u0430\u0442 1"),
        React.createElement(Button, { type: "link", color: "mini" }, "\u0447\u0430\u0442 1"),
        React.createElement(Button, { type: "link", color: "mini" }, "\u0447\u0430\u0442 1"),
        React.createElement(Button, { type: "link", color: "mini" }, "\u0447\u0430\u0442 1")));
}
