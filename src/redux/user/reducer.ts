import { UserActionTypes } from "./action-types";
import { CheckoutFormData, ContactFormData } from "./types";

interface UserState {
  email: string | null;
  checkoutInfo: CheckoutFormData | null;
  contactInfo: ContactFormData | null;
}

const initialState: UserState = {
  email: null,
  checkoutInfo: null,
  contactInfo: null,
};

const userReducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case UserActionTypes.SAVE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case UserActionTypes.SAVE_CHECKOUT_INFO:
      return {
        ...state,
        checkoutInfo: action.payload,
      };
    case UserActionTypes.SAVE_CONTACT_INFO:
      return {
        ...state,
        contactInfo: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;