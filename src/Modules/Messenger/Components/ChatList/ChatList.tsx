import useGetChatList from "../../Hooks/useGetChatList";
import React, { useRef } from "react";



export default function ChatList() {
  const ref = useRef<HTMLDivElement | null>(null)
  const chatList = useGetChatList(ref);

  return (
    <div ref={ref} className="chat-list column">
      {chatList}
    </div>
  );
}
