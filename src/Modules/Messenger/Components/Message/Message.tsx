import Avatar from "Components/Avatar/Avatar";
import MessageClass from "../../Helper/Message";
import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import Chat from "../../Helper/Chat";
import { useAppSelector } from "Hooks";

interface Props {
  message: MessageClass
}

import './Message.scss'

export default function Message({ message }: Props) {
  const chat = useOutletContext() as Chat;
  if (!chat) return <></>;
  const myName = useAppSelector(s => s.authorization.user?.firstName);
  const isMy = chat.recipient.id !== message.senderId;
  const senderName = isMy ? myName : chat.recipient.firstName;
  console.log(senderName);


  return (
    <div className={`message ${isMy ? "my" : ''}`}>
      {/* <Avatar type="mini" /> */}
      <div className="column">
        <div className="head">
          <Link to={`/account/${message.senderId}`}>{senderName}</Link>
          <span>{message.dateTime.DatetoStr('dd-months-yyyy hh:mm')}</span>
        </div>
        <div>
          {message.text}
        </div>
      </div>
    </div>
  );
}
