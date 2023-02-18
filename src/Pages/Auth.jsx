import React, { Component } from "react";
import Button from "../Components/basic/Button";
import { InputField } from "../Components/basic/InputField";
import {login} from '../api/authentication/authController';

export default class Auth extends Component {
  render() {
    return (
      <div className="all-display center">
        <form onSubmit={login}>
          <InputField id='email' name='email' required type="email" title='Почта'/>
          <InputField id='password' name='password' required type="password" title='Пароль'/>
          <Button type="submit">Войти</Button>
        </form>
      </div>
    );
  }
}
