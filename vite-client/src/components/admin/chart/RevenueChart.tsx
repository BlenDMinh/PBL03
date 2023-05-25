import Chart from "chart.js";

import { useEffect, useRef } from "react";
import { Order } from "../../../models/Order";

interface OrdersProps {
    orders: Order[]
}

function RevenueChart(props: OrdersProps) {
    return <div>
        <canvas ref={sumPriceMonth(props.orders, 2023,5)} />
    </div>
}

export default RevenueChart;

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