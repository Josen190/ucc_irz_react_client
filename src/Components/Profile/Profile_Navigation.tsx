import React, { Component, useState } from "react";
import Button from "../basic/Button";
import API, {
  url_post_subscriptions_subcribe,
  url_post_subscriptions_unsubscribe,
} from "../../api/Api";
import { notifyError, notifySuccess } from "../Notifications/Notifications";

export default function Profile_Navigation({ isLogin, userID, isSubcribe }) {
  const [_isSubcribe, setIsSubcribe] = useState(isSubcribe ? true : false);
  const unsubscribe = () => {
    API.post(url_post_subscriptions_unsubscribe, null, {
      params: {
        userId: userID,
      },
    })
      .then(() => {
        notifySuccess("Вы отписались");
        setIsSubcribe(false);
      })
      .catch(() => {
        notifyError("Ошибка, не удалось отписаться");
      });
  };

  const subcribe = () => {
    API.post(url_post_subscriptions_subcribe, null, {
      params: {
        userId: userID,
      },
    })
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
