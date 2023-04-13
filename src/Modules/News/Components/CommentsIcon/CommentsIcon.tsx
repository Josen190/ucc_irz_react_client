import ChatBoxOutline from "Assets/icons/ChatBoxOutline";


interface Props {
  commentCount: number;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CommentsIcon({ commentCount, setActive }: Props) {
  const switchComments = () => {
    setActive(true);
  };

  let button = (
    <button className="icon row" onClick={switchComments}>
      <span>{commentCount}</span>
      <ChatBoxOutline></ChatBoxOutline>
    </button>
  );

  return <div className="icon">{button}</div>;
}
