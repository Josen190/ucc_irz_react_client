import React from "react";
import Button from "../basic/Button";
import Search from "../basic/Search";
export default function Header(_a) {
    var islogin = _a.islogin;
    var _isLogin = typeof islogin === "boolean" ? islogin : false;
    return (React.createElement("header", null,
        React.createElement("div", { className: "content-centr" },
            React.createElement("h1", null, "IRZ")),
        _isLogin && React.createElement(Search, null),
        !_isLogin && (React.createElement(Button, { type: "link", href: "/login" }, "\u0412\u043E\u0439\u0442\u0438"))));
}
