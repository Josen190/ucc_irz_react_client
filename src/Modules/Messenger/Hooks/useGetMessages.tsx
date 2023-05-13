import usePageIndex from "Hooks/usePageIndex";
import React, {useEffect, useRef, useState} from "react";
import getMessages from "../Fetch/getMessages";
import Message from "../Components/Message/Message";
import fetch from "Fetch/Fetch";
import postMessages from "../Fetch/postMessage";
import Image from "Helpers/Image";
import ClassMessage from "../Helper/Message";
import deleteMessage from "../Fetch/deleteMessage";
import {notifyError} from "Components/Notifications/Notifications";

function useGetMessages(
    ref: React.MutableRefObject<HTMLDivElement | null>,
    ChatId: string, SearchString?: string
) {
    const { pageIndex, restart } = usePageIndex(ref);
    const [messages, setMessages] = useState<JSX.Element[]>([]);


    const deleteMessageInArr = (messageId: string) => {
        deleteMessage(messageId).then(() => {
            setMessages((prev) => {
                return prev.filter((m) => m.key !== messageId);
            })
        }).catch((err) => {
            console.log(err);

            notifyError("Ошибка")
        })

    }

    const setValidMessages = (message: ClassMessage) => {
        setMessages((prev) => {
            if (prev.length > 0 && prev[0].key === message.id) return prev;
            return [<Message key={message.id} message={message} deleteMessage={deleteMessageInArr}></Message>, ...prev]
        })
    }

    const prevChatId = useRef<string>();
    const prevSearchString = useRef<string>();

    useEffect(() => {
        fetch.hubStart().then(() => {
            fetch.onMessage((message) => setValidMessages(message))
        }).catch(() => {
            console.error("неудалось подключиться к хабу чата");
        });
    }, [])

    useEffect(() => {
        let prevMessages = messages;
        if (!prevChatId.current
            || prevChatId.current !== ChatId || prevSearchString.current !== SearchString) {
            setMessages([]);
            prevMessages = [];
            restart();
        }

        prevChatId.current = ChatId;
        prevSearchString.current = SearchString;

        getMessages(pageIndex, ChatId, SearchString).then((arrMessages) => {
            const _messages = arrMessages.map(message =>
                <Message key={message.id} message={message} deleteMessage={deleteMessageInArr}></Message>)
            setMessages([..._messages, ...prevMessages])
        })
    }, [pageIndex, ChatId, SearchString]);

    

    const sendNewMessage = (userId: string, myId: string, text: string, image: Image | null) => {
        postMessages(userId, myId, text, image).catch(() => notifyError("ошибка, сообщение не отправлено"));
    }

    return { messages, sendNewMessage };
}

export default useGetMessages;