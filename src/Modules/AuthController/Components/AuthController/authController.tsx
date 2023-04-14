import React, { useState, useEffect } from "react";
import API from "../../../../Fetch/Api";
import authContext from "../../Constants/MyContext/MyContexts";
import User from "../../../../Helpers/User";

function setAuthDataApi(jwt: string | null, token: string | null) {
  const api = new API();
  api.setJwt(jwt);
  window.localStorage.setItem("jwt", jwt ?? "null");
  window.localStorage.setItem("token", token ?? "null");
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
  const api = new API();
  //сохраняем токены в localStorage
  const setAuthData = (
    jwt: string | null,
    refreshToken: string | null,
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
    api.getUserMe().then((user) =>
      setAuthData(authData.jwt, authData.refreshToken, user)
    );
  }, []);

  api.getRefreshToken(authData.jwt ?? "", authData.refreshToken ?? "", setAuthData);

  return (
    <authContext.Provider value={{ authData, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};
export default AuthController;
