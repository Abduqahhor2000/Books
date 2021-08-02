import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import userReducer from "./reducers/userReducer";
import logger from 'redux-logger';

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"]
}
const rootReducer = combineReducers({
    user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(logger));

export const persistor = persistStore(store);
export default store;
