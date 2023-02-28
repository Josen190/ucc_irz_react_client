import React, { Component, useContext, useState } from "react";
import Button from "../Components/basic/Button";
import InputField from "../Components/basic/InputField";
import API, {
  host,
  setJwt,
  url_authenticate,
  url_me,
  url_refresh,
} from "../api/Api";

import { Navigate } from "react-router-dom";
import { authContext } from "../api/authentication/authController";

const Auth = () => {
  const { authData, setAuthData } = useContext(authContext);
  const [next, setNext] = useState(null);

  const login = (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    e.target[2].disabled = true;

    const refreshToken = async (jwt, refreshToken, time) => {
      setTimeout(() => {
        API.post(
          url_refresh,
          {
            jwt: jwt,
            refreshToken: refreshToken,
          },
          {
            baseURL: host,
            headers: {
              authorization: null,
            },
          }
        )
          .then((response) => {
            console.log(response);
            let data = {
              jwt: response.data.jwt,
              refreshToken: response.data.refreshToken,
              myId: authData.myId,
              role: authData.role,
            };
            setAuthData(data.jwt, data.refreshToken, data.myId, data.role);
            refreshToken(data.jwt, data.refreshToken, time);
          })
          .catch((e) => console.log(e));
      }, time * 60 * 1000);
    };

    let data = {};
    API.post(url_authenticate, {
      email: email,
      password: password,
    })
      .then(function (response) {
        console.log(response);
        data = {
          jwt: response.data.jwt,
          refreshToken: response.data.refreshToken,
          myId: null,
          role: null,
        };
        setAuthData(data.jwt, data.refreshToken, data.myId, data.role);
        API.get(url_me)
          .then((response) => {
            data = {
              jwt: data.jwt,
              refreshToken: data.refreshToken,
              myId: response.data.id,
              role: response.data.roles,
            };
            setAuthData(data.jwt, data.refreshToken, data.myId, data.role);
            refreshToken(data.jwt, data.refreshToken, 19);
            setNext(response.data.id);
          })
          .catch((error) => {
            console.log(error);
            e.target[2].disabled = false;
          });

        e.target[2].disabled = false;
      })
      .catch(function (error) {
        console.log(error);
        e.target[2].disabled = false;
      });
  };

  return (
    <div className="all-display center">
      <form onSubmit={login}>
        <InputField
          id="email"
          name="email"
          required
          type="email"
          title="Почта"
        />
        <InputField
          id="password"
          name="password"
          required
          type="password"
          title="Пароль"
        />
        <Button type="submit">Войти</Button>
      </form>
      {next != null && <Navigate to={`/account/${next}`} />}
    </div>
  );
};
export default Auth;
