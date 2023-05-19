import { z } from "zod";
import { Address, AddressesSchema } from "./Address";
import { Gender, GenderEnum } from "./Gender";
import { Order, OrdersSchema } from "./Order";
import { Product, ProductsSchema } from "./Product";

export interface Customer {
  email: string;
  gender: Gender;
  orders: Order[];
  dateOfBirth: Date;
  customerId: number;
  customerName: string;
  addresses: Address[];
  cartProducts: Product[];
}

export const CustomerSchema = z.object({
  customerId: z.number(),
  customerName: z.string(),
  email: z.string(),
  gender: GenderEnum,
  orders: OrdersSchema,
  dateOfBirth: z.date(),
  addresses: AddressesSchema,
  cartProducts: ProductsSchema,
});

export const CustomersSchema = z.array(CustomerSchema);
