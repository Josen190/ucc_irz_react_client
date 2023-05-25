
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    authorization: authorizationReduser,
    newsFilter: NewsFilterReduser,
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