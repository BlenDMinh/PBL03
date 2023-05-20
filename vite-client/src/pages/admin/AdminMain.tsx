import { DollarSign, ShoppingBag, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { Customer } from "../../models/Customer";
import { Order } from "../../models/Order";
import { CustomerService } from "../../services/CustomerService";
import { OrderService } from "../../services/admin/OrderService";

function AdminMain() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [admin, setAdmin] = useState<Customer | undefined>();
  useEffect(() => {
    const service = OrderService.getInstance();
    service.getAll().then((orders) => setOrders(orders as Order[]));
  }, []);
  useEffect(() => {
    const service = CustomerService.getInstance();
    service.login().then(() => setAdmin(service.loggedInCustomer));
  }, []);
  return (
    <main>
      <div className="flex flex-row">
        <AdminNavbar />
        <div className="w-full flex flex-col h-screen">
          <div className="h-2/3 bg-winmart"></div>
          <div className="bg-gray-200 h-full ml-10 flex items-center justify-center">
            <div className="absolute top-20 bg-white rounded-xl w-10/12 h-36 shadow-2xl">
              <span className="flex flex-col justify-center items-center h-full text-3xl font-bold">
                Chào mừng Quản trị viên,
                {admin == undefined ? "" : " " + admin.customerName}
              </span>
            </div>
            <div className="flex flex-row items-center justify-between absolute top-72 gap-10 h-1/3 w-10/12">
              <div className="bg-white rounded-xl h-full shadow-2xl w-full p-10 flex flex-col gap-20">
                <div className="flex flex-row justify-between text-3xl font-bold text-slate-500">
                  <span>Tổng doanh thu</span>
                  <DollarSign className="bg-yellow-500 text-white w-20 h-20 rounded-full shadow-lg p-3" />
                </div>
                <div className="flex flex-row gap-10 text-3xl font-semibold">
                  <span>{sumPrice(orders)}</span>
                  <span>VND</span>
                </div>
              </div>
              <div className="bg-white rounded-xl h-full shadow-2xl w-full p-10 flex flex-col gap-20">
                <div className="flex flex-row justify-between text-3xl font-bold text-slate-500">
                  <span>Số đơn hàng đã đặt</span>
                  <ShoppingBag className="bg-red-500 text-white w-20 h-20 rounded-lg shadow-lg p-3" />
                </div>
                <div className="flex flex-row gap-10 text-3xl font-semibold">
                  <span>{orders.length}</span>
                </div>
              </div>
              <div className="bg-white rounded-xl h-full shadow-2xl w-full p-10 flex flex-col gap-20">
                <div className="flex flex-row justify-between text-3xl font-bold text-slate-500">
                  <span>Số sản phẩm đã mua</span>
                  <ShoppingCart className="bg-green-500 text-white w-20 h-20 rounded-lg shadow-lg p-3" />
                </div>
                <div className="flex flex-row gap-10 text-3xl font-semibold">
                  <span>{sumProductCount(orders)}</span>
                </div>
              </div>
            </div>
            <div className="absolute top-[calc(670px)] bg-white rounded-xl w-10/12 h-96 shadow-2xl">
              <span className="text-6xl text-slate-500 font-bold flex justify-center items-center h-full">
                Web đang được xây dựng
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function sumPrice(orders: Order[]) {
  let sum = 0;
  orders.forEach((order) => {
    if (order.products == undefined) return;
    order.products.forEach((product) => {
      sum += product.listedPrice;
    });
  });
  return sum.toLocaleString();
}

function sumProductCount(orders: Order[]) {
  let sum = 0;
  orders.forEach((order) => {
    if (order.products == undefined) return;
    sum += order.products.length;
  });
  return sum.toLocaleString();
}

export default AdminMain;
