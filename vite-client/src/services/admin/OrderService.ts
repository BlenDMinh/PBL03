import { z } from "zod";
import { IOrderService } from "../../interface/admin/IOrderService";
import { Order, OrderSchema, OrdersSchema } from "../../models/Order";
import { http } from "../../utils/http";

export class OrderService implements IOrderService {
  readonly baseUrl = "http://localhost:8080/api/order";
  private static instance: OrderService;

  public static getInstance() {
    if (this.instance == undefined) this.instance = new OrderService();
    return this.instance;
  }

  getAll(): Promise<z.infer<typeof OrdersSchema>> {
    return http.get<z.infer<typeof OrdersSchema>>(this.baseUrl);
  }

  getById(id: number): Promise<z.infer<typeof OrderSchema>> {
    return http.get<z.infer<typeof OrderSchema>>(this.baseUrl + "/" + id);
  }

  insert(order: Order): Promise<z.infer<typeof OrderSchema>> {
    return http.post(this.baseUrl, new Headers(), JSON.stringify(order));
  }

  update(order: Order): Promise<z.infer<typeof OrderSchema>> {
    return http.put(this.baseUrl, new Headers(), JSON.stringify(order));
  }

  delete(order: Order): Promise<void> {
    return http.delete(this.baseUrl, new Headers(), JSON.stringify(order));
  }
  deleteById(id: number): Promise<void> {
    return http.delete(this.baseUrl + "/" + id);
  }
}
