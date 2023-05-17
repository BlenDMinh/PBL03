import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./pages/App.tsx";
import Cart from "./pages/Cart.tsx";
import CategoryProduct from "./pages/CategoryProduct.tsx";
import Login from "./pages/Login.tsx";
import OrderListPage from "./pages/OrderListPage.tsx";
import Register from "./pages/Register.tsx";
import AdminCategory from "./pages/admin/AdminCategory.tsx";
import AdminCustomer from "./pages/admin/AdminCustomer.tsx";
import AdminMain from "./pages/admin/AdminMain.tsx";
import AdminOrder from "./pages/admin/AdminOrder.tsx";
import AdminProduct from "./pages/admin/AdminProduct.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/cart", element: <Cart /> },
  { path: "/category/:id", element: <CategoryProduct /> },
  { path: "/order", element: <OrderListPage /> },
  { path: "/admin", element: <AdminMain /> },
  { path: "/admin/category", element: <AdminCategory /> },
  { path: "/admin/customer", element: <AdminCustomer /> },
  { path: "/admin/product/:pageNum", element: <AdminProduct /> },
  { path: "/admin/order", element: <AdminOrder /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
