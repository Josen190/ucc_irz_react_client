import React, { useEffect, useState } from "react";
import ChatClass from "../../Helper/Chat";
import { Navigate, useLoaderData, useNavigate, useOutletContext } from "react-router-dom";
import InputField from "UI/InputField/InputField";
import Button from "UI/Button/Button";
import PaperPlaneOutline from "Assets/icons/PaperPlaneOutline";
import useGetMessages from "../../Hooks/useGetMessages";
import { useAppSelector } from "Hooks";
import postMessages from "../../Fetch/postMessage";

import "./Chat.scss";
import User from "Helpers/User";
import getUserFromId from "Fetch/getUserfromId";
import fetch from "Fetch/Fetch";
import InputImg from "UI/InputImg/InputImg";
import Image from "Helpers/Image";

export async function loading({ params }: any) {
  return params.id;
}

export default function NewChat() {
  const [recipient, setRecipient] = useState<User | null>(null)
  const recipientId = useLoaderData() as string;

  
  useEffect(() => {
    if (!recipientId) return;
    getUserFromId(recipientId).then((user) => {
      setRecipient(user);
    })
  }, [recipientId])
  
  const [textSendMessage, setTextSendMessage] = useState<string>();
  const [imageSendMessage, setImageSendMessage] = useState<Image | null>(null);
  const [SearchString, setSearchString] = useState<string>();
  const myId = useAppSelector(s => s.authorization.user ? s.authorization.user.id : '');
  const {messages, send: sendNewMessage} = useGetMessages(recipientId, SearchString, true)


  const send = () => {
    if (!textSendMessage) return;

    sendNewMessage(recipientId, myId, textSendMessage, imageSendMessage);
    setTextSendMessage(undefined);
  }

  
  return (
    <div className="chat">
      <div className="row">
        <p>{recipient?.getFullName()}</p>
        <InputField type="text" placeholder="поиск" onSetValue={setSearchString}></InputField>
      </div>
      <div className="list-messages">
        {messages}
      </div>
      <div className="input-message">
        <InputField type="text" placeholder="ведите сообщение" value={textSendMessage} onSetValue={setTextSendMessage}></InputField>
        <InputImg view="messenger" setImageApi={(img) => setImageSendMessage(img)}></InputImg>
        <Button type="button" onClick={send}><PaperPlaneOutline></PaperPlaneOutline></Button>
      </div>
    </div>
  );
}
