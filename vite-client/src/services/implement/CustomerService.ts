import dotenv from "dotenv";
import "reflect-metadata";
import { Customer } from "../../models/Customer";
import { LoginRequest } from "../../models/LoginRequest";
import { LoginResponse } from "../../models/LoginResponse";
import { Product } from "../../models/Product";
import { ICustomerService } from "../ICustomerService";
import { http } from "../utils/http";

dotenv.config();
export class CustomerService implements ICustomerService {
  readonly baseUrl = "http://localhost:8080/api/customer";

  update(): void {
    throw new Error("Method not implemented.");
  }
  register(customer: Customer, password: string): void {
    throw new Error("Method not implemented.");
  }
  login(request: LoginRequest): Promise<LoginResponse> {
    return http.post<LoginResponse>(
      this.baseUrl + "/login",
      new Headers(),
      JSON.stringify(request)
    );
  }
  logout(): void {
    throw new Error("Method not implemented.");
  }
  getCartProducts(): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }
  addProductToCart(sku: number): void {
    throw new Error("Method not implemented.");
  }
  removeProductFromCart(sku: number): void {
    throw new Error("Method not implemented.");
  }
}
