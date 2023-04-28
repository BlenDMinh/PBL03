import { Customer } from "./Customer";

export interface LoginResponse {
  token: String;
  customer: Customer;
}
