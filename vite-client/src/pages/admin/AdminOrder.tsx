import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminOrderRow from "../../components/admin/AdminOrderRow";
import { Order } from "../../models/Order";
import { OrderService } from "../../services/admin/OrderService";

function AdminOrder() {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    const service = OrderService.getInstance();
    service.getAll().then((orders) => setOrders(orders as Order[]));
  }, []);

  return (
    <main>
      <div className="flex flex-row">
        <AdminNavbar />
        <div className="w-full flex flex-col">
          <div className="h-32 bg-winmart">
            <span className="ml-52 h-full flex flex-col justify-center text-white font-bold text-3xl">
              Đơn hàng
            </span>
          </div>
          <div className="bg-gray-200 h-full">
            <div className="ml-32 m-10 flex flex-row justify-between">
              <div></div>
              <div>
                <button className="bg-white shadow-lg rounded justify-center items-center flex w-12 h-12 hover:bg-winmart hover:text-white">
                  <Plus />
                </button>
              </div>
            </div>
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
