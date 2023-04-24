import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Key, User } from "lucide-react";
import WinmartLogoRed from "/public/WinmartLogoRed.png";

const Login: FC = ({}) => {
  return (
    <main className="w-screen h-screen bg-[#f0f8ff]">
      <div className="max-w-2xl mx-auto h-full flex flex-col justify-center items-center -mt-8 bg-white">
        <Image
          src={WinmartLogoRed}
          alt={"Winmart Logo"}
          width={225}
          height={225}
          priority={true}
          title="Logo"
          className="mb-12"
        />

        <form
          action=""
          method="POST"
          className=" flex flex-col items-center justify-center gap-y-6 text-gray-900"
        >
          <div className="flex border-2 border-gray-400 rounded-lg shadow-sm overflow-hidden">
            <div className="p-2 border-r-2 border-gray-400 bg-zinc-50">
              <User />
            </div>
            <input
              type="text"
              name=""
              id=""
              title="Tên đăng nhập"
              placeholder="Tên đăng nhập"
              required
              className="p-2 w-56 text-sm bg-zinc-50"
            />
          </div>

          <div className="flex border-2 border-gray-400 rounded-lg shadow-sm overflow-hidden">
            <div className="p-2 border-r-2 border-gray-400 bg-zinc-50">
              <Key />
            </div>
            <input
              type="password"
              name=""
              id=""
              title="Mật khẩu"
              placeholder="Mật khẩu"
              required
              className="p-2 w-56 text-sm bg-zinc-50"
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

        <Link href="/" className="text-winmart text-sm mt-4">
          Quên mật khẩu?
        </Link>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-8 bg-gray-200 border-0" />
          <span className="absolute px-3 text-sm font-light text-gray-900 -translate-x-1/2 bg-white left-1/2">
            hoặc
          </span>
        </div>

        <Link href="/login">
          <button
            title="Đăng ký"
            className="hover:bg-gray-200 w-60 border-2 border-winmart p-2 rounded-lg shadow-md text-winmart bg-zinc-50"
          >
            Đăng ký
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Login;
