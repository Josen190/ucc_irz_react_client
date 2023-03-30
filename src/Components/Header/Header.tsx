import React, { Component } from "react";
import Button from "../basic/Button";
import Search from "../basic/Search";

export default function Header({ islogin }) {
  const _isLogin = typeof islogin === "boolean" ? islogin : false;
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
