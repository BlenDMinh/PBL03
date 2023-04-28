import { Customer } from "./Customer";

export interface LoginResponse {
  token: string;
  customer: Customer;
}
