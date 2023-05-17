import {
  Archive,
  BarChart,
  Box,
  ChevronLeft,
  ChevronRight,
  LayoutList,
  User,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminNavbar() {
  const [isExtend, setExtend] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div>
      <div
        className={
          "bg-white z-50 fixed self-start shadow-md h-screen w-" +
          (isExtend ? "1/6" : "fit") +
          " flex flex-col justify-center items-center"
        }
      >
        {isExtend ? (
          <button
            className={
              "border flex items-center gap-5 px-4 py-5 rounded-md text-xl text-slate-500 font-bold hover:bg-winmart hover:text-white w-" +
              (isExtend ? "52" : "fit") +
              " mt-4 h-20 m-2"
            }
            onClick={() => setExtend(!isExtend)}
          >
            <ChevronLeft />
          </button>
        ) : (
          <button
            className={
              "border flex items-center gap-5 px-4 py-5 rounded-md text-xl text-slate-500 font-bold hover:bg-winmart hover:text-white w-" +
              (isExtend ? "52" : "fit") +
              " mt-4 h-20 m-2"
            }
            onClick={() => setExtend(!isExtend)}
          >
            <ChevronRight />
          </button>
        )}
        <button
          className={
            "flex items-center gap-5 px-4 py-5 rounded-md text-xl text-slate-500 font-bold hover:bg-winmart hover:text-white w-" +
            (isExtend ? "52" : "fit") +
            " mt-4 h-20 m-2"
          }
          onClick={() => navigate("/admin")}
        >
          <BarChart />
          {isExtend ? <span>Dash board</span> : undefined}
        </button>
        <button
          className={
            "flex items-center gap-5 px-4 py-5 rounded-md text-xl text-slate-500 font-bold hover:bg-winmart hover:text-white w-" +
            (isExtend ? "52" : "fit") +
            " mt-4 h-20 m-2"
          }
          onClick={() => navigate("/admin/category")}
        >
          <LayoutList />
          {isExtend ? <span>Category</span> : undefined}
        </button>
        <button
          className={
            "flex items-center gap-5 px-4 py-5 rounded-md text-xl text-slate-500 font-bold hover:bg-winmart hover:text-white w-" +
            (isExtend ? "52" : "fit") +
            " mt-4 h-20 m-2"
          }
          onClick={() => navigate("/admin/product/0")}
        >
          <Box />
          {isExtend ? <span>Product</span> : undefined}
        </button>
        <button
          className={
            "flex items-center gap-5 px-4 py-5 rounded-md text-xl text-slate-500 font-bold hover:bg-winmart hover:text-white w-" +
            (isExtend ? "52" : "fit") +
            " mt-4 h-20 m-2"
          }
          onClick={() => navigate("/admin/customer")}
        >
          <User />
          {isExtend ? <span>Customer</span> : undefined}
        </button>
        <button
          className={
            "flex items-center gap-5 px-4 py-5 rounded-md text-xl text-slate-500 font-bold hover:bg-winmart hover:text-white w-" +
            (isExtend ? "52" : "fit") +
            " mt-4 h-20 m-2"
          }
          onClick={() => navigate("/admin/order")}
        >
          <Archive />
          {isExtend ? <span>Order</span> : undefined}
        </button>
      </div>
    </div>
  );
}

export default AdminNavbar;
