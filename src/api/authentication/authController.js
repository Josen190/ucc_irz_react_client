import { createContext, useState } from "react";
import API from "../Api";

function setJwt(jwt) {
  if (typeof jwt === "string") {
    API.defaults.headers["authorization"] = `Bearer ${jwt}`;
  } else if (jwt == null) {
    API.defaults.headers["authorization"] = null;
  }
}

export function setAuthDataApi(jwt, token, myID, role) {
  setJwt(jwt);
  window.localStorage.setItem("jwt", jwt);
  window.localStorage.setItem("token", token);
  window.localStorage.setItem("myID", myID);
  window.localStorage.setItem("myID", role);
}

export function getAuthData() {
  const jwt = window.localStorage.getItem("jwt");
  const refreshToken = window.localStorage.getItem("token");
  const myID = window.localStorage.getItem("token");
  const role = window.localStorage.getItem("token");
  return { jwt, refreshToken, myID, role };
}

export const authContext = createContext({});

const AuthController = ({ children }) => {
  const [authData, setAuth] = useState({
    loading: false,
    jwt: window.localStorage.getItem("jwt"),
    token: window.localStorage.getItem("token"),
    myID: window.localStorage.getItem("myID").myID,
    role: window.localStorage.getItem("myID").myID,
  });

  //сохраняем токены в localStorage
  const setAuthData = (jwt, token, myID, role) => {
    if (!authData.loading) {
      setAuthDataApi(jwt, token);
      setAuth({
        loading: false,
        jwt: jwt,
        token: token,
        myID: myID,
        role: role,
      });
    }
  };

  return (
    <authContext.Provider value={{ authData, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};
export default AuthController;
