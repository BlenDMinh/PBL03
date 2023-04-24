export enum AddressType {
  DEFAULT,
  DELIVERY,
}

export interface Address {
  addressId: Number;
  country: String;
  city: String;
  district: String;
  ward: String;
  apartmentNumber: String;
  addressType: AddressType;
}
