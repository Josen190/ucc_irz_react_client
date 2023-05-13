import React, { useState } from "react";
import Button from "../../../../UI/Button/Button";
import unsubscribe from "../../Fetch/unsubscribe";
import subscribe from "../../Fetch/subscribe";
import "./ProfileNavigation.scss"
import {useNavigate} from "react-router-dom";
import getChatId from "Fetch/getChatId";

interface Props {
  isLogin: boolean;
  userID: string | null;
  isSubcribe: boolean | null;
}

export default function ProfileNavigation({ isLogin, userID, isSubcribe }: Props) {
  const [_isSubcribe, setIsSubcribe] = useState(isSubcribe ?? false);
    const navigate = useNavigate()

  const newMessenge = () => {
        if (!userID) return;
        getChatId(userID).then(id => navigate(`/messenger/chat/${id}`));
  }


  return (
    <div className="profile-navigation">
      {isLogin && (
        <Button type="link" href="/edit/info" color="mini">
          Редактировать профиль
        </Button>
      )}
      {!isLogin && (
        <Button
          type="button"
          color={_isSubcribe ? "basic" : "red"}
          onClick={() => _isSubcribe ? unsubscribe(userID, setIsSubcribe) : subscribe(userID, setIsSubcribe)}
        >
          {_isSubcribe ? "Отписаться" : "Подписаться"}
        </Button>
      )}
      <Button type="button" onClick={newMessenge} color="mini">
        Написать сообщение
      </Button>
    </div>
  );
}
