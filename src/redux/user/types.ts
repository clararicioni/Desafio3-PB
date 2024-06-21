export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  companyName?: string;
  zipCode: string;
  countryRegion: string;
  streetAddress: string;
  townCity: string;
  province: string;
  addOnAddress?: string;
  email: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}