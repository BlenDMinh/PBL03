import { Customer } from "../../models/Customer";
import { LoginRequest } from "../../models/LoginRequest";
import { LoginResponse } from "../../models/LoginResponse";
import { ICustomerService } from "../ICustomerService";
import { http } from "../utils/http";

export class CustomerService implements ICustomerService {
  private static instance: CustomerService;
  public static getInstance(): CustomerService {
    if (!CustomerService.instance)
      CustomerService.instance = new CustomerService();
    return CustomerService.instance;
  }

  private constructor() {
    return;
  }

  readonly cusUrl = "http://localhost:8080/api/customer";
  readonly autUrl = "http://localhost:8080/api/authen";

  update(): Promise<void> {
    if (this.loggedInCustomer == undefined) return Promise.reject();
    return http.put(
      this.cusUrl,
      new Headers(),
      JSON.stringify(this.loggedInCustomer)
    );
  }

  register(customer: Customer, password: string): Promise<void> {
    return http
      .post<Customer>(
        this.autUrl + "/register",
        new Headers(),
        JSON.stringify({
          customer: customer,
          password: password,
        })
      )
      .then((customer) => {
        this.loggedInCustomer = customer;
      });
  }

  async login(
    request: LoginRequest | undefined = undefined
  ): Promise<LoginResponse> {
    if (request === undefined) {
      if (!localStorage.token) return Promise.reject();
      request = {
        token: localStorage.token,
      };
    }
    const response = await http.post<LoginResponse>(
      this.autUrl + "/login",
      new Headers(),
      JSON.stringify(request)
    );
    this.loggedInCustomer = response.customer;
    localStorage.token = response.token;
    return response;
  }

  logout = () => {
    return http
      .post(this.autUrl + "/logout", new Headers(), localStorage.token)
      .then(() => {
        this.loggedInCustomer = undefined;
        localStorage.token = undefined;
      });
  };

  changePassword(password: string): Promise<void> {
    if (this.loggedInCustomer == undefined) return Promise.reject();
    return http.post(
      this.autUrl + "/" + this.loggedInCustomer.customerId + "/change-password",
      new Headers(),
      password
    );
  }

  loggedInCustomer: Customer | undefined;
}
