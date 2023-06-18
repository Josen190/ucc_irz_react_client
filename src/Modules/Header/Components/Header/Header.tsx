import React from "react";
import Button from "../../../../UI/Button/Button";
import Search from "../Search/Search";
import { useAppSelector } from "Hooks";
import "./header.scss"
import { DropDownForm } from "UI/Form";

export default function Header() {
  const {isLogin, user}= useAppSelector((s)=> s.authorization);
  const isAdmin = user?.roles.indexOf("Admin") || user?.roles.indexOf("SuperAdmin")



  return (
    <header>
      <div className="logo">
        <h1>IRZ</h1>
      </div>
      <DropDownForm title="ок" confirm={() => {}} bind={"открыть"}>
        <p>Форма</p>
      </DropDownForm>

      {isLogin && <Search></Search>}
      {!isLogin && (
        <Button type="button">
          Войти
        </Button>
      )}
      {isAdmin && <Button type="link" to="/admin">Панель админестратора</Button>}
    </header>
  );
}
