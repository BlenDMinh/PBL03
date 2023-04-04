import { CustomerModel } from "./CustomerModel";

export interface LoginResponse {
    customer: CustomerModel;
    token: String;
}