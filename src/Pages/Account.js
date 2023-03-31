import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import API, { url_get_user_positions } from "../api/Api";
import { getContext } from "../api/authentication/MyContexts";
import User from "../class/User";
import Button from "../Components/basic/Button";
import CreateTidings from "../Components/News/CreateTidings";
import FeedNews from "../Components/News/FeedNews";
import Personal_Information from "../Components/Profile/Personal_Information";
import Profile_Navigation from "../Components/Profile/Profile_Navigation";
import Profile_Picture from "../Components/Profile/Profile_Picture";
import "./pages.css";
export function accountLoader(_a) {
    var params = _a.params;
    return params.id;
}
var Account = function () {
    var authData = getContext().authData;
    var _a = useState(false), active = _a[0], setActive = _a[1];
    var _b = useState({ update: null }), updateNews = _b[0], setUpdateNews = _b[1];
    var _c = useState(null), user = _c[0], setUser = _c[1];
    var _d = useState(null), positionUser = _d[0], setPositionUser = _d[1];
    var isLogin = typeof (authData.myID) === 'string' ? authData.myID === user.id : false;
    useEffect(function () {
        var id = useLoaderData();
        if (typeof id !== 'string')
            return;
        User.getUser(id).then(function (user) {
            setUser(user);
        });
        API.get(url_get_user_positions, { params: { userId: id } }).then(function (response) {
            setPositionUser(response.data);
        });
    }, []);
    return (React.createElement("main", { className: "account" },
        React.createElement("div", { className: "tile ProfileHeader" },
            React.createElement("div", { className: "margin-right" },
                React.createElement(Profile_Picture, { type: "norm", image: user.image }),
                React.createElement(Profile_Navigation, { isLogin: isLogin, userID: user.id, isSubcribe: user.isSubscription })),
            React.createElement(Personal_Information, { userInfo: user, positionUser: positionUser })),
        React.createElement("div", { className: "" },
            isLogin && (React.createElement("div", { className: "tile" },
                React.createElement(Button, { type: "button", onClick: function () {
                        setActive(true);
                    } }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u043E\u0441\u0442\u044C"))),
            React.createElement(FeedNews, { userID: user.id, setUpdate: setUpdateNews })),
        active && React.createElement(CreateTidings, { setActive: setActive, updateNews: updateNews })));
};
export default Account;
