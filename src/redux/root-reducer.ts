import { combineReducers } from "redux";
import cartReducer, { CartState } from "../redux/cart/reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartReducer'],
  };

export interface RootState {
    cartReducer: CartState;
}

const rootReducer = combineReducers({
    cartReducer: persistReducer(persistConfig, cartReducer),
});

export default rootReducer;