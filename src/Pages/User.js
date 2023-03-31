import React from "react";
import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";
import MenuLink from "../Components/Menu/MenuLink";
export default function User(_a) {
    var UserID = _a.UserID, children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, { islogin: true }),
        ",",
        React.createElement("div", { className: "mg-10-auto grid-col-2 " },
            React.createElement(Menu, null,
                React.createElement(MenuLink, { href: "/account/".concat(UserID) }, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"),
                React.createElement(MenuLink, { href: "/news" }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438"),
                React.createElement(MenuLink, { href: "/messenger" }, "\u041C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440"),
                React.createElement(MenuLink, { href: "/calendar" }, "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C")),
            children)));
}
