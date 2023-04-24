import { Status } from "./Status";
import { Address } from "./Address";
import { Product } from "./Product";

export interface Order {
  status: Status;
  orderId: Number;
  address: Address;
  dateCreated: Date;
  dateCompleted: Date;
  products: Product[];
}
