import React, { Component, useContext } from "react";
import Button from "../../../../UI/Button/Button";
import Search from "../../../Search/Components/Search/Search";
import { useAppSelector } from "Hooks";



export default function Header() {
  const isLogin = useAppSelector((s)=> s.authorization.authorization.authorization.isLogin);

  return (
    <header>
      <div className="content-centr">
        <h1>IRZ</h1>
      </div>
      {isLogin && <Search></Search>}
      {!isLogin && (
        <Button type="link" href="/login">
          Войти
        </Button>
      )}
    </header>
  );
}
