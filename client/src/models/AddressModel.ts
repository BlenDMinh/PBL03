import { AddressType } from "./AddressType";

export interface AddressModel {
    addressId: Number;
    country: String;
    city: String;
    district: String;
    ward: String;
    apartmentNumber: String;
    addressType: AddressType
}