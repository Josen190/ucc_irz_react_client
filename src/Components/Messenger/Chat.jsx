import React, { Component } from "react";
import InputMessage from "./InputMessage";
import Message from "./Message";

export default class Chat extends Component {
  render() {
    let name = "Захаров Вячеслав Сергеевич";
    let statusUser = "online";
    return (
      <main className="chat">
        <div className="row">
          <h4>{name}</h4>
          <p>{statusUser}</p>
        </div>
        <div className="">
          <Message />
        </div>
        <InputMessage />
      </main>
    );
  }
}
