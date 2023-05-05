import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./pages/App.tsx";
import Cart from "./pages/Cart.tsx";
import CategoryProduct from "./pages/CategoryProduct.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import OrderPage from "./pages/OrderPage.tsx";

// Create a client
const queryClient = new QueryClient();

// Create a router
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
    element: <OrderPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
