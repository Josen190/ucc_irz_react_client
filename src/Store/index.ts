import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authorizationReduser } from "Modules/AuthController";
import {NewsFilterReduser} from "Modules/News";

const store = configureStore({ reducer: combineReducers({
    authorization: authorizationReduser,
    newsFilter: NewsFilterReduser,
})})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch