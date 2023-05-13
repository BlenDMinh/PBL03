import { z } from "zod";
import { Order, OrderSchema, OrdersSchema } from "../../models/Order";

export interface IOrderService {
  getAll(): Promise<z.infer<typeof OrdersSchema>>;
  getById(id: number): Promise<z.infer<typeof OrderSchema>>;
  insert(order: Order): Promise<z.infer<typeof OrderSchema>>;
  update(order: Order): Promise<z.infer<typeof OrderSchema>>;
  delete(order: Order): Promise<void>;
  deleteById(id: number): Promise<void>;
}
