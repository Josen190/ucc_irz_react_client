import React, { useState } from "react";
import Button from "../../../../UI/Button/Button";
import unsubscribe from "../../Fetch/unsubscribe";
import subscribe from "../../Fetch/subscribe";

interface Props {
  isLogin: boolean;
  userID: string | null;
  isSubcribe: boolean | null;
}

export default function ProfileNavigation({ isLogin, userID, isSubcribe }: Props) {
  const [_isSubcribe, setIsSubcribe] = useState(isSubcribe ?? false);



  return (
    <div className="content-centr column w-200px">
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
      <Button type="link" href={`/messenger/new_chat/${userID}`}  color="mini">
        Написать сообщение
      </Button>
    </div>
  );
}
