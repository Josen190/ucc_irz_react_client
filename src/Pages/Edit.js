import React from "react";
import { Outlet } from "react-router";
import Menu from "../Components/Menu/Menu";
import MenuLink from "../Components/Menu/MenuLink";
export default function Edit() {
    return (React.createElement("div", { className: "row tile" },
        React.createElement("main", { className: "col-space-between" },
            React.createElement(Outlet, null)),
        React.createElement(Menu, null,
            React.createElement(MenuLink, { href: "/edit/info" }, "\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"),
            React.createElement(MenuLink, { href: "/edit/setting" }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"))));
}
