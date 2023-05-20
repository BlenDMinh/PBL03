import { z } from "zod";
import { ICustomerService } from "../../interface/admin/ICustomerService";
import {
  Customer,
  CustomerSchema,
  CustomersSchema,
} from "../../models/Customer";
import { http } from "../../utils/http";

export class CustomerService implements ICustomerService {
  private static instance: CustomerService = new CustomerService();

  static getInstance(): CustomerService {
    if (this.instance == undefined) this.instance = new CustomerService();
    return this.instance;
  }

  private constructor() {
    return;
  }

  readonly baseUrl = "http://localhost:8080/api/customer";

  getAll(): Promise<z.infer<typeof CustomersSchema>> {
    return http.get<z.infer<typeof CustomersSchema>>(this.baseUrl);
  }
  getById(id: number): Promise<z.infer<typeof CustomerSchema>> {
    return http.get<z.infer<typeof CustomerSchema>>(this.baseUrl + "/" + id);
  }
  insert(customer: Customer): Promise<z.infer<typeof CustomerSchema>> {
    return http.post(this.baseUrl, new Headers(), JSON.stringify(customer));
  }
  update(customer: Customer): Promise<z.infer<typeof CustomerSchema>> {
    return http.put(this.baseUrl, new Headers(), JSON.stringify(customer));
  }
  delete(customer: Customer): Promise<void> {
    return http.delete(this.baseUrl, new Headers(), JSON.stringify(customer));
  }
  deleteById(id: number): Promise<void> {
    return http.delete(this.baseUrl + "/" + id);
  }
}
