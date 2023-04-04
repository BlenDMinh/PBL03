import { AddressModel } from "./AddressModel";
import { ProductModel } from "./ProductModel";
import { Status } from "./Status";

export interface OrderModel {
    orderId: Number;
    address: AddressModel;
    dateCreated: Date;
    dateCompleted: Date;
    status: Status;
    products: ProductModel[]
}