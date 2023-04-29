import { http } from "../utils/http";
import { Product } from "@/models/Product";
import { Customer } from "@/models/Customer";
import { LoginRequest } from "@/models/LoginRequest";
import { LoginResponse } from "@/models/LoginResponse";
import { ICustomerService } from "../ICustomerService";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class CustomerService implements ICustomerService {
  readonly baseUrl = process.env.apiUrl + "/api/customer";

  update(): void {
    throw new Error("Method not implemented.");
  }
  register(customer: Customer, password: string): void {
    throw new Error("Method not implemented.");
  }
  login(request: LoginRequest): Promise<LoginResponse> {
    return http.post<LoginResponse>(this.baseUrl + "/login", new Headers(), JSON.stringify(request));
  }
  logout(): void {
    throw new Error("Method not implemented.");
  }
  getCartProducts(): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }
  addProductToCart(sku: Number): void {
    throw new Error("Method not implemented.");
  }
  removeProductFromCart(sku: Number): void {
    throw new Error("Method not implemented.");
  }
}
