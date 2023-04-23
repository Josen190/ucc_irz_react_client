import API from "Fetch/Api";
import { useEffect } from "react";
import { authorization } from "../Reducers/authorizationReduser";
import { useAppDispatch } from "Hooks";

function getAuthData() {
    const jwt = window.localStorage.getItem("jwt");
    const refreshToken = window.localStorage.getItem("refreshToken");
    return { jwt, refreshToken };
  }

export default function useLoadingApp() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        const { jwt: _jwt, refreshToken: _refreshToken } = getAuthData();
        API.setJwt(_jwt);
        API.setRefreshToken(_refreshToken);
        API.getUserMe().then((user) => {
            dispatch(authorization({ jwt: _jwt, refreshToken: _refreshToken, user: user.getType() }))
        });
    }, []);
}