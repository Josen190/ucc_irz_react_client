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
  console.log(API.defaults.headers);
}

export const authContext = createContext({});

const AuthController = ({ children }) => {
  const [authData, setAuth] = useState({
    loading: false,
    jwt: window.localStorage.getItem("jwt"),
    tocen: window.localStorage.getItem("tocen"),
  });
  // setJwt(authData.jwt)
  
  //сохраняем токены в localStorage
  const setAuthData = (jwt, tocen) => {
    if (!authData.loading) {
      window.localStorage.setItem("jwt", jwt);
      window.localStorage.setItem("tocen", tocen);
      setJwt(jwt);
      
      setAuth({ loading: false, jwt: jwt, tocen: tocen });
    }
  };

  return (
    <authContext.Provider value={{ authData, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};
export default AuthController;
