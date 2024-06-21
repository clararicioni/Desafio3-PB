import { UserActionTypes } from './action-types';
import { CheckoutFormData, ContactFormData } from './types';

export const saveEmail = (email: string) => ({
  type: UserActionTypes.SAVE_EMAIL,
  payload: email,
});

export const saveCheckoutInfo = (formData: CheckoutFormData) => ({
  type: UserActionTypes.SAVE_CHECKOUT_INFO,
  payload: formData,
});

export const saveContactInfo = (formData: ContactFormData) => ({
  type: UserActionTypes.SAVE_CONTACT_INFO,
  payload: formData,
});
