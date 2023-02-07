import React, { Component } from "react";
import Chat from "../Components/Messenger/Chat";
import ChatList from "../Components/Messenger/ChatList";
import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";

export default class Messenger extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div className="mg-10-auto grid-col-2 ">
          <Menu></Menu>

          <main className="tile scroll-fix row">
            <ChatList />
            <Chat />
          </main>
        </div>
      </>
    );
  }
}
