import React, { Component } from "react";
import Button from "../Button/Button";
import Search from "../Search/Search";

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
