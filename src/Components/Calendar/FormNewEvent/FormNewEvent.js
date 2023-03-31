import React, { useEffect, useState } from "react";
import InputField from "../../basic/InputField";
import Button from "../../basic/Button";
import FormSeachUser from "../../basic/formSearchUser/FormSearchUser";
import { getContext } from "../../../api/authentication/MyContexts";
import MyDate from "../../../class/MyDate";
export default function FormNewEvent(_a) {
    var day = _a.day, setActive = _a.setActive;
    var authData = getContext().authData;
    var role = authData.role;
    var _b = useState(day), date = _b[0], setDate = _b[1];
    var _c = useState(day), startTime = _c[0], setStartTime = _c[1];
    var _d = useState(day), endTime = _d[0], setEndTime = _d[1];
    var _e = useState(""), title = _e[0], setTitle = _e[1];
    var _f = useState(""), description = _f[0], setDescription = _f[1];
    var _g = useState(false), isPublic = _g[0], setIsPublic = _g[1];
    var _h = useState(null), cabinetId = _h[0], setCabinetId = _h[1];
    useEffect(function () {
        setStartTime(startTime.parseDate(date));
        setEndTime(endTime.parseDate(date));
    }, [date]);
    var newEvent = function (event) {
        event.preventDefault();
        var data = {
            title: title,
            description: description,
            start: startTime,
            end: endTime,
            isPublic: isPublic,
            cabinetId: cabinetId,
            listenersIds: null,
        };
        // API.post(url_post_events, data);
    };
    return (React.createElement("div", { className: "modal", onClick: function () {
            setActive(false);
        } },
        React.createElement("form", { className: "column tile", onClick: function (e) {
                e.stopPropagation();
            }, onSubmit: newEvent },
            React.createElement("div", null,
                React.createElement(InputField, { type: "date", value: day.DatetoStr("yyyy-mm-dd"), onChange: function (event) {
                        setDate(new MyDate(event.target.value));
                    } }),
                React.createElement("div", { className: "row" },
                    React.createElement("span", null, "\u0421"),
                    React.createElement(InputField, { type: "time", onChange: function (event) {
                            setStartTime(date.parseTime(event.target.value));
                        } }),
                    React.createElement("span", null, "\u041F\u043E"),
                    React.createElement(InputField, { type: "time", onChange: function (event) {
                            setEndTime(date.parseTime(event.target.value));
                        } })),
                React.createElement(InputField, { type: "text", placeholder: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A", onChange: function (event) {
                        setTitle(event.target.value);
                    } }),
                React.createElement(InputField, { type: "textarea", placeholder: "\u041E\u043F\u043F\u0438\u0441\u0430\u043D\u0438\u0435", onChange: function (event) {
                        setDescription(event.target.value);
                    } }),
                React.createElement(FormSeachUser, null)),
            React.createElement("div", null,
                React.createElement(Button, { type: "submit" }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))));
}
