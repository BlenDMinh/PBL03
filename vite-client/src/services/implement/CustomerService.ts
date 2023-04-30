import { Customer } from "../../models/Customer";
import { LoginRequest } from "../../models/LoginRequest";
import { LoginResponse } from "../../models/LoginResponse";
import { ICustomerService } from "../ICustomerService";
import { http } from "../utils/http";

export class CustomerService implements ICustomerService {
  readonly baseUrl = import.meta.env.VITE_API_URL + "/api/customer";

  update(): void {
    throw new Error("Method not implemented.");
  }
  register(customer: Customer, password: string): void {
    throw new Error("Method not implemented.");
  }
  login(request: LoginRequest | undefined = undefined): Promise<LoginResponse> {
    if(request == undefined) {
      if(!localStorage.token)
        return Promise.reject();
      request = {
        token: localStorage.token
      };
    }
    return http.post<LoginResponse>(
      this.baseUrl + "/login",
      new Headers(),
      JSON.stringify(request)
    ).then((response) => {
      this.loggedInCustomer = response.customer;
      localStorage.token = response.token;
      return response;
    });
  }
  logout(): void {
    throw new Error("Method not implemented.");
  }
  changePassword(password: string): void {
    throw new Error("Method not implemented.");
  }

  loggedInCustomer: Customer | undefined;
}
