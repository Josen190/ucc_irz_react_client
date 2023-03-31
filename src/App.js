import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import User from "./Pages/User";
import Visitor from "./Pages/Visitor";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { getContext } from "./api/authentication/MyContexts";
function App() {
    var authData = getContext().authData;
    var navigate = useNavigate();
    var location = useLocation();
    useEffect(function () {
        if (authData.jwt == null || location.pathname === "/") {
            navigate("/news");
        }
    }, [location]);
    var userPage = (React.createElement(User, { UserID: authData.myID },
        React.createElement(Outlet, null)));
    var visitor = React.createElement(Visitor, null);
    var content = authData.jwt != null ? userPage : visitor;
    return (React.createElement("div", null,
        React.createElement(ToastContainer, null),
        content));
}
export default App;
