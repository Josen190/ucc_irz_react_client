import User from "Helpers/User";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import API from "Fetch/Api";

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

            window.localStorage.setItem("jwt", _jwt ?? "null");
            window.localStorage.setItem("refreshToken", _refreshToken ?? "null");

            const isLogin = _jwt && _refreshToken && _user ? true : false;
            
            return {
                isLogin, jwt: _jwt, refreshToken: _refreshToken, user: _user
            }
        },
    }
})



export const { authorization } = authorizationReducer.actions
export default authorizationReducer.reducer
