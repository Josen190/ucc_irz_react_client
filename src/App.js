import "./App.css";

import { Navigate, redirect } from "react-router-dom";
import React, {useContext} from "react";
import Start from "./Pages/Visitor";
import { checLogin } from "./api/authentication/authController";
import User from "./Pages/User";
import Visitor from "./Pages/Visitor";
import { authContext } from "./api/authentication/authController";
import { Outlet } from "react-router-dom";


function App() {
  const {authData} = useContext(authContext);
  console.log(authData);

  if (window.location.pathname != '/' && authData.jwt == null){
    return <Navigate to='/'/>
  }

  return authData.jwt != null ? (
    <User>
      <Outlet />
    </User>
  ) : (
    <Visitor />
  );
}

export default App;
