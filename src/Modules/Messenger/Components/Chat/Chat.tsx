import React, { useRef, useState } from "react";
import ChatClass from "../../Helper/Chat";
import { Navigate, useOutletContext } from "react-router-dom";
import InputField from "UI/InputField/InputField";
import Button from "UI/Button/Button";
import PaperPlaneOutline from "Assets/icons/PaperPlaneOutline";
import useGetMessages from "../../Hooks/useGetMessages";
import { useAppSelector } from "Hooks";

import "./Chat.scss";
import InputImg from "UI/InputImg/InputImg";
import Image from "Helpers/Image";


export default function Chat() {
  const chat = useOutletContext() as ChatClass | null;
  if (!chat) {
    return <Navigate to={"/messenger"}></Navigate>;
  }
  const ref = useRef<HTMLDivElement | null>(null);
  const [textSendMessage, setTextSendMessage] = useState<string>();
  const [imageSendMessage, setImageSendMessage] = useState<Image | null>(null);
  const [SearchString, setSearchString] = useState<string>();
  const myId = useAppSelector(s => s.authorization.user ? s.authorization.user.id : '');
  const {messages, sendNewMessage} = useGetMessages(ref, chat.id, SearchString)


  const send = () => {
    if (!textSendMessage) return;

    sendNewMessage(chat.recipient.id, myId, textSendMessage, imageSendMessage);
    setTextSendMessage('');
    setImageSendMessage(null);
  }

  return (
    <div className="chat">
      <div className="row">
        <p>{chat.recipient.getFullName()}</p>
        <InputField type="text" placeholder="поиск" onSetValue={setSearchString}></InputField>
      </div>
      <div className="list-messages">
        {messages}
      </div>
      <div className="input-message">
        <InputField type="text" placeholder="ведите сообщение" Value={textSendMessage} onSetValue={setTextSendMessage}></InputField>
        <InputImg view="messenger" setImageApi={(img) => setImageSendMessage(img)} value={imageSendMessage}/>
        <Button type="button" onClick={send}><PaperPlaneOutline></PaperPlaneOutline></Button>
      </div>
    </div>
  );
}
