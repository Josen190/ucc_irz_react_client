import React, { useEffect } from "react";
import API from "../../../../Fetch/Api";
import { authorization } from "../../Reducers/authorizationReduser";
import { useAppDispatch, useAppSelector } from "Hooks";

function getAuthData() {
  const jwt = window.localStorage.getItem("jwt");
  const refreshToken = window.localStorage.getItem("refreshToken");
  return { jwt, refreshToken };
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AuthController = ({ children }: Props) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((s) => s.authorization.user);

  useEffect(() => {
    const { jwt: _jwt, refreshToken: _refreshToken } = getAuthData();
    API.setJwt(_jwt);
    API.setRefreshToken(_refreshToken);
    API.getUserMe().then((user) => {
      dispatch(authorization({ jwt: _jwt, refreshToken: _refreshToken, user }))
    });
  }, []);


  API.sendRefreshToken((jwt, refreshToken) => {
    dispatch(authorization({ jwt, refreshToken, user: (jwt === null || refreshToken === null) ? null : user }))
  });

  return (
    <div>
      {children}
    </div>
  );
};
export default AuthController;
