import User from "Helpers/User";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import API from "Fetch/Api";
import MinUser from "Helpers/MinUser";
import Image from "Helpers/Image";

export interface IAuthorizationState {
    isLogin: boolean;
    jwt: string | null;
    refreshToken: string | null;
    user: User | null;

}

interface authorization_payload {
    type: string;
    payload: {
        jwt: string | null;
        refreshToken: string | null;
        user: User | null;
    }
}

const initialState: IAuthorizationState = {
    isLogin: false,
    jwt: null,
    refreshToken: null,
    user: null
}

const authorizationReducer = createSlice({
    name: 'authorizationState',
    initialState,
    reducers: {
        authorization(_state, { payload }: authorization_payload) {
            const _jwt = payload.jwt;
            const _refreshToken = payload.refreshToken;
            const _user = payload.user;
            API.setJwt(_jwt);
            API.setRefreshToken(_refreshToken);

            if (payload.user)
                MinUser.setAuntificationuUser(payload.user);

            window.localStorage.setItem("jwt", _jwt ?? "null");
            window.localStorage.setItem("refreshToken", _refreshToken ?? "null");

            const isLogin = _jwt && _refreshToken && _user ? true : false;

            return {
                isLogin, jwt: _jwt, refreshToken: _refreshToken, user: _user
            }
        },

        setUserImage(_state, { payload }: {
            type: string;
            payload: {
                image: Image;
            }
        }) {

            // const imageJson = JSON.stringify(payload.image);
            // console.log(imageJson);
            
            if (_state.user)
                MinUser.setAuntificationuUser(_state.user.setImage(payload.image));
            console.log(payload.image);
            
            return {
                ..._state, user: _state.user ? _state.user.setImage(payload.image) : null
            }
        }
    }
})



export const { authorization, setUserImage } = authorizationReducer.actions
export default authorizationReducer.reducer
