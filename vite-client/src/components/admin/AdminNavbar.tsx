import { BarChart, Box, User } from "lucide-react";

function AdminNavbar() {
    return (
        <div className="self-start shadow-xl h-screen w-1/5 flex flex-col justify-center items-center">
            <button className="flex items-center gap-5 text-sm px-4 py-5 rounded-md text-xl text-slate-500 font-bold hover:bg-winmart hover:text-white w-52 mt-6">
                <BarChart/>
                <span>Dash board</span>
            </button>
            <button className="flex items-center gap-5 text-sm px-4 py-5 rounded-md text-xl text-slate-500 font-bold hover:bg-winmart hover:text-white w-52 mt-6">
                <Box/>
              <span>Product</span>
            </button>
            <button className="flex items-center gap-5 text-sm px-4 py-5 rounded-md text-xl text-slate-500 font-bold hover:bg-winmart hover:text-white w-52 mt-6">
                <User/>
              <span className="">Customer</span>
            </button>
        </div>
    )
}

export default AdminNavbar;