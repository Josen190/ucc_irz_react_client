import React, { useState } from "react";
import ChatClass from "../../Helper/Chat";
import { useNavigate, useOutletContext } from "react-router-dom";
import InputField from "UI/InputField/InputField";
import Button from "UI/Button/Button";
import PaperPlaneOutline from "Assets/icons/PaperPlaneOutline";
import useGetMessages from "../../Hooks/useGetMessages";
import { useAppSelector } from "Hooks";
import postMessages from "../../Fetch/postMessage";

import "./Chat.scss";


export default function Chat() {
  const chat = useOutletContext() as ChatClass | null;
  if (!chat) {
    const navigate = useNavigate();
    navigate("/messenger");
    return;
  }
  const myId = useAppSelector(s => s.authorization.user ? s.authorization.user.id : '');
  const messages = useGetMessages(chat.id)
  const [sendMessege, setSendMessage] = useState<string>();

  const send = () => {
    if (!sendMessege) return;

    postMessages(chat.recipient.id,myId, sendMessege, null);
  }

  return (
    <div className="chat">
      <div className="row">
        <p>{chat.recipient.getFullName()}</p>
      </div>
      <div className="list-messages">
        {messages}
      </div>
      <div className="input-message">
        <InputField type="text" placeholder="ведите сообщение" onSetValue={setSendMessage}></InputField>
        <Button type="button" onClick={send}><PaperPlaneOutline></PaperPlaneOutline></Button>
      </div>
    </div>
  );
}
