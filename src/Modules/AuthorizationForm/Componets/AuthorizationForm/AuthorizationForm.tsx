import React, { FormEvent, useState } from 'react'
import Button from '../../../../UI/Button/Button';
import fetchAuthentication from '../../Fetch/fetchAuthentication';
import {Link, Navigate} from 'react-router-dom';
import { useAppDispatch } from 'Hooks';
import { authorization } from 'Modules/AuthController';
import "./AuthorizationForm.scss"
import { InputText } from 'UI/Input';
import useText from 'Hooks/useText';

function AuthorizationForm() {
  const dispatch = useAppDispatch()
  const [email, setEmail] = useText();
  const [password, setPassword] = useText();
  const [next, setNext] = useState<string | false>(false);
  const [errorMessege, setErrorMessege] = useState<string>()

  const login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;
    fetchAuthentication(email, password).then((data) => {
      dispatch(authorization({ jwt: data.jwt, refreshToken: data.refreshToken, user: data.user ? data.user.getParams() : null }))
      setNext(data.user.id);
    }).catch((error) => {
      setErrorMessege(error as string);
    })
  }

  return (
    <form onSubmit={login} className="authorization-form">
      <InputText
        id="email"
        name="email"
        required={true}
        title="Почта"
        onSetValue={setEmail}
      />
      <InputText
        id="password"
        name="password"
        required={true}
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