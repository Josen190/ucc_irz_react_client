import { configureStore } from "@reduxjs/toolkit";
import { authorizationReduser } from "Modules/AuthController";

const store = configureStore({ reducer: authorizationReduser })

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch