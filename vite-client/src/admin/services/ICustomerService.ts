import { z } from "zod";
import {
  Customer,
  CustomerSchema,
  CustomersSchema,
} from "../../models/Customer";

export interface ICustomerService {
  getAll(): Promise<z.infer<typeof CustomersSchema>>;
  getById(id: number): Promise<z.infer<typeof CustomerSchema>>;
  insert(category: Customer): Promise<z.infer<typeof CustomerSchema>>;
  update(category: Customer): Promise<z.infer<typeof CustomerSchema>>;
  delete(category: Customer): Promise<void>;
  deleteById(id: number): Promise<void>;
}
