import User from "Helpers/User";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import VisitingUser from "Helpers/VisitingUser";
import Image from "Helpers/Image";
import fetch from "Fetch/Fetch";

interface IAuthorizationState {
    isLogin: boolean;
    jwt: string | null;
    refreshToken: string | null;
    user: ReturnType<User['getParams']> | null;

}

interface authorization_payload {
    type: string;
    payload: {
        jwt: string | null;
        refreshToken: string | null;
        user: ReturnType<User['getParams']> | null;
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
            fetch.setRefres(_jwt, _refreshToken);

            if (payload.user)
                VisitingUser.setAuntificationuUser(new User(payload.user));

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

            VisitingUser.setAuntificationuUser(user);
            return {
                ..._state, user: user.getParams()
            }
        }
    }
})



export const { authorization, setUserImage } = authorizationReducer.actions
export default authorizationReducer.reducer
