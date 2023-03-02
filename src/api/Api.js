import axios from "axios";
import { useContext } from "react";
import { notifyError } from "../Components/Notifications/Notifications";
import {
  authContext,
  getAuthData,
  setAuthDataApi,
} from "./authentication/authController";

export const host = "https://localhost:7116";

//авторизация
//возвращяет: jwt(string), refreshToken(string)
export const url_authenticate = `/api/authentication/authenticate`;
export const url_refresh = `/api/authentication/refresh`;
export const url_change_password = `/api/authentication/change_password`;
export const url_send_reset_password_url = `/api/authentication/send_reset_password_url`;
export const url_reset_password = `/api/authentication/reset_password`;

//пользователь
export const url_me = `/api/users/me`;
export const url_update_info = "/api/users/me/update_info";
export const url_user_id = (id) => {
  return `/api/users/${id}`;
};

//новости
export const url_getNews = `/api/news`;
export const url_postNews = `/api/news`;

let datajwt = "";
let data = window.localStorage.getItem("jwt");
if (typeof data === "string") {
  datajwt = data;
} else if (data == null) {
  datajwt = "";
}

const API = axios.create({
  baseURL: host,
  headers: {
    authorization: `Bearer ${datajwt}`,
  },
});

export const setJwt = (data) => {
  let jwt = "";
  if (typeof data === "string") {
    jwt = data;
  } else if (data == null) {
    jwt = "";
  }

  console.log(API.defaults.headers);
  API.defaults.headers["authorization"] = `Bearer ${jwt}`;
};

export default API;

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      const { jwt, refreshToken, myID, role} = getAuthData();
      return API.post(
        url_refresh,
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
          setAuthDataApi(response.data.jwt, response.data.refreshToken, myID, role)
          error.config.headers["Authorization"] = "Bearer " + response.data.jwt;
          error.config.baseURL = host;
          return API.request(error.config);
        })
        .catch(() => {
          setAuthDataApi(null, null, null, null);
          notifyError("авторизация не удалась, поробуйте снова");
          
        });
    }

    return Promise.reject(error);
  }
);
