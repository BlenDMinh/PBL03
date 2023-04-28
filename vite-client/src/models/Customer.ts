import { Address } from "./Address";
import { Gender } from "./Gender";
import { Order } from "./Order";
import { Product } from "./Product";

export interface Customer {
  email: String;
  gender: Gender;
  orders: Order[];
  dateOfBirth: Date;
  customerId: Number;
  customerName: String;
  addresses: Address[];
  cartProducts: Product[];
}
