import React from "react";
import Button from "../../../../UI/Button/Button";
import Search from "../Search/Search";
import { useAppSelector } from "Hooks";
import "./header.scss"

export default function Header() {
  const {isLogin, user}= useAppSelector((s)=> s.authorization);
  const isAdmin = user?.roles.indexOf("Admin") || user?.roles.indexOf("SuperAdmin")

  return (
    <header>
      <div className="logo">
        <h1>IRZ</h1>
      </div>
      {isLogin && <Search></Search>}
      {!isLogin && (
        <Button type="link" href="/login">
          Войти
        </Button>
      )}
      {isAdmin && <Button type="link" href="/admin">Панель админестратора</Button>}
    </header>
  );
}
