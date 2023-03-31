import React, { useEffect, useState } from "react";
import Button from "../../basic/Button";
import InputField from "../../basic/InputField";
import InputImg from "../../basic/InputImg";
import API, { url_get_users_me, url_put_users_me_update_info, } from "../../../api/Api";
import { notifyError, notifySuccess } from "../../Notifications/Notifications";
function EditInfo() {
    var _a = useState(""), myself = _a[0], setMyself = _a[1];
    var _b = useState(""), iDid = _b[0], setIDid = _b[1];
    var _c = useState(""), achievements = _c[0], setAchievements = _c[1];
    var _d = useState(""), skills = _d[0], setSkills = _d[1];
    useEffect(function () {
        API.get(url_get_users_me).then(function (response) {
            setMyself(response.data.aboutMyself);
            setIDid(response.data.myDoings);
            setAchievements(response.data.skills);
            setSkills(response.data.skills);
        });
    }, []);
    var save = function (event) {
        event.preventDefault();
        API.put(url_put_users_me_update_info, {
            aboutMyself: myself,
            myDoings: iDid,
            skills: skills,
        })
            .then(function () {
            notifySuccess("изменения сохранены");
        })
            .catch(function (error) {
            notifyError("изменения не сохранены");
        });
    };
    return (React.createElement("form", { onSubmit: function (e) { return save(e); } },
        React.createElement(InputImg, null),
        React.createElement(InputField, { type: "textarea", title: "\u041E \u0441\u0435\u0431\u0435", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0441\u0435\u0431\u0435", value: myself, onChange: function (event) {
                setMyself(event.target.value);
            } }),
        React.createElement(InputField, { type: "textarea", title: "\u0427\u0435\u043C \u0437\u0430\u043D\u0438\u043C\u0430\u043B\u0441\u044F", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0435\u043C \u0432\u044B \u0437\u0430\u043D\u0438\u043C\u0430\u043B\u0438\u0441\u044C", value: iDid, onChange: function (event) {
                setIDid(event.target.value);
            } }),
        React.createElement(InputField, { type: "textarea", title: "\u0414\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F", placeholder: "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043E \u0432\u0430\u0448\u0438\u0445 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F\u0445", value: achievements, onChange: function (event) {
                setAchievements(event.target.value);
            } }),
        React.createElement(InputField, { type: "textarea", title: "\u041D\u0430\u0432\u044B\u043A\u0438 \u0438 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0438\u0438", placeholder: "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043E \u0432\u0430\u0448\u0438\u0445 \u043D\u0430\u0432\u044B\u043A\u0430\u0445 ", value: skills, onChange: function (event) {
                setSkills(event.target.value);
            } }),
        React.createElement("div", null,
            React.createElement(Button, { type: "submit" }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))));
}
export default EditInfo;
