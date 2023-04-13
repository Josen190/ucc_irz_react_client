import React, { Component, useState } from "react";
import Button from "../../../../UI/Button/Button";
import API from "../../../../Fetch/Api";
import { notifyError, notifySuccess } from "../../../../Components/Notifications/Notifications";

interface Props {
  isLogin: boolean;
  userID: string | null;
  isSubcribe: boolean | null;
}

export default function Profile_Navigation({ isLogin, userID, isSubcribe }: Props) {
  const [_isSubcribe, setIsSubcribe] = useState(isSubcribe ? true : false);
  const unsubscribe = () => {
    if (!userID) return;
    API.unsubscribe(userID)
      .then(() => {
        notifySuccess("Вы отписались");
        setIsSubcribe(false);
      })
      .catch(() => {
        notifyError("Ошибка, не удалось отписаться");
      });
  };

  const subcribe = () => {
    if (!userID) return;
    API.subcribe(userID)
      .then(() => {
        notifySuccess("Вы подписалиь");
        setIsSubcribe(true);
      })
      .catch(() => {
        notifyError("Ошибка, не удалось подптсаться");
      });
  };
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
          onClick={_isSubcribe ? unsubscribe : subcribe}
        >
          {_isSubcribe ? "Отписаться" : "Подписаться"}
        </Button>
      )}
    </div>
  );
}
