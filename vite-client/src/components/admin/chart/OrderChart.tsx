import Chart from "chart.js";
import { useEffect, useRef, useState } from "react";
import { Order } from "../../../models/Order";
import React, { Component } from "react";
import { SimpleDropdown } from "react-js-dropdavn";
import "react-js-dropdavn/dist/index.css";

interface OrdersProps {
  orders: Order[];
}

function OrderChart(props: OrdersProps) {
  const [selectedYear, setSelectedYear] = useState<number>(2023);
  const [selectedMonth, setSelectedMonth] = useState<number | undefined>(5);
  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex justify-center items-center text-3xl text-slate-700 font-bold">
        <span>Biểu đồ đơn hàng</span>
      </div>
      <div className="flex gap-5">
        <SimpleDropdown
          options={Year()}
          searchable
          defaultValue={selectedYear}
          configs={{ position: { y: "bottom", x: "center" } }}
          onChange={(selectedOption) => {
            setSelectedYear(selectedOption.value);
          }}
        />
        <SimpleDropdown
          options={Month()}
          searchable
          defaultValue={selectedMonth}
          onChange={(selectedOption) => {
            setSelectedMonth(selectedOption.value);
          }}
          configs={{ position: { y: "bottom", x: "center" } }}
        />
      </div>
      <div className="flex-auto relative">
        {selectedMonth == 13 ? (
          <canvas ref={sumCountYear(props.orders, selectedYear)} />
        ) : (
          <canvas
            ref={sumCountMonth(props.orders, selectedYear, selectedMonth)}
          />
        )}
      </div>
    </div>
  );
}

export default OrderChart;

function sumCountYear(orders: Order[], year: number) {
  let ordersByMonth = Array(12).fill(0);
  orders.forEach((order) => {
    const date = new Date(order.dateCreated);
    let monthIndex = date.getMonth();
    let yearIndex = date.getFullYear();
    if (order.products == undefined) return;
    if (yearIndex == year) ordersByMonth[monthIndex]++;
  });
  let chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");

    if (!ctx) return;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Tổng số đơn hàng theo tháng",
            data: ordersByMonth,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        y: {
          min: 0,
          max: 100,
        },
        maintainAspectRatio: false,
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

function sumCountMonth(orders: Order[], year: number, month: number) {
  let ordersByDay = Array(getDaysInMonth(year, month)).fill(0);

  orders.forEach((order) => {
    const date = new Date(order.dateCreated);
    let dayIndex = date.getDate() - 1;
    let monthIndex = date.getMonth() + 1;
    let yearIndex = date.getFullYear();
    if (order.products == undefined) return;
    if (yearIndex == year && monthIndex == month) {
      ordersByDay[dayIndex]++;
    }
  });

  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");

    if (!ctx) return;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    new Chart(ctx, {
      type: "line",
      data: {
        labels: getDaysArray(year, month),
        datasets: [
          {
            label: "Tổng số đơn hàng theo ngày",
            data: ordersByDay,
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            min: 0,
            max: 100,
          },
          maintainAspectRatio: false,
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

function Month() {
  let data = [];
  for (let i = 1; i <= 12; i++) {
    data.push({ label: `Tháng ${i}`, value: i });
  }
  data.push({ label: "Tất cả", value: 13 });
  return data;
}

function Year() {
  let data = [];
  for (let i = 2000; i <= 2050; i++) {
    data.push({ label: `Năm ${i}`, value: i });
  }
  return data;
}
