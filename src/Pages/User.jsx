import React, { Component } from "react";
import { useRef } from "react";
import { useState } from "react";
import API from "../api/Api";
import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";
import MenuLink from "../Components/Menu/MenuLink";

export default class User extends Component {
    render() {
    return (
      <>
        <Header islogin={true}></Header>
        <div className="mg-10-auto grid-col-2 ">
          <Menu>
            <MenuLink href={`/account/${this.props.UserID}`}>Личный кабинет</MenuLink>
            <MenuLink href="/news">Новости</MenuLink>
            <MenuLink href="/messenger">Мессенджер</MenuLink>
            <MenuLink href="/calendar">Календарь</MenuLink>
          </Menu>
          {this.props.children}
        </div>
      </>
    );
  }
}
