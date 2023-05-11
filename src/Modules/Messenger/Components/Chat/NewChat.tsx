import React, {useEffect, useRef, useState} from "react";
import InputField from "UI/InputField/InputField";
import Button from "UI/Button/Button";
import PaperPlaneOutline from "Assets/icons/PaperPlaneOutline";
import useGetMessages from "../../Hooks/useGetMessages";
import { useAppSelector } from "Hooks";

import "./Chat.scss";
import User from "Helpers/User";
import getUserFromId from "Fetch/getUserfromId";
import InputImg from "UI/InputImg/InputImg";
import Image from "Helpers/Image";
import {useParams} from "react-router";

export default function NewChat() {
  const [recipient, setRecipient] = useState<User | null>(null)
  const { id: recipientId } = useParams<{ id: string }>();
  const ref = useRef<HTMLDivElement>(null);


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
  const {messages, sendNewMessage} = useGetMessages(ref, recipientId ?? "", SearchString)


  const send = () => {
    if (!textSendMessage) return;

    sendNewMessage(recipientId ?? "", myId, textSendMessage, imageSendMessage);
    setTextSendMessage(undefined);
  }

  
  return (
    <div className="chat">
      <div className="row">
        <p>{recipient?.getFullName()}</p>
        <InputField type="text" placeholder="поиск" onSetValue={setSearchString}></InputField>
      </div>
      <div ref={ref} className="list-messages">
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
