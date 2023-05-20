import React, { FormEvent, useState } from 'react'
import InputField from '../../../../UI/InputField/InputField'
import Button from '../../../../UI/Button/Button';
import fetchAuthentication from '../../Fetch/fetchAuthentication';
import {Link, Navigate} from 'react-router-dom';
import { useAppDispatch } from 'Hooks';
import { authorization } from 'Modules/AuthController';
import "./AuthorizationForm.scss"

function AuthorizationForm() {
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [next, setNext] = useState<string | false>(false);
  const [errorMessege, setErrorMessege] = useState<string>()

  const login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchAuthentication(email, password).then((data) => {
      dispatch(authorization({ jwt: data.jwt, refreshToken: data.refreshToken, user: data.user ? data.user.getParams() : null }))
      setNext(data.user.id);
    }).catch((error) => {
      setErrorMessege(error as string);
    })
  }

  return (
    <form onSubmit={login} className="authorization-form">
      <InputField
        id="email"
        name="email"
        required={true}
        type="email"
        title="Почта"
        onSetValue={setEmail}
      />
      <InputField
        id="password"
        name="password"
        required={true}
        type="password"
        title="Пароль"
        onSetValue={setPassword}
      />
      {errorMessege && <p className='error'>{errorMessege}</p>}
        <div className="nav-auth-form">
            <Link to="/password_recovery">Забыли пароль?</Link>
            <Button type="submit" >Войти</Button>
        </div>
      {next && <Navigate to={`/account/${next}`} />}
    </form>
  )
}

export default AuthorizationForm