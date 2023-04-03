import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import User from "./Pages/User/User";
import Visitor from "./Pages/Visitor/Visitor";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import authContext from "./Constants/MyContext/MyContexts";

function App() {
  const { authData } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (authData.jwt == null || location.pathname === "/") {
      navigate("/news");
    }
  }, [location]);

  const userPage = (
    <User UserID={authData.user.id}>
      <Outlet />
    </User>
  );

  const visitor = <Visitor />;
  const content: JSX.Element = authData.jwt != null ? userPage : visitor;

  return (
    <div>
      <ToastContainer></ToastContainer>
      {content}
    </div>
  );
}

export default App;
