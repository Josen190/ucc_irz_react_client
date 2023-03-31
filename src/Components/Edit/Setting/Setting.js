import React from "react";
import { useState } from "react";
import InputField from "../../basic/InputField";
import API, { url_put_change_password } from "../../../api/Api";
import Button from "../../basic/Button";
import { notifyError, notifySuccess } from "../../Notifications/Notifications";
function Setting() {
    var _a = useState(""), currentPassword = _a[0], setCurrentPassword = _a[1];
    var _b = useState(""), newPassword = _b[0], setNewPassword = _b[1];
    var _c = useState(""), rePassword = _c[0], setRePassword = _c[1];
    var _d = useState([]), errorPassword = _d[0], setErrorPassword = _d[1];
    var save = function (event) {
        event.preventDefault();
        if (newPassword === rePassword) {
            API.put(url_put_change_password, {
                currentPassword: currentPassword,
                newPassword: newPassword,
            })
                .then(function () {
                notifySuccess("изменения сохранены");
            })
                .catch(function (error) {
                notifyError("изменения не сохранены");
                setErrorPassword(error.response.data);
            });
        }
    };
    return (React.createElement("form", { onSubmit: function (e) { return save(e); } },
        React.createElement("div", null,
            React.createElement("h4", null, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C"),
            React.createElement(InputField, { type: "password", placeholder: "Старый пароль", onChange: function (e) { return setCurrentPassword(e.target.value); } }),
            React.createElement(InputField, { type: "password", placeholder: "Новый пароль", onChange: function (e) { return setNewPassword(e.target.value); } }),
            React.createElement(InputField, { type: "password", placeholder: "Повторить пароль", onChange: function (e) { return setRePassword(e.target.value); } }),
            errorPassword.map(function (e) { return (React.createElement("p", { key: e.code }, e.description)); })),
        React.createElement("div", null,
            React.createElement(Button, { type: "submit" }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))));
}
export default Setting;
