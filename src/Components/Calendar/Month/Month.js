import React, { useState } from "react";
import { useEffect } from "react";
import useMeasure from "react-use-measure";
import Day from "../Day/Day";
import API, { url_get_events_my } from "../../../api/Api";
import ContextMenu from "../../basic/ContextMenu/ContextMenu";
import ContextButton from "../../basic/ContextMenu/ContextButton/ContextButton";
import MyDate from "../../../class/MyDate";
import "./month.css";
// numberMonth - нумерация месяцев начинается с 0 - январь ...
function showMonth(year, numberMonth) {
    // получение дня недели для первого дня месяца
    var firstDayOfMonth = new MyDate(year, numberMonth, 1).getDay();
    // 0 - воскресенье, 6 - воскресенье
    firstDayOfMonth = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    var firstDayOfCalendar = new MyDate(year, numberMonth, 1);
    firstDayOfCalendar.setDate(firstDayOfCalendar.getDate() - firstDayOfMonth);
    var indexDay = new MyDate(firstDayOfCalendar);
    var arrDayOfCalendar = [];
    for (var i = 0; i < 5; i++) {
        arrDayOfCalendar.push([]);
        for (var j = 0; j < 7; j++) {
            arrDayOfCalendar[i].push(new MyDate(indexDay));
            indexDay.setDate(indexDay.getDate() + 1);
        }
    }
    var lastDayOfCalendar = new MyDate(indexDay);
    lastDayOfCalendar.setDate(lastDayOfCalendar.getDate() - 1);
    return { firstDayOfCalendar: firstDayOfCalendar, lastDayOfCalendar: lastDayOfCalendar, arrDayOfCalendar: arrDayOfCalendar };
}
export default function Month(_a) {
    var year = _a.year, numberMonth = _a.numberMonth, setSelectedDay = _a.setSelectedDay;
    var _b = useState(MyDate.nameDayWeekShort), nameDayWeekUse = _b[0], setNameDayWeekFull = _b[1];
    var _c = useState([]), listEvents = _c[0], setListEvents = _c[1];
    var _d = useState(false), activeContextMenu = _d[0], setActiveContextMenu = _d[1];
    var _e = useState({
        screenX: 0,
        screenY: 0,
        day: null,
    }), screenPosition = _e[0], setScreenPosition = _e[1];
    var _f = useMeasure(), ref = _f[0], bounds = _f[1];
    var isFull = false;
    var _g = showMonth(year, numberMonth), firstDayOfCalendar = _g.firstDayOfCalendar, lastDayOfCalendar = _g.lastDayOfCalendar, arrDayOfCalendar = _g.arrDayOfCalendar;
    function onWidth(bounds) {
        if (isFull && bounds.width < 1050) {
            setNameDayWeekFull(MyDate.nameDayWeekShort);
            isFull = false;
        }
        else if (!isFull && bounds.width >= 1050) {
            setNameDayWeekFull(MyDate.nameDayWeekFull);
            isFull = false;
        }
    }
    useEffect(function () {
        API.get(url_get_events_my, {
            params: {
                Start: firstDayOfCalendar.toString(),
                End: lastDayOfCalendar.toString(),
            },
        }).then(function (response) {
            setListEvents(response.data);
        });
    }, [numberMonth]);
    useEffect(function () {
        onWidth(bounds);
    }, [bounds]);
    var contextMenu = function (event, day) {
        event.preventDefault();
        setActiveContextMenu(true);
        setScreenPosition({
            screenX: event.clientX,
            screenY: event.clientY,
            day: day,
        });
    };
    return (React.createElement("div", { className: "month", onClick: function () {
            setActiveContextMenu(false);
        } },
        React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", { ref: ref, className: "month-column" }, nameDayWeekUse.map(function (e, i) { return (React.createElement("th", { key: i }, e)); }))),
            React.createElement("tbody", { className: "month-row" }, arrDayOfCalendar.map(function (week, indexWeek) { return (React.createElement("tr", { key: indexWeek, className: "month-column" }, week.map(function (day, indexDay) {
                var listEventsDay = listEvents.filter(function (event) {
                    return day.equate(event.start);
                });
                return (React.createElement("td", { key: indexDay },
                    React.createElement(Day, { day: day, month: numberMonth, listEvents: listEventsDay, activeContextMenu: contextMenu })));
            }))); }))),
        activeContextMenu && (React.createElement(ContextMenu, { screenX: screenPosition.screenX, screenY: screenPosition.screenY },
            React.createElement(ContextButton, { onClick: function () {
                    setSelectedDay(screenPosition.day);
                    setActiveContextMenu(false);
                } }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0435")))));
}
