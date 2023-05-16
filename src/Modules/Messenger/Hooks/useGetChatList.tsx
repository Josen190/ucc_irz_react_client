import usePageIndex from "Hooks/usePageIndex";
import React, { useEffect, useState } from "react";
import getChatList from "../Fetch/getChatList";
import ChatButton from "../Components/ChatButton/ChatButton";
import Chat from "../Helper/Chat";

function useGetChatList(
    componentRef: React.RefObject<HTMLElement>, 
    setSelectedChat: React.Dispatch<React.SetStateAction<Chat | null>>
    ) {
    const { pageIndex } = usePageIndex(componentRef);
    const [chatList, setChatList] = useState<JSX.Element[]>([]);

    useEffect(() => {
        getChatList(pageIndex).then(chats => {
            const _chatList = chats.map((chat => <ChatButton key={chat.id} chat={chat} select={setSelectedChat} />))
            setChatList([...chatList, ..._chatList]);
        })
    }, [pageIndex])

    return chatList;
}

export default useGetChatList;