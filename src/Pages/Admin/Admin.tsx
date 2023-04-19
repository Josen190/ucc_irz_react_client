import React from "react";
import Menu from "../../Modules/Menu/Components/Menu/Menu";
import MenuLink from "../../Modules/Menu/Components/MenuLink/MenuLink";
import { Outlet } from "react-router";

export default function Admin() {
  return (
    <div>
      <Menu>
        <MenuLink href="/admin/staff">Сотрудники</MenuLink>
        <MenuLink href="/admin/role">Роли</MenuLink>
      </Menu>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
