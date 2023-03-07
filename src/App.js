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

  if (window.location.pathname != "/" && authData.jwt == null) {
    return <Navigate to="/" />;
  }

  let user = (
    <User UserID={authData.myID}>
      <Outlet />
    </User>
  );
  let visitor = (<Visitor />);
  let content = authData.jwt != null ? user : visitor;

  return (
    <div>
      <ToastContainer></ToastContainer>
      {content}
    </div>
  );
}

export default App;
