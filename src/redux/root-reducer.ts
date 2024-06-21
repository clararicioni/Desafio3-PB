import { combineReducers } from "redux";
import cartReducer, { CartState } from "../redux/cart/reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartReducer'],
};

export interface RootState {
    userReducer: any;
    cartReducer: CartState;
}

const rootReducer = combineReducers({
    cartReducer: persistReducer(persistConfig, cartReducer),
    userReducer: persistReducer(persistConfig, userReducer),
});

export default rootReducer;