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

export const setSelectedProduct = (product: Product) => ({
    type: CartActionTypes.SET_SELECTED_PRODUCT,
    payload: product
});

export const updateQuantityInCart = (productId: number, quantity?: number) => ({
    type: CartActionTypes.UPDATE_QUANTITY_IN_CART,
    payload: { productId, quantity }
});

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
});