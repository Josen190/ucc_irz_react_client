import React from "react";
import { Outlet } from "react-router";
import Menu from "../../Modules/Menu/Components/Menu/Menu";
import MenuLink from "../../Modules/Menu/Components/MenuLink/MenuLink";
import "./Edit.scss"
import Button from "UI/Button/Button";
import {logOut} from "../../Modules/AuthController";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../Hooks";
export default function Edit() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
  return (
    <div className="edit-page tile">
      <main className="col-space-between">
        <Outlet />
      </main>
        <div className="edit-nav">
            <Menu>
                <MenuLink href="/edit/info">Личная информация</MenuLink>
                <MenuLink href="/edit/setting">Настройки</MenuLink>
            </Menu>
            <Button type="button" color="red" onClick={() => {
                if (!confirm("Выйти из аккаунта?"))  return;
                dispatch(logOut());
                navigate("/news");
            }}>Выйти</Button>
        </div>

    </div>
  );
}
