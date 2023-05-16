import ChatBoxOutline from "Assets/icons/ChatBoxOutline";
import React from "react";

interface Props {
  commentCount: number;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CommentsIcon({ commentCount, setActive }: Props) {
  const switchComments = () => {
    setActive(true);
  };

  const button = (
    <button className="icon row" onClick={switchComments}>
      <span>{commentCount}</span>
      <ChatBoxOutline></ChatBoxOutline>
    </button>
  );

  return <div className="icon">{button}</div>;
}
