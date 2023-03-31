import React from "react";
import Header from "../Components/Header/Header";
import FeedNews from "../Components/News/FeedNews";
export default function Visitor() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, { islogin: false }),
        React.createElement(FeedNews, null)));
}
