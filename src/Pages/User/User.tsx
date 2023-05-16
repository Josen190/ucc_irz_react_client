import React from "react";
import Menu from "../../Modules/Menu/Components/Menu/Menu";
import MenuLink from "../../Modules/Menu/Components/MenuLink/MenuLink";

import "./User.scss";

interface Props {
  UserID: string;
  children: JSX.Element | JSX.Element[];
}

export default function User({ UserID, children }: Props) {
  return (
      <div className="box-user">
        <Menu>
          <MenuLink href={`/account/${UserID}`}>Личный кабинет</MenuLink>
          <MenuLink href="/news">Новости</MenuLink>
          <MenuLink href="/messenger">Мессенджер</MenuLink>
          <MenuLink href="/calendar">Календарь</MenuLink>
        </Menu>
        {children}
      </div>
  );
}
