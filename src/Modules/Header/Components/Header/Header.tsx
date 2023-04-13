import React, { Component, useContext } from "react";
import Button from "../../../../UI/Button/Button";
import Search from "../../../Search/Components/Search/Search";
import { IAuthContext, authContext } from "Modules/AuthController";



export default function Header() {
  const {authData} = useContext(authContext) as IAuthContext;
  const _isLogin = authData.user ? true : false;

  return (
    <header>
      <div className="content-centr">
        <h1>IRZ</h1>
      </div>
      {_isLogin && <Search></Search>}
      {!_isLogin && (
        <Button type="link" href="/login">
          Войти
        </Button>
      )}
    </header>
  );
}
