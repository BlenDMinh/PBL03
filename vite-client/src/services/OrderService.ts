import { z } from "zod";
import { IOrderService } from "../interface/IOrderService";
import { Order, OrderSchema } from "../models/Order";
import { http } from "../utils/http";

export class OrderService implements IOrderService {
  readonly baseUrl = "http://localhost:8080/api/order";
  private static instance: OrderService;

  public static getInstance() {
    if (this.instance == undefined) this.instance = new OrderService();
    return this.instance;
  }

  getById(id: number): Promise<z.infer<typeof OrderSchema>> {
    return http.get(this.baseUrl + "/" + id);
  }

  insert(order: Order): Promise<z.infer<typeof OrderSchema>> {
    return http.post(this.baseUrl, new Headers(), JSON.stringify(order));
  }

  update(order: Order): Promise<z.infer<typeof OrderSchema>> {
    return http.put(this.baseUrl, new Headers(), JSON.stringify(order));
  }
}
