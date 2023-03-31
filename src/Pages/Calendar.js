import React, { useState } from "react";
import Month from "../Components/Calendar/Month/Month";
import Button from "../Components/basic/Button";
import FormNewEvent from "../Components/Calendar/FormNewEvent/FormNewEvent";
import MyDate from "../class/MyDate";
var nameMonth = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
];
var Calendar = function () {
    var _a = useState(new MyDate()), date = _a[0], setDate = _a[1];
    var _b = useState(false), active = _b[0], setActive = _b[1];
    var _c = useState(null), selectedDay = _c[0], setSelectedDay = _c[1];
    var nextMonth = function () {
        setDate(new MyDate(date.setMonth(date.getMonth() + 1)));
    };
    var prevMonth = function () {
        setDate(new MyDate(date.setMonth(date.getMonth() - 1)));
    };
    var setEventSelectedDay = function (day) {
        setSelectedDay(day);
        setActive(true);
    };
    return (React.createElement("main", { className: "tile calendar" },
        React.createElement("div", null,
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "row" },
                    React.createElement(Button, { type: "button", onClick: prevMonth }, "<"),
                    React.createElement("div", { className: "row" },
                        React.createElement("span", null, nameMonth[date.getMonth()]),
                        React.createElement("span", null, date.getFullYear())),
                    React.createElement(Button, { type: "button", onClick: nextMonth }, ">")),
                React.createElement(Button, { type: "button", onClick: function () { return setActive(true); } }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0435"))),
        React.createElement(Month, { year: date.getFullYear(), numberMonth: date.getMonth(), setSelectedDay: setEventSelectedDay }),
        active && React.createElement(FormNewEvent, { day: selectedDay, setActive: setActive })));
};
export default Calendar;
