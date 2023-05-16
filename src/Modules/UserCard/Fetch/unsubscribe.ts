import { notifySuccess, notifyError } from "Components/Notifications/Notifications";
import { url_post_subscriptions_unsubscribe } from "Constatnts/url";
import fetch from "Fetch/Fetch";
import React from "react";

const unsubscribe = (userID: string | null, setIsSubcribe: React.Dispatch<React.SetStateAction<boolean>>) => {
  if (!userID) return;

  fetch
    .post(url_post_subscriptions_unsubscribe, undefined, {
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
export default unsubscribe;