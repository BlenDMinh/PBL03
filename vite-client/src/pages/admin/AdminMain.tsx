import { useEffect, useState } from "react";
import { OrderService } from "../../admin/services/implement/OrderService";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { Order } from "../../models/Order";
import { Customer } from "../../models/Customer";
import { CustomerService } from "../../services/implement/CustomerService";
import { DollarSign, ShoppingBag, ShoppingCart } from "lucide-react";

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
  var sum = 0;
  orders.forEach((order) => {
    if (order.products == undefined) return;
    order.products.forEach((product) => {
      sum += product.listedPrice;
    });
  });
  return sum.toLocaleString();
}

function sumProductCount(orders: Order[]) {
  var sum = 0;
  orders.forEach((order) => {
    if (order.products == undefined) return;
    sum += order.products.length;
  });
  return sum.toLocaleString();
}

export default AdminMain;

// import { useEffect, useState } from "react";
// import { OrderService } from "../../admin/services/implement/OrderService";
// import AdminNavbar from "../../components/admin/AdminNavbar";
// import AdminOrderRow from "../../components/admin/AdminOrderRow";
// import AdminOrderView from "../../components/admin/AdminOrderView";
// import { Order } from "../../models/Order";
// import { Plus } from "lucide-react";

// function AdminMain() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   useEffect(() => {
//     const service = OrderService.getInstance();
//     service.getAll().then((orders) => setOrders(orders as Order[]));
//   }, []);
//   const [order, setOrder] = useState<Order | undefined>(undefined);
//   return (
//     <main>
//       <AdminOrderView
//         order={order}
//         onSubmit={(order) => {
//           console.log(order);
//         }}
//       />
//       <div className="flex flex-row">
//         <AdminNavbar />
//         <div className="w-full flex flex-col">
//           <div className="h-32 bg-winmart"></div>
//           <div className="bg-gray-100">
//             <div className="ml-32 m-10 flex flex-row justify-between">
//               <div></div>
//               <div>
//                 <button className="bg-white shadow-lg rounded justify-center items-center flex w-12 h-12 hover:bg-winmart hover:text-white">
//                   <Plus />
//                 </button>
//               </div>
//             </div>
//             <div className="ml-32 flex flex-col p-10 rounded-xl bg-white shadow-lg m-10 divide-y divide-gray-150">
//               {orders.map((p) => (
//                 <AdminOrderRow
//                   order={p}
//                   onDelete={() => {
//                     //
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default AdminMain;
