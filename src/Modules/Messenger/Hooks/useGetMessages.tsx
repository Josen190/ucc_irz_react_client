import usePageIndex from "Hooks/usePageIndex";
import React, { useEffect, useRef, useState } from "react";
import getMessages from "../Fetch/getMessages";
import Message from "../Components/Message/Message";
import fetch from "Fetch/Fetch";
import postMessages from "../Fetch/postMessage";
import Image from "Helpers/Image";
import ClassMessage from "../Helper/Message";
import deleteMessage from "../Fetch/deleteMessage";
import { notifyError, notifySuccess } from "Components/Notifications/Notifications";
import useEndOfPage from "Hooks/useEndOfPage";

function useGetMessages(ref: React.MutableRefObject<HTMLDivElement | null>, ChatId: string, SearchString?: string) {
    const { pageIndex, nextPage, restart } = usePageIndex();
    const [messages, setmessages] = useState<JSX.Element[]>([]);
    const [isEnd, setIsEnd] = useState(false)

    // useEndOfPage(nextPage, ref, isEnd);

    const deleteMessageInArr = (messageId: string) => {
        deleteMessage(messageId).then(() => {
            setmessages((prev) => {
                const newMessages = prev.filter((m) => m.key !== messageId)
                return newMessages;
            })
        }).catch((err) => {
            console.log(err);

            notifyError("Ошибка")
        })

    }

    const setValidMessages = (message: ClassMessage) => {
        setmessages((prev) => {
            if (prev.length > 0 && prev[0].key === message.id) return prev;
            return [<Message key={message.id} message={message} deleteMessage={deleteMessageInArr}></Message>, ...prev]
        })
    }

    const prevChatId = useRef<string>();
    const prevSearchString = useRef<string>();

    useEffect(() => {
        fetch.hubStart();
        fetch.onMessage((message) => setValidMessages(message))
    }, [])

    useEffect(() => {
        let prevMessages = messages;
        if (!prevChatId.current
            || prevChatId.current !== ChatId || prevSearchString.current !== SearchString) {
            setmessages([]);
            prevMessages = [];
            setIsEnd(false);
            restart();
        }

        prevChatId.current = ChatId;
        prevSearchString.current = SearchString;

        getMessages(pageIndex, ChatId, SearchString).then((arrMessages) => {
            const _messages = arrMessages.map(message =>
                <Message key={message.id} message={message} deleteMessage={deleteMessageInArr}></Message>)
            setmessages([..._messages, ...prevMessages])
        })
    }, [pageIndex, ChatId, SearchString]);

    

    const sendNewMessage = (userId: string, myId: string, text: string, image: Image | null) => {
        postMessages(userId, myId, text, image).then((message) => setValidMessages(message));
    }

    return { messages, sendNewMessage };
}

export default useGetMessages;