import Chat from "../../Helper/Chat";
import useGetChatList from "../../Hooks/useGetChatList";
import React, { useRef } from "react";
import "./ChatList.scss"

interface Props {
  select: React.Dispatch<React.SetStateAction<Chat | null>>
}


export default function ChatList({ select }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const chatList = useGetChatList(ref, select);
  
  return (
    <div ref={ref} className="chat-list">
      {chatList}
    </div>
  );
}
