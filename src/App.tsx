import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import User from "./Pages/User";
import Visitor from "./Pages/Visitor";
import { authContext } from "./api/authentication/authController";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { getContext } from "./api/authentication/MyContexts";

function App() {
  const { authData } = getContext();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (authData.jwt == null || location.pathname === "/") {
      navigate("/news");
    }
  }, [location]);

  const userPage = (
    <User UserID={authData.myID}>
      <Outlet />
    </User>
  );

  const visitor = <Visitor />;
  const content = authData.jwt != null ? userPage : visitor;

  return (
    <div>
      <ToastContainer></ToastContainer>
      {content}
    </div>
  );
}

export default App;
