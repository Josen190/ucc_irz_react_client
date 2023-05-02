import usePageIndex from "Hooks/usePageIndex";
import React, { useEffect, useState } from "react";
import getMessages from "../Fetch/getMessages";
import Message from "../Components/Message/Message";

function useGetMessages(ChatId: string, SearchString?: string) {
    const { pageIndex, nextPage } = usePageIndex();
    const [messages, setmessages] = useState<JSX.Element[]>([]);

    useEffect(() => {
        getMessages(pageIndex, ChatId, SearchString).then((arrMessages) => {
            const _messages = arrMessages.map(message =>
                <Message key={message.id} message={message}></Message>)
            setmessages([..._messages, ...messages])
        })
    }, [pageIndex]);

    return messages;
}

export default useGetMessages;