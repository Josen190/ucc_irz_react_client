import React from "react";

import { authorization } from "../../Reducers/authorizationReduser";
import { useAppDispatch, useAppSelector } from "Hooks";
import useLoadingApp from "../../Hooks/useLoadingApp";
import fetch from "Fetch/Fetch";



interface Props {
  children: JSX.Element | JSX.Element[];
}

const AuthController = ({ children }: Props) => {
  useLoadingApp();
  
  const dispatch = useAppDispatch()
  const user = useAppSelector((s) => s.authorization.user);
  fetch.sendRefreshToken((jwt, refreshToken) => {
    dispatch(authorization({ jwt, refreshToken, user: (jwt === null || refreshToken === null) ? null : user }))
  });

  return (
    <div>
      {children}
    </div>
  );
};
export default AuthController;
