import React from "react";
import { Outlet } from "react-router";
import Menu from "../../Modules/Menu/Components/Menu/Menu";
import MenuLink from "../../Modules/Menu/Components/MenuLink/MenuLink";

export default function Edit() {
  return (
    <div className="row tile">
      <main className="col-space-between">
        <Outlet />
      </main>
      <Menu>
        <MenuLink href="/edit/info">Личная информация</MenuLink>
        <MenuLink href="/edit/setting">Настройки</MenuLink>
      </Menu>
    </div>
  );
}
