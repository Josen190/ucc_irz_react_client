import React, { useState, useEffect } from "react";
import API, { host, url_post_refresh } from "../../Fetch/Api";
import authContext from "../../Constants/MyContext/MyContexts";
import { notifyError } from "../Notifications/Notifications";
import User from "../../Helpers/User";

function setAuthDataApi(jwt, token) {
  API.setJwt(jwt);
  window.localStorage.setItem("jwt", jwt);
  window.localStorage.setItem("token", token);
}

function getAuthData() {
  const jwt = window.localStorage.getItem("jwt");
  const refreshToken = window.localStorage.getItem("refreshToken");
  return { jwt, refreshToken, user: null };
}

export interface authData {
  jwt: string | null;
  refreshToken: string | null;
  user: User | null;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AuthController = ({ children }: Props) => {
  const [authData, setAuth] = useState<authData>(getAuthData());

  //сохраняем токены в localStorage
  const setAuthData = (
    jwt: string,
    refreshToken: string,
    user: User | null = authData.user
  ) => {
    setAuthDataApi(jwt, refreshToken);
    setAuth({
      jwt: jwt,
      refreshToken: refreshToken,
      user: user,
    });
  };

  useEffect(() => {
    API.getUserMe().then((user) =>
      setAuthData(authData.jwt, authData.refreshToken, user)
    );
  }, []);

  API.refreshToken(authData.jwt, authData.refreshToken, setAuthData);

  return (
    <authContext.Provider value={{ authData, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};
export default AuthController;
