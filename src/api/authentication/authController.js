import API, { authenticate } from "../Api";
import react, { createContext, useState } from "react";
import { Outlet } from "react-router";
import { redirect } from "react-router";

import axios from "axios";

function setJwt(jwt){
  if (typeof jwt === "string") {
    API.defaults.headers['authorization'] = `Bearer ${jwt}`;
  } else if (jwt == null) {
    API.defaults.headers['authorization'] = '';
  }
}

export function setAuthDataApi(jwt, token){
  setJwt(jwt);
  window.localStorage.setItem("jwt", jwt);
  window.localStorage.setItem("token", token);
  
}

export const authContext = createContext({});

const AuthController = ({ children }) => {
  const [authData, setAuth] = useState({
    loading: false,
    jwt: window.localStorage.getItem("jwt"),
    token: window.localStorage.getItem("token"),
    myID: window.localStorage.getItem("myID"),
    role: window.localStorage.getItem("role"),
  });
  
  //сохраняем токены в localStorage
  const setAuthData = (jwt, token, myID, role) => {
    if (!authData.loading) {
      window.localStorage.setItem("jwt", jwt);
      window.localStorage.setItem("token", token);
      window.localStorage.setItem("myID", myID);
      window.localStorage.setItem("role", role);
      
      setJwt(jwt);
      
      setAuth({ loading: false, jwt: jwt, token: token, myID: myID, role: role });
    }
  };

  console.log(authData);
  return (
    <authContext.Provider value={{ authData, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};
export default AuthController;


