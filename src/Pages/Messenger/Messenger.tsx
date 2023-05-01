import { ChatList } from "Modules/Messenger";
import React from "react";
import { Outlet } from "react-router";

export default function Messenger() {
  return (
      <main className="tile scroll-fix row">
        <ChatList />
        <Outlet/>
      </main>
  );
}
