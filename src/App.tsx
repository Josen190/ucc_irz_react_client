import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useContext, useState } from "react";
import User from "./Pages/User/User";
import Visitor from "./Pages/Visitor/Visitor";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import authContext, { IAuthContext } from "./Modules/AuthController/Constants/MyContext/MyContexts";

function App() {
  const { authData } = useContext(authContext) as IAuthContext;
  const [content, setContent] = useState<JSX.Element | null>(null);
  const navigate = useNavigate();
  const location = useLocation();



  useEffect(() => {
    const visitor = <Visitor />;
    const userPage = (
      <User UserID={authData && authData.user ? authData.user.id : ""}>
        <Outlet />
      </User>
    );

    setContent(authData && authData.jwt != null ? userPage : visitor);
    console.log("+");
    
    if (((!authData || authData.jwt == null) || location.pathname === "/") && location.pathname !== "/news") {
      navigate("/news");
    }

    console.log(authData);
    
  }, [location, authData]);
  


  return (
    <div>
      <ToastContainer></ToastContainer>
      {content}
    </div>
  );
}

export default App;
