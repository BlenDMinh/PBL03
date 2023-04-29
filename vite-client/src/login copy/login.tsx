import "../index.css";
import React from "react";
import ReactDOM from "react-dom";
import { User, Key } from "lucide-react";
import WinmartLogoRed from "../assets/Company/WinmartLogoRed.png";

ReactDOM.render(
  <React.StrictMode>
    <main className="w-screen h-screen bg-[#f0f8ff]">
      <div className="max-w-xl mx-auto h-full flex flex-col justify-center items-center bg-white">
        <a href="/">
          <img
            src={WinmartLogoRed}
            alt={"Winmart Logo"}
            title="Logo"
            className="mb-12 w-60 h-auto"
          />
        </a>

        <form
          action=""
          method="POST"
          className=" flex flex-col items-center justify-center gap-y-6 text-gray-900"
        >
          <div className="flex border border-gray-400 rounded-lg shadow-sm overflow-hidden">
            <div className="p-2 border-r border-gray-400 bg-zinc-50">
              <User />
            </div>
            <input
              type="text"
              name=""
              id=""
              title="Tên đăng nhập"
              placeholder="Tên đăng nhập"
              required
              className="p-2 w-56 text-sm bg-zinc-50 outline-none"
            />
          </div>

          <div className="flex border border-gray-400 rounded-lg shadow-sm overflow-hidden">
            <div className="p-2 border-r border-gray-400 bg-zinc-50">
              <Key />
            </div>
            <input
              type="password"
              name=""
              id=""
              title="Mật khẩu"
              placeholder="Mật khẩu"
              required
              className="p-2 w-56 text-sm bg-zinc-50 outline-none"
            />
          </div>

          <button
            type="submit"
            title="Đăng nhập"
            className="w-60 p-2 bg-winmart rounded-lg shadow-md text-zinc-100"
          >
            Đăng nhập
          </button>
        </form>

        <a href="/" className="text-winmart text-sm mt-4">
          Quên mật khẩu?
        </a>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-8 bg-gray-200 border-0" />
          <span className="absolute px-3 text-sm font-light text-gray-400 -translate-x-1/2 bg-white left-1/2">
            hoặc
          </span>
        </div>

        <a href="/register/">
          <button
            title="Đăng ký"
            className="hover:bg-gray-200 w-60 border border-winmart p-2 rounded-lg shadow-md text-winmart bg-zinc-50"
          >
            Đăng ký
          </button>
        </a>
      </div>
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);
