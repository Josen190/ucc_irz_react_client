import React, { Component } from "react";
import Chat from "../Components/Messenger/Chat";
import ChatList from "../Components/Messenger/ChatList";

export default class Messenger extends Component {
  render() {
    return (
      <div className="tile scroll-fix">
        <ChatList />
        <Chat />
      </div>
    );
  }
}
