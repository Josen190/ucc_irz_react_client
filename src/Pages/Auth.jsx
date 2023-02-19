import React, { Component, useContext, useState } from "react";
import Button from "../Components/basic/Button";
import { InputField } from "../Components/basic/InputField";
import API, { setJwt, url_authenticate, url_me } from "../api/Api";

import { Navigate } from "react-router-dom";
import { authContext } from "../api/authentication/authController";

const Auth = () => {
  const { setAuthData } = useContext(authContext);
  const [next, setNext] = useState(null);

  const login = (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    e.target[2].disabled = true;

    API.post(url_authenticate, {
      email: email,
      password: password,
    })
      .then(function (response) {
        console.log(response);
        setAuthData(response.data.jwt, response.data.refreshToken);
        

        API.get(url_me)
          .then((response) => {
            //Navigate()
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
