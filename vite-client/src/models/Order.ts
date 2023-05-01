import { z } from "zod";
import { Address, AddressSchema } from "./Address";
import { Product, ProductsSchema } from "./Product";
import { Status, StatusEnum } from "./Status";

export interface Order {
  status: Status;
  orderId: number;
  address: Address;
  dateCreated: Date;
  dateCompleted: Date;
  products: Product[];
}

export const OrderSchema = z.object({
  status: StatusEnum,
  orderId: z.number(),
  address: AddressSchema,
  dateCreated: z.date(),
  dateCompleted: z.date(),
  product: ProductsSchema,
});

export const OrdersSchema = z.array(OrderSchema);
