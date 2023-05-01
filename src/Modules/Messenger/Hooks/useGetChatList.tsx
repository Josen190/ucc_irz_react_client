import usePageIndex from "Hooks/usePageIndex";
import React, { useEffect, useState } from "react";
import getChatList from "../Fetch/getChatList";
import ChatButton from "../Components/ChatButton/ChatButton";
import useEndOfPage from "Hooks/useEndOfPage";

function useGetChatList(componentRef: React.RefObject<HTMLElement>) {
    const {pageIndex, nextPage} = usePageIndex();
    const [chatList, setChatList] = useState<JSX.Element[]>([]);

    useEndOfPage(nextPage, componentRef);

    useEffect(() => {
        getChatList(pageIndex).then(chats => {
            const _chatList = chats.map((chat => <ChatButton key={chat.id} chat={chat}/>))
            setChatList([...chatList, ..._chatList]);
        })
    }, [pageIndex])

    return chatList;
}

export default useGetChatList;