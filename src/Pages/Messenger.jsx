import React, { Component } from "react";
import Chat from "../Components/Messenger/Chat";
import ChatList from "../Components/Messenger/ChatList";

export default class Messenger extends Component {
  render() {
    return (
      <main className="tile scroll-fix row">
        <ChatList />
        <Chat />
      </main>
    );
  }
}
