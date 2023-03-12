import React from "react";
import { Outlet } from "react-router";
import Menu from "../Components/Menu/Menu";
import MenuLink from "../Components/Menu/MenuLink";

export default function Edit() {
  return (
    <div className="row">
      <main className="tile col-space-between">
        <Outlet />
      </main>
      <Menu>
        <MenuLink href="/edit/info">Личная информация</MenuLink>
        <MenuLink href="/edit/setting">Настройки</MenuLink>
      </Menu>
    </div>
  );
}
