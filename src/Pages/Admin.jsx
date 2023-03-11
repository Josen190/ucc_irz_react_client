import React, { Component } from "react";
import Menu from "../Components/Menu/Menu";
import MenuLink from "../Components/Menu/MenuLink";
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
