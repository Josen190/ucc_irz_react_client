import axios from "axios";
import { useContext } from "react";
import { authContext } from "./authentication/authController";

const host = "https://localhost:7116";

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

//авторизация
//возвращяет: jwt(string), refreshToken(string)
export const url_authenticate = `/api/authentication/authenticate`;
export const url_refresh = `/api/authentication/refresh`;
export const url_change_password = `/api/authentication/change_password`;
export const url_send_reset_password_url = `/api/authentication/send_reset_password_url`;
export const url_reset_password = `/api/authentication/reset_password`;

//пользователь
export const url_me = `/api/users/me`;
export const url_user_id = (id) => {
  return `/api/users/${id}`;
};
