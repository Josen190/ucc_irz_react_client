
import { useEffect } from "react";
import { authorization, setUserImage } from "../Reducers/authorizationReduser";
import { useAppDispatch } from "Hooks";
import getUserMe from "Fetch/getUserMe";
import getImage from "Fetch/getImage";

function getAuthData() {
    const jwt = window.localStorage.getItem("jwt");
    const refreshToken = window.localStorage.getItem("refreshToken");
    return { jwt, refreshToken };
  }

export default function useLoadingApp() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        const { jwt: _jwt, refreshToken: _refreshToken } = getAuthData();
        dispatch(authorization({ jwt: _jwt, refreshToken: _refreshToken, user: null }))
        getUserMe().then((user) => {
            dispatch(authorization({ jwt: _jwt, refreshToken: _refreshToken, user: user.getParams() }))
            if (user.image){
                getImage(user.image.id).then((image) => {
                    dispatch(setUserImage({image}))
                })
            }
        });

    }, []);
}