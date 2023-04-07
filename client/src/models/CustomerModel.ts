import { AddressModel } from "./AddressModel";
import { Gender } from "./Gender";
import { OrderModel } from "./OrderModel";
import { ProductModel } from "./ProductModel";

export interface CustomerModel {
    customerId: Number;
    customerName: String;
    gender: Gender
    email: String;
    dateOfBirth: Date;
    cartProducts: ProductModel[]
    orders: OrderModel[]
    addresses: AddressModel[]
}