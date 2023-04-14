import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";
import User from "./Pages/User/User";
import Visitor from "./Pages/Visitor/Visitor";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "Hooks";


function App() {
  const { isLogin, user } = useAppSelector((state) => state)
  const [content, setContent] = useState<JSX.Element | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const visitor = <Visitor />;
    const userPage = (
      <User UserID={user ? user.id : ""}>
        <Outlet />
      </User>
    );

    setContent(isLogin ? userPage : visitor);

    if ((!isLogin || location.pathname === "/") && location.pathname !== "/news") {
      navigate("/news");
    }

  }, [location, isLogin]);



  return (
    <div>
      <ToastContainer></ToastContainer>
      {content}
    </div>
  );
}

export default App;
