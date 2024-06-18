import { CartActionTypes } from "./action-types";
import { Product } from "./reducer";

export const addProductToCart = (product: Product) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload: product
});

export const removeFromCart = (productId: number) => ({
    type: CartActionTypes.REMOVE_PRODUCT_FROM_CART_SIDEBAR,
    payload: productId
});