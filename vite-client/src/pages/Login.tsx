import { Key, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WinmartLogoRed from "../assets/Company/WinmartLogoRed.png";
import { LoginRequest } from "../models/LoginRequest";
import { CustomerService } from "../services/implement/CustomerService";

function Login() {
  const navigate = useNavigate();
  const service = CustomerService.getInstance();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const request: LoginRequest = {
      email: e.currentTarget.elements[0].value,
      password: e.currentTarget.elements[1].value,
    };
    service.login(request);
    if (service.loggedInCustomer !== undefined) navigate("/");
  };

  return (
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
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-y-6 text-gray-900"
        >
          <div className="flex border border-gray-300 rounded-lg shadow-sm overflow-hidden">
            <div className="p-2 border-r border-gray-300 bg-white">
              <User />
            </div>
            <input
              type="text"
              name="email"
              id="email"
              title="Tên đăng nhập"
              placeholder="Tên đăng nhập"
              required
              value={email}
              className="p-2 w-56 text-sm bg-white outline-none"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="flex border border-gray-300 rounded-lg shadow-sm overflow-hidden">
            <div className="p-2 border-r border-gray-300 bg-white">
              <Key />
            </div>
            <input
              type="password"
              name="password"
              id="password"
              title="Mật khẩu"
              placeholder="Mật khẩu"
              required
              value={password}
              className="p-2 w-56 text-sm bg-white outline-none"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button
            type="submit"
            title="Đăng nhập"
            className="w-60 p-2 bg-winmart border border-winmart rounded-lg shadow-md text-white hover:text-winmart hover:bg-white"
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

        <a href="/register">
          <button
            title="Đăng ký"
            className="hover:bg-winmart hover:text-white w-60 border border-winmart p-2 rounded-lg shadow-md text-winmart bg-white"
          >
            Đăng ký
          </button>
        </a>
      </div>
    </main>
  );
}

export default Login;
