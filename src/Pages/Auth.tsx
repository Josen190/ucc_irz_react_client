import React, { useContext, useState } from "react";
import API, { url_post_authenticate, url_get_users_me } from "../api/Api";
import Button from "../Components/basic/Button";
import InputField from "../Components/basic/InputField";

import { Navigate } from "react-router-dom";
import authContext from "../api/authentication/MyContexts";

const Auth = () => {
  const context = useContext(authContext);

  //потом доделать
  console.log(typeof context);

  const [next, setNext] = useState(null);

  const login = (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    e.target[2].disabled = true;

    let data = {};
    API.post(url_post_authenticate, {
      email: email,
      password: password,
    })
      .then(function (response) {
        data = {
          jwt: response.data.jwt,
          refreshToken: response.data.refreshToken,
          myId: null,
          role: null,
        };
        // setAuthData(data.jwt, data.refreshToken, data.myId, data.role);
        // API.get(url_get_users_me)
        //   .then((response) => {
        //     data = {
        //       jwt: data.jwt,
        //       refreshToken: data.refreshToken,
        //       myId: response.data.id,
        //       role: response.data.roles,
        //     };
        //     setAuthData(data.jwt, data.refreshToken, data.myId, data.role);
        //     setNext(response.data.id);
        //   })
        //   .catch((error) => {
        //     e.target[2].disabled = false;
        //   });

        e.target[2].disabled = false;
      })
      .catch(function (error) {
        e.target[2].disabled = false;
      });
  };

  return (
    <div className="all-display center">
      <form onSubmit={login}>
        <InputField
          id="email"
          name="email"
          required={true}
          type="email"
          title="Почта"
        />
        <InputField
          id="password"
          name="password"
          required={true}
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
