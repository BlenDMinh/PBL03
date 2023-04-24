import { Status } from "./Status";
import { Address } from "./Address";
import { Product } from "./Product";

export interface Order {
  orderId: Number;
  address: Address;
  dateCreated: Date;
  dateCompleted: Date;
  status: Status;
  products: Product[];
}
