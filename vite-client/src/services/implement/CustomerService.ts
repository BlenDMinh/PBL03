import { Customer } from "../../models/Customer";
import { LoginRequest } from "../../models/LoginRequest";
import { LoginResponse } from "../../models/LoginResponse";
import { ICustomerService } from "../ICustomerService";
import { http } from "../utils/http";

export class CustomerService implements ICustomerService {
  readonly baseUrl = "http://localhost:8080/api/customer";

  update(): Promise<void> {
    if(this.loggedInCustomer == undefined)
      return Promise.reject();
    return http.put(this.baseUrl, new Headers(), JSON.stringify(this.loggedInCustomer));
  }
  register(customer: Customer, password: string): Promise<void> {
    return http.post<Customer>(this.baseUrl, new Headers(), JSON.stringify(customer))
    .then((nCustomer) => {
      this.loggedInCustomer = nCustomer;
      this.changePassword(password);
    });
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
  logout(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  changePassword(password: string): Promise<void> {
    if(this.loggedInCustomer == undefined)
      return Promise.reject();
    return http.post(this.baseUrl + "/" + this.loggedInCustomer.customerId + "/change-password", new Headers(), password);
  }

  loggedInCustomer: Customer | undefined;
}
