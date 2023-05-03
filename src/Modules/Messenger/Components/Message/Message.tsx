import Avatar from "Components/Avatar/Avatar";
import MessageClass from "../../Helper/Message";
import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import Chat from "../../Helper/Chat";
import { useAppSelector } from "Hooks";
import './Message.scss'
import Img from "UI/Img/Img";
import Button from "UI/Button/Button";


interface Props {
  message: MessageClass;
  deleteMessage: (messageId: string) => void;
}



export default function Message({ message, deleteMessage}: Props) {
  const chat = useOutletContext() as Chat;
  if (!chat) return <></>;
  const myName = useAppSelector(s => s.authorization.user?.firstName);
  const isMy = chat.recipient.id !== message.senderId;
  const senderName = isMy ? myName : chat.recipient.firstName;

  return (
    <div className={`message ${isMy ? "my" : ''}`}>
      {/* <Avatar type="mini" /> */}
      <div className="column">
        <div className="head">
          <Link to={`/account/${message.senderId}`}>{senderName}</Link>
          <span>{message.dateTime.DatetoStr('dd-months-yyyy hh:mm')}</span>
          <Button type="button" onClick={() => deleteMessage(message.id)}>Удалить</Button>
        </div>
        <div>
          {message.text}
          {message.image && <Img image={message.image}></Img>}
        </div>
      </div>
    </div>
  );
}
