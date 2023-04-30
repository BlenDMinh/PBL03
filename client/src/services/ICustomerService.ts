import { Product } from "@/models/Product";
import { Customer } from "@/models/Customer";
import { LoginRequest } from "@/models/LoginRequest";
import { LoginResponse } from "@/models/LoginResponse";

export interface ICustomerService {
  register(customer: Customer, password: string): Promise<void>;
  login(request: LoginRequest | undefined): Promise<LoginResponse>;
  logout(): void;
  update(): void;

  getCartProducts(): Promise<Product[]>;
  addProductToCart(sku: Number): void;
  removeProductFromCart(sku: Number): void;

  loggedInCustomer: Customer | undefined;
}
