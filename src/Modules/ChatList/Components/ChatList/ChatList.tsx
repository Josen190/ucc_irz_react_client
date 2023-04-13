import React from "react";

interface Props{
  children: JSX.Element[];
}

export default function ChatList({children}: Props) {
  return (
    <div className="chat-list column">
      {children}
    </div>
  );
}
