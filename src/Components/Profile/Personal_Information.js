import React, { useState } from "react";
import Part_Pers_Info from "./Part_Pers_Info";
import MyDate from "../../class/MyDate";
var Personal_Information = function (_a) {
    var userInfo = _a.userInfo, positionUser = _a.positionUser;
    var _b = useState(false), active = _b[0], setActive = _b[1];
    var fio = "".concat(userInfo.firstName, " ").concat(userInfo.surname, " ").concat(userInfo.patronymic == null ? "" : userInfo.patronymic);
    var birthday = new MyDate(userInfo.birthday).DatetoStr('dd-months-yyyy');
    var myself = userInfo.aboutMyself;
    var iDid = userInfo.myDoings;
    var achievements = userInfo.skills; //??????????????????????
    var skillsAndCompetencies = userInfo.skills;
    var positions = [];
    positionUser.forEach(function (element) {
        if (element.end == null) {
            positions.push({
                name: element.position.name,
                start: new MyDate(element.start).DatetoStr('dd-months-yyyy'),
            });
        }
    });
    return (React.createElement("div", { className: "column" },
        React.createElement("h2", null, fio),
        React.createElement(Part_Pers_Info, { title: "\u0434\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F", value: birthday }),
        React.createElement("span", null,
            React.createElement("h5", null, "\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438"),
            React.createElement("div", { className: "row" }, positions.map(function (element, index) {
                return (React.createElement("div", { key: index, className: "column" },
                    React.createElement("p", null, element.name),
                    React.createElement("small", null, element.start)));
            }))),
        !active &&
            (typeof myself === "string" ||
                typeof iDid === "string" ||
                typeof achievements === "string" ||
                typeof skillsAndCompetencies === "string") && (React.createElement("a", { role: "button", onClick: function () { setActive(true); } }, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0443\u044E \u0438\u043D\u0444\u0440\u043E\u043C\u0430\u0446\u0438\u044E")),
        active &&
            (typeof myself === "string" ||
                typeof iDid === "string" ||
                typeof achievements === "string" ||
                typeof skillsAndCompetencies === "string") && (React.createElement("div", null,
            typeof myself == "string" && (React.createElement(Part_Pers_Info, { title: "\u043E \u0441\u0435\u0431\u0435", value: myself })),
            typeof iDid == "string" && (React.createElement(Part_Pers_Info, { title: "\u0447\u0435\u043C \u0437\u0430\u043D\u0438\u043C\u0430\u043B\u0441\u044F", value: iDid })),
            typeof achievements == "string" && (React.createElement(Part_Pers_Info, { title: "\u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F", value: achievements })),
            typeof skillsAndCompetencies == "string" && (React.createElement(Part_Pers_Info, { title: "\u043D\u0430\u0432\u044B\u043A\u0438 \u0438 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0438\u0438", value: skillsAndCompetencies })),
            React.createElement("a", { role: "button", onClick: function () { setActive(false); } }, "\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0443\u044E \u0438\u043D\u0444\u0440\u043E\u043C\u0430\u0446\u0438\u044E")))));
};
export default Personal_Information;
