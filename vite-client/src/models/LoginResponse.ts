import { Customer } from "./Customer";
import { Permission } from "./Permission";

export interface LoginResponse {
  token: string;
  customer: Customer;
  permission: Permission;
}
