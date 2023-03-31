import React from "react";
import "../calendar.css";
import EventInDay from "./EventInDay/EventInDay";
import MyDate from "../../../class/MyDate";
export default function Day(_a) {
    var day = _a.day, month = _a.month, listEvents = _a.listEvents, activeContextMenu = _a.activeContextMenu;
    var today = new MyDate();
    today.setHours(0, 0, 0, 0);
    var className = "day column";
    if (today.getTime() === day.getTime()) {
        className += " today";
    }
    if (day.getMonth() != month) {
        className += " noThisMonth";
    }
    return (React.createElement("div", { className: className, onContextMenu: function (e) { return activeContextMenu(e, day); }, onContextMenuCapture: null },
        React.createElement("span", null,
            " ",
            day.getDate()),
        React.createElement("div", { className: "column" }, listEvents.map(function (event) {
            return React.createElement(EventInDay, { key: event.id, event: event });
        }))));
}
