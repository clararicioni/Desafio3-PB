import { CartActionTypes } from "./action-types";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  oldPrice?: number | null;
  discount?: string | null;
  new?: boolean;
}

export interface CartState {
  products: Product[];
  selectedProduct: Product | null;
  subtotal: number;
}

const initialState: CartState = {
  products: [],
  selectedProduct: null,
  subtotal: 0,
};

const cartReducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case CartActionTypes.REMOVE_PRODUCT_FROM_CART_SIDEBAR:
      const productIdToRemove = action.payload;
      const indexToRemove = state.products.findIndex(product => product.id === productIdToRemove);
      if (indexToRemove !== -1) {
        const updatedProducts = [...state.products];
        updatedProducts.splice(indexToRemove, 1);
        return {
          ...state,
          products: updatedProducts,
        };
      }
      return state;
    case CartActionTypes.SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
