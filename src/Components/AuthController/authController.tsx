import React, { useState } from "react";
import API, { host, url_post_refresh } from "../../Fetch/Api";
import authContext from "../../Constants/MyContext/MyContexts";
import { notifyError } from "../Notifications/Notifications";



function setAuthDataApi(jwt, token, myID, role) {
  API.setJwt(jwt);
  window.localStorage.setItem("jwt", jwt);
  window.localStorage.setItem("token", token);
  window.localStorage.setItem("myID", myID);
  window.localStorage.setItem("role", role);
}

function getAuthData() {
  const jwt = window.localStorage.getItem("jwt");
  const refreshToken = window.localStorage.getItem("refreshToken");
  const myID = window.localStorage.getItem("myID");
  const role = window.localStorage.getItem("role");
  return { jwt, refreshToken, myID, role };
}

export interface authData {
  jwt: string | null;
  refreshToken: string | null;
  myID: string | null;
  role: string | null;
}

interface Props{
  children: JSX.Element | JSX.Element[]
}

const AuthController = ({ children }: Props) => {
  const [authData, setAuth] = useState<authData>(getAuthData());

  //сохраняем токены в localStorage
  const setAuthData = (jwt, refreshToken, myID, role) => {
    setAuthDataApi(jwt, refreshToken, myID, role);
    setAuth({
      jwt: jwt,
      refreshToken: refreshToken,
      myID: myID,
      role: role,
    });
  };

  let loading = true;
  API.interceptors.response.use(
    (response) => response,
    async (error) => {
      const status = error.response ? error.response.status : null;

      if (loading && status === 401) {
        loading = false;
        const { jwt, refreshToken, myID, role } = authData;
        return API.post(
          url_post_refresh,
          {
            jwt: jwt,
            refreshToken: refreshToken,
          },
          {
            baseURL: host,
            headers: {
              authorization: null,
              accept: "*/*",
            },
          }
        )
          .then((response) => {
            setAuthData(
              response.data.jwt,
              response.data.refreshToken,
              myID,
              role
            );
            error.config.headers["Authorization"] =
              "Bearer " + response.data.jwt;
            error.config.baseURL = host;
            loading = true;
            return API.request(error.config);
          })
          .catch(() => {
            setAuthData(null, null, null, null);
            notifyError("авторизация не удалась, поробуйте снова");
            loading = true;
          });
      }

      return Promise.reject(error);
    }
  );

  return (
    <authContext.Provider value={{ authData, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};
export default AuthController;
