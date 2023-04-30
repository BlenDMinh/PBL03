import { Customer } from "../models/Customer";
import { LoginRequest } from "../models/LoginRequest";
import { LoginResponse } from "../models/LoginResponse";
import { Product } from "../models/Product";

export interface ICustomerService {
  register(customer: Customer, password: string): void;
  login(request: LoginRequest): Promise<LoginResponse>;
  logout(): void;
  update(): void;

  getCartProducts(): Promise<Product[]>;
  addProductToCart(sku: number): void;
  removeProductFromCart(sku: number): void;
}
