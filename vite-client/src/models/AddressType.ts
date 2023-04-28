import { z } from "zod";

export enum AddressType {
  DEFAULT,
  DELIVERY,
}

export const AddressTypeEnum = z.nativeEnum(AddressType);
