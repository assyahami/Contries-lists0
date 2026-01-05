import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import countrySlice from "./slice/Country.slice";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    country: countrySlice,
})

const persistedReducered = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducered,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
    },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

