import React, { Component } from "react";
import Chat from "../Components/Messenger/Chat";
import ChatList from "../Components/Messenger/ChatList";
import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";
import User from "./User";

export default function Messenger() {
  return (
    <User>
      <main className="tile scroll-fix row">
        <ChatList />
        <Chat />
      </main>
    </User>
  );
}
