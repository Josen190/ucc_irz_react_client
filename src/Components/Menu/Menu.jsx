import React, { Component } from "react";
import Button from "../basic/Button";

export default class Menu extends Component {
  render() {
    return (
      <nav className="menu tile">
        <Button type="link" href="/account" value="Личный кабинет" className='mg-5-0' color='mini'/>
        <Button type="link" href="/news" value="Новости" className='mg-5-0' color='mini'/>
        <Button type="link" href="/messenger" value="Мессенджер" className='mg-5-0' color='mini'/>
        <Button type="link" href="/calendar" value="Календарь" className='mg-5-0' color='mini'/>
      </nav>
    );
  }
}
