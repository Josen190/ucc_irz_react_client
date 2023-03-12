import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
import React, { useContext } from "react";
import User from "./Pages/User";
import Visitor from "./Pages/Visitor";
import { authContext } from "./api/authentication/authController";
import { Outlet } from "react-router-dom";

function App() {
  const { authData } = useContext(authContext);

  if (window.location.pathname !== "/" && authData.jwt == null) {
    return <Navigate to="/" />;
  }

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
