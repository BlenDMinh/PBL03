import { z } from "zod";
import { Order, OrderSchema } from "../models/Order";

export interface IOrderService {
    getById(id: Number): Promise<z.infer<typeof OrderSchema>>;
    insert(order: Order): Promise<z.infer<typeof OrderSchema>>;
    update(order: Order): Promise<z.infer<typeof OrderSchema>>;
}