import React from "react";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import MenuLink from "../../Components/Menu/MenuLink";

interface Props {
  UserID: string;
  children: JSX.Element | JSX.Element[];
}

export default function User({ UserID, children }: Props) {
  return (
    <>
      <Header islogin={true}></Header>,
      <div className="mg-10-auto grid-col-2 ">
        <Menu>
          <MenuLink href={`/account/${UserID}`}>Личный кабинет</MenuLink>
          <MenuLink href="/news">Новости</MenuLink>
          <MenuLink href="/messenger">Мессенджер</MenuLink>
          <MenuLink href="/calendar">Календарь</MenuLink>
        </Menu>
        {children}
      </div>
    </>
  );
}
