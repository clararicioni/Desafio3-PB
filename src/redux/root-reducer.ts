import { combineReducers } from "redux";
import cartReducer, { CartState } from "../redux/cart/reducer";

export interface RootState {
    cartReducer: CartState;
}

const rootReducer = combineReducers({
    cartReducer,
});

export default rootReducer;