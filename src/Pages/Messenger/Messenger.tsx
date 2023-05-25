import { ChatClass, ChatList } from "Modules/Messenger";
import React, { useState } from "react";
import { Outlet } from "react-router";
import './Messenger.scss'

export default function Messenger() {
  const [selectedChat, setSelectedChat] = useState<ChatClass | null>(null);
  return (
      <main className="tile row messenger">
        <ChatList select={setSelectedChat}/>
        <Outlet context={selectedChat}/>
      </main>
  );
}
