import React, { Component } from "react";
import ChatBoxOutline from "../icons/ChatBoxOutline";

export default function CommentsIcon({ commentCount, setActive }) {
  const disableBtnProps = {};
  const switchComments = () => {
    disableBtnProps.disabled = false;
    setActive(true);
    disableBtnProps.disabled = true;
  };

  let button = (
    <button {...disableBtnProps} className="icon row" onClick={switchComments}>
      <span>{commentCount}</span>
      <ChatBoxOutline></ChatBoxOutline>
    </button>
  );

  return <div className="icon">{button}</div>;
}
