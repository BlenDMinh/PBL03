import { Customer } from "../models/Customer";
import { LoginRequest } from "../models/LoginRequest";
import { LoginResponse } from "../models/LoginResponse";

export interface ICustomerService {
  register(customer: Customer, password: string): Promise<void>;
  login(request: LoginRequest): Promise<LoginResponse>;
  logout(): void;
  update(): Promise<void>;
  changePassword(password: string): Promise<void>;

  loggedInCustomer: Customer | undefined;
}
