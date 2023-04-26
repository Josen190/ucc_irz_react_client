

import User from "Helpers/User";
import { createSlice } from '@reduxjs/toolkit'

interface IUserAdministrationState {
    user: ReturnType<User['getType']> | null;
}

interface setUser_payload {
    type: string;
    payload: {
        user: ReturnType<User['getType']> | null;
    }
}

const initialState: IUserAdministrationState = {
    user: null
}

const userAdministrationReducer = createSlice({
    name: 'userAdministrationState',
    initialState,
    reducers: {
        setUser(_state, { payload: { user } }: setUser_payload) {
            return { user }
        }
    }
})



export const { setUser } = userAdministrationReducer.actions
export default userAdministrationReducer.reducer
