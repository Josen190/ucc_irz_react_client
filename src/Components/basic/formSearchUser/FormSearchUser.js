import React, { useEffect, useState } from "react";
import API, { url_get_users } from "../../../api/Api";
import Author from "../../News/AuthorNews";
// import PushUser from "../../Profile/PushUser/PushUser";
import InputField from "../InputField";
import Button from "../../basic/Button";
function PushUser(_a) {
    var user = _a.user, pushFun = _a.pushFun;
    return (React.createElement("div", { className: "row" },
        React.createElement(Author, { user: user }),
        React.createElement(Button, { type: "button", onClick: function () { return pushFun(user); } }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")));
}
export default function FormSearchUser() {
    var _a = useState(null), searchString = _a[0], setSearchString = _a[1];
    var _b = useState(null), isActive = _b[0], setIsActive = _b[1];
    var _c = useState(null), role = _c[0], setRole = _c[1];
    var _d = useState(null), positionId = _d[0], setPositionId = _d[1];
    var _e = useState(0), pageIndex = _e[0], setPageIndex = _e[1];
    var _f = useState(new Map()), users = _f[0], setUsers = _f[1];
    var _g = useState(new Map()), selctUsers = _g[0], setSelectUsers = _g[1];
    var _h = useState(null), userIdTmp = _h[0], setUserIdTmp = _h[1];
    var pageSize = 10;
    var pushUsers = function (user) {
        setUserIdTmp(user);
    };
    var getUsers = function () {
        var params = {};
        if (typeof searchString === "string")
            params.SearchString = searchString;
        if (typeof isActive === "boolean")
            params.IsActive = isActive;
        if (typeof role === "string")
            params.Role = role;
        if (typeof positionId === "string")
            params.PositionId = positionId;
        params.PageIndex = pageIndex;
        params.PageSize = pageSize;
        API.get(url_get_users, {
            params: params,
        }).then(function (response) {
            var _users = new Map(users);
            response.data.forEach(function (user) {
                _users.set(user.id, React.createElement(PushUser, { key: user.id, user: user, pushFun: pushUsers }));
            });
            setUsers(_users);
        });
    };
    useEffect(getUsers, [pageIndex, searchString, isActive, role, positionId]);
    useEffect(function () {
        if (userIdTmp !== null) {
            setSelectUsers(new Map(selctUsers.entries()).set(userIdTmp.id, React.createElement(Author, { key: userIdTmp.id, user: userIdTmp })));
            var _users = new Map(users);
            _users.delete(userIdTmp.id);
            setUsers(_users);
        }
    }, [userIdTmp]);
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement(InputField, { type: "text", onChange: function (e) {
                    setSearchString(e.target.value);
                } })),
        React.createElement("div", null, Array.from(selctUsers.values())),
        React.createElement("div", null, Array.from(users.values()))));
}
