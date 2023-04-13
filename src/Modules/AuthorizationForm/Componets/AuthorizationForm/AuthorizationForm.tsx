import React, { FormEvent, useState } from 'react'
import InputField from '../../../../UI/InputField/InputField'
import Button from '../../../../UI/Button/Button';
import fetchAuthentication from '../../Fetch/fetchAuthentication';
import { Navigate } from 'react-router-dom';

function AuthorizationForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [next, setNext] = useState<string | boolean>(false);


    const login = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchAuthentication(email, password).then((userId)=> {
            setNext(userId);
        })
    }
        

    
  return (
    <form onSubmit={login}>
        <InputField
          id="email"
          name="email"
          required={true}
          type="email"
          title="Почта"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          id="password"
          name="password"
          required={true}
          type="password"
          title="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" >Войти</Button>
        {next && <Navigate to={`/account/${next}`} />}
      </form>
  )
}

export default AuthorizationForm