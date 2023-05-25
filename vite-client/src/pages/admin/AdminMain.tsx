import { DollarSign, ShoppingBag, ShoppingCart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { Customer } from "../../models/Customer";
import { Order } from "../../models/Order";
import { CustomerService } from "../../services/CustomerService";
import { OrderService } from "../../services/admin/OrderService";
import Chart from "chart.js";
import React from "react";



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
            
            <div className="absolute top-[calc(670px)] bg-white rounded-xl w-10/12 h-200 shadow-2xl">
                <canvas ref={sumPriceMonth(orders,2023,5)} />
            </div>
            {/* <div className="absolute top-[calc(1500px)] bg-white rounded-xl w-10/12 h-200 shadow-2xl">

            </div> */}
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

function sumPriceYear(orders: Order[], year : number){
  let ordersByMonth = Array(12).fill(0);
  orders.forEach((order) => {
  const date = new Date(order.dateCreated);
  let monthIndex = date.getMonth();
  let yearIndex = date.getFullYear();
  if (order.products == undefined) return;
  if (yearIndex == year)  
    order.products.forEach((product) => {
      ordersByMonth[monthIndex] += product.listedPrice;
  });
});
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");

    if (!ctx) return;

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Tổng doanh thu theo tháng (VND)",
            data: ordersByMonth,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, [ordersByMonth]);
    return chartRef;
} 

function sumPriceMonth(orders: Order[], year: number, month: number) {
  let ordersByDay = Array(getDaysInMonth(year, month)).fill(0);

  orders.forEach((order) => {
    const date = new Date(order.dateCreated);
    let dayIndex = date.getDate() - 1;
    let monthIndex = date.getMonth() + 1;
    let yearIndex = date.getFullYear();
    if (order.products == undefined) return;
    if (yearIndex == year && monthIndex == month) {
      order.products.forEach((product) => {
        ordersByDay[dayIndex] += product.listedPrice;
      });
    }
  });

  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");

    if (!ctx) return;

    new Chart(ctx, {
      type: "line",
      data: {
        labels: getDaysArray(year, month),
        datasets: [
          {
            label: "Tổng doanh thu theo ngày (VND)",
            data: ordersByDay,
            fill: false,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, [ordersByDay]);

  return chartRef;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

function getDaysArray(year: number, month: number) {
  const numDays = getDaysInMonth(year, month);
  const daysArray = [];

  for (let i = 1; i <= numDays; i++) {
    daysArray.push(i.toString());
  }

  return daysArray;
}



export default AdminMain;
