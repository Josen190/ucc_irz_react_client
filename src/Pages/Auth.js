import React, { useState } from "react";
import API, { url_post_authenticate } from "../api/Api";
import Button from "../Components/basic/Button";
import InputField from "../Components/basic/InputField";
import { Navigate } from "react-router-dom";
import { getContext } from "../api/authentication/MyContexts";
var Auth = function () {
    var context = getContext();
    //потом доделать
    console.log(typeof context);
    var _a = useState(null), next = _a[0], setNext = _a[1];
    var login = function (e) {
        e.preventDefault();
        var email = e.target[0].value;
        var password = e.target[1].value;
        e.target[2].disabled = true;
        var data = {};
        API.post(url_post_authenticate, {
            email: email,
            password: password,
        })
            .then(function (response) {
            data = {
                jwt: response.data.jwt,
                refreshToken: response.data.refreshToken,
                myId: null,
                role: null,
            };
            // setAuthData(data.jwt, data.refreshToken, data.myId, data.role);
            // API.get(url_get_users_me)
            //   .then((response) => {
            //     data = {
            //       jwt: data.jwt,
            //       refreshToken: data.refreshToken,
            //       myId: response.data.id,
            //       role: response.data.roles,
            //     };
            //     setAuthData(data.jwt, data.refreshToken, data.myId, data.role);
            //     setNext(response.data.id);
            //   })
            //   .catch((error) => {
            //     e.target[2].disabled = false;
            //   });
            e.target[2].disabled = false;
        })
            .catch(function (error) {
            e.target[2].disabled = false;
        });
    };
    return (React.createElement("div", { className: "all-display center" },
        React.createElement("form", { onSubmit: login },
            React.createElement(InputField, { id: "email", name: "email", required: true, type: "email", title: "\u041F\u043E\u0447\u0442\u0430" }),
            React.createElement(InputField, { id: "password", name: "password", required: true, type: "password", title: "\u041F\u0430\u0440\u043E\u043B\u044C" }),
            React.createElement(Button, { type: "submit" }, "\u0412\u043E\u0439\u0442\u0438")),
        next != null && React.createElement(Navigate, { to: "/account/".concat(next) })));
};
export default Auth;
