import React, { Component } from "react";
import InputMessage from "../InputMessage/InputMessage";
import Message from "../Message/Message";

export default function Chat() {
  let name = "Захаров Вячеслав Сергеевич";
  let statusUser = "online";
  return (
    <main className="chat">
      <div className="row">
        <h4>{name}</h4>
        <p>{statusUser}</p>
      </div>
      <div className="">{/* <Message /> */}</div>
      {/* <InputMessage /> */}
    </main>
  );
}
