import React, { useState } from "react";
import Button from "../basic/Button";
import API, { url_post_subscriptions_subcribe, url_post_subscriptions_unsubscribe, } from "../../api/Api";
import { notifyError, notifySuccess } from "../Notifications/Notifications";
export default function Profile_Navigation(_a) {
    var isLogin = _a.isLogin, userID = _a.userID, isSubcribe = _a.isSubcribe;
    var _b = useState(isSubcribe ? true : false), _isSubcribe = _b[0], setIsSubcribe = _b[1];
    var unsubscribe = function () {
        API.post(url_post_subscriptions_unsubscribe, null, {
            params: {
                userId: userID,
            },
        })
            .then(function () {
            notifySuccess("Вы отписались");
            setIsSubcribe(false);
        })
            .catch(function () {
            notifyError("Ошибка, не удалось отписаться");
        });
    };
    var subcribe = function () {
        API.post(url_post_subscriptions_subcribe, null, {
            params: {
                userId: userID,
            },
        })
            .then(function () {
            notifySuccess("Вы подписалиь");
            setIsSubcribe(true);
        })
            .catch(function () {
            notifyError("Ошибка, не удалось подптсаться");
        });
    };
    return (React.createElement("div", { className: "content-centr column w-200px" },
        isLogin && (React.createElement(Button, { type: "link", href: "/edit/info", color: "mini" }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C")),
        !isLogin && (React.createElement(Button, { type: "button", color: _isSubcribe ? "basic" : "red", onClick: _isSubcribe ? unsubscribe : subcribe }, _isSubcribe ? "Отписаться" : "Подписаться"))));
}
