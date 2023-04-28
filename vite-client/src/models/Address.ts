import { AddressType } from "./AddressType";

export interface Address {
  city: String;
  ward: String;
  country: String;
  district: String;
  addressId: Number;
  apartmentNumber: String;
  addressType: AddressType;
}
