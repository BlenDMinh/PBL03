import { z } from "zod";
import { Order, OrderSchema } from "../models/Order";

export interface IOrderService {
  getById(id: number): Promise<z.infer<typeof OrderSchema>>;
  insert(order: Order): Promise<z.infer<typeof OrderSchema>>;
  update(order: Order): Promise<z.infer<typeof OrderSchema>>;
}
