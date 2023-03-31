import React from "react";
import Menu from "../Components/Menu/Menu";
import MenuLink from "../Components/Menu/MenuLink";
import { Outlet } from "react-router";
export default function Admin() {
    return (React.createElement("div", null,
        React.createElement(Menu, null,
            React.createElement(MenuLink, { href: "/admin/staff" }, "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"),
            React.createElement(MenuLink, { href: "/admin/role" }, "\u0420\u043E\u043B\u0438")),
        React.createElement("div", null,
            React.createElement(Outlet, null))));
}
