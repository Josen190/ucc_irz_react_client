import React, { useState } from "react";
import API, { url_post_news_comments } from "../../api/Api";
import Button from "../basic/Button";
import InputField from "../basic/InputField";
import { notifyError } from "../Notifications/Notifications";
export default function CreateComment(_a) {
    var newsID = _a.newsID;
    var _b = useState(""), text = _b[0], setText = _b[1];
    var _c = useState(""), value = _c[0], setValue = _c[1];
    var newNewsComments = function (event) {
        event.preventDefault();
        var data = {
            newsEntryId: newsID,
            text: text,
        };
        API.post(url_post_news_comments, data)
            .then(function () {
            setText("");
            setValue("");
            notifyError("Комментарий создан");
        })
            .catch(function () {
            notifyError("Ощибка, попробуйте снова");
        });
    };
    return (React.createElement("form", { className: "tile colume", onSubmit: function (e) { return newNewsComments(e); } },
        React.createElement(InputField, { type: "textarea", value: value, onChange: function (e) { return setText(e.target.value); } }),
        React.createElement(Button, { type: "submit" }, "\u0414\u043E\u0431\u0430\u0432\u0442\u044C")));
}
