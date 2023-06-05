import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authorizationReduser } from "Modules/AuthController";
import { NewsFilterReduser } from "Modules/News";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import popUpStore from "../UI/PopUpMessage/Reduser/PopUpStore";


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    authorization: authorizationReduser,
    newsFilter: NewsFilterReduser,
    popUp: popUpStore,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

})

const persistor = persistStore(store)

export default store
export { persistor }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch