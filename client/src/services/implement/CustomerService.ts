import { http } from "../utils/http";
import { Product } from "@/models/Product";
import { Customer } from "@/models/Customer";
import { LoginRequest } from "@/models/LoginRequest";
import { LoginResponse } from "@/models/LoginResponse";
import { ICustomerService } from "../ICustomerService";
import { injectable } from "inversify";
import "reflect-metadata";
import { getCookie, hasCookie, removeCookies, setCookie } from "cookies-next";

@injectable()
export class CustomerService implements ICustomerService {
  loggedInCustomer: Customer | undefined;
  readonly baseUrl = process.env.apiUrl + "/api/customer";

  update(): void {
    throw new Error("Method not implemented.");
  }
  async register(customer: Customer, password: string): Promise<void> {
    var aCustomer = await http.post<Customer>(this.baseUrl, new Headers(), JSON.stringify(customer));
    await http.post(this.baseUrl + `/${aCustomer.customerId}/change-password`, new Headers(), password);
  }
  async login(request: LoginRequest | undefined = undefined): Promise<LoginResponse> {
    if(request == undefined) {
      var token = hasCookie("token") ? getCookie("token")?.toString() : undefined;
      if(token == undefined)
        throw Error("Blank login info!")
      request = {
        token: token
      }
    }
    var response = await http.post<LoginResponse>(this.baseUrl + "/login", new Headers(), JSON.stringify(request));
    this.loggedInCustomer = response.customer;
    setCookie("token", response.token);
    return response;
  }
  logout(): void {
    if(this.loggedInCustomer == undefined)
      return;
    removeCookies("token");
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
