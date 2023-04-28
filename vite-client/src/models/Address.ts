import { z } from "zod";
import { AddressType, AddressTypeEnum } from "./AddressType";

export interface Address {
  city: String;
  ward: String;
  country: String;
  district: String;
  addressId: Number;
  apartmentNumber: String;
  addressType: AddressType;
}

export const AddressSchema = z.object({
  addressId: z.number(),
  city: z.string().nullish(),
  ward: z.string().nullish(),
  country: z.string().nullish(),
  district: z.string().nullish(),
  apartmentNumber: z.string().nullish(),
  addressType: AddressTypeEnum
});

export const AddressesSchema = z.array(AddressSchema);