import React, { useContext, useState } from "react";
import API, { url_post_authenticate } from "../../Fetch/Api";
import Button from "../../Components/Button/Button";
import InputField from "../../Components/InputField/InputField";

import { Navigate } from "react-router-dom";
import authContext from "../../Constants/MyContext/MyContexts";

function Auth() {
  const { setAuthData } = useContext(authContext);
  const [next, setNext] = useState(null);

  const login = (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    e.target[2].disabled = true;

    API.authentication(email, password)
      .then((data) => {
        setAuthData(data);
        setNext(data.user.id);
      })
      .catch((error) => {
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
}

export default Auth;
