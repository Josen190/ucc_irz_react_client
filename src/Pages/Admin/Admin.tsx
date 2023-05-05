import React, { useEffect } from "react";
import Menu from "../../Modules/Menu/Components/Menu/Menu";
import MenuLink from "../../Modules/Menu/Components/MenuLink/MenuLink";
import { Outlet, useNavigate } from "react-router";

import "./Admin.scss"
import { useAppSelector } from "Hooks";


export default function Admin() {

  const { isLogin } = useAppSelector((state) => state.authorization)
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/news");
    }
  }, [isLogin]);

  return (
    <div className="admin-page">
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
