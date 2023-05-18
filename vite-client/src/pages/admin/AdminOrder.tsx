import { useEffect, useState } from "react";
import { OrderService } from "../../admin/services/implement/OrderService";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminOrderRow from "../../components/admin/AdminOrderRow";
import AdminOrderView from "../../components/admin/AdminOrderView";
import { Order } from "../../models/Order";

function AdminOrder() {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    const service = OrderService.getInstance();
    service.getAll().then((orders) => setOrders(orders as Order[]));
  }, []);
  const [order, setOrder] = useState<Order | undefined>(undefined);
  return (
    <main>
      <AdminOrderView
        order={order}
        onSubmit={(order) => {
          console.log(order);
        }}
      />
      <div className="flex flex-row">
        <AdminNavbar />
        <div className="w-full flex flex-col">
          <div className="h-32 bg-winmart"></div>
          <div className="bg-gray-100">
            <div className="ml-32 flex flex-col p-10 rounded-xl bg-white shadow-lg m-10 divide-y divide-gray-150">
              {orders.map((p) => (
                <AdminOrderRow
                  order={p}
                  onDelete={() => {
                    //
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminOrder;
