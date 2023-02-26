import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Await, Navigate, redirect } from "react-router-dom";
import React, { useContext, useState } from "react";
import Start from "./Pages/Visitor";
import { checLogin } from "./api/authentication/authController";
import User from "./Pages/User";
import Visitor from "./Pages/Visitor";
import { authContext } from "./api/authentication/authController";
import { Outlet } from "react-router-dom";
import API, { url_me } from "./api/Api";

function App() {
  const { authData } = useContext(authContext);
  console.log(authData);

  if (window.location.pathname != "/" && authData.jwt == null) {
    return <Navigate to="/" />;
  }

  let user = (
    <User UserID={authData.myID}>
      <Outlet />
    </User>
  );
  let Visitor = <Visitor />;
  let content = authData.jwt != null ? user : Visitor;

  return (
    <div>
      <ToastContainer></ToastContainer>
      {content}
    </div>
  );
}

export default App;
