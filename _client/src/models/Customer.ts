import { Address } from "./Address";
import { Gender } from "./Gender";
import { Order } from "./Order";
import { Product } from "./Product";

export interface Customer {
  customerId: Number;
  customerName: String;
  gender: Gender;
  email: String;
  dateOfBirth: Date;
  cartProducts: Product[];
  orders: Order[];
  addresses: Address[];
}
