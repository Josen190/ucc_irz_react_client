import React from "react";
import Profile_Picture from "../Profile/Profile_Picture";
import { Link } from "react-router-dom";
export default function Author(_a) {
    var user = _a.user;
    return (React.createElement(Link, { to: "/account/".concat(user.id), className: "row" },
        React.createElement(Profile_Picture, { type: "mini", image: user.image }),
        React.createElement("h4", null, user.getFullName())));
}
