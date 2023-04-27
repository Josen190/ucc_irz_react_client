import User from "Helpers/User";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import API from "Fetch/Api";
import MinUser from "Helpers/MinUser";
import Image from "Helpers/Image";

interface IAuthorizationState {
    isLogin: boolean;
    jwt: string | null;
    refreshToken: string | null;
    user: ReturnType<User['getType']> | null;

}

interface authorization_payload {
    type: string;
    payload: {
        jwt: string | null;
        refreshToken: string | null;
        user: ReturnType<User['getType']> | null;
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
                MinUser.setAuntificationuUser(new User(payload.user));

            window.localStorage.setItem("jwt", _jwt ?? "null");
            window.localStorage.setItem("refreshToken", _refreshToken ?? "null");

            const isLogin = _jwt && _refreshToken ? true : false;

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
            if (!_state.user)
                return { ..._state, user: null }

            const user = new User(_state.user)
            user.setImage(payload.image);

            MinUser.setAuntificationuUser(user);
            return {
                ..._state, user: user.getType()
            }
        }
    }
})



export const { authorization, setUserImage } = authorizationReducer.actions
export default authorizationReducer.reducer
