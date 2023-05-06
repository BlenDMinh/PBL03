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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/category/:id",
    element: <CategoryProduct />,
  },
  {
    path: "/order",
    element: <OrderListPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
