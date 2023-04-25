"use client";

import Link from "next/link";
import Image from "next/image";
import { FC, useState } from "react";
import WinmartLogoRed from "/public/WinmartLogoRed.png";

const Page: FC = ({}) => {
  const [birthday, setBirthday] = useState(new Date());

  return (
    <main className="w-screen h-screen bg-[#f0f8ff] text-gray-900 text-sm">
      <div className="max-w-xl mx-auto h-full flex flex-col justify-center items-center bg-white gap-y-6">
        <Image
          src={WinmartLogoRed}
          alt={"Winmart Logo"}
          title="Winmart Logo"
          priority={true}
          width={225}
          height={225}
        />

        <div className="flex flex-col text-sm gap-y-6">
          <h5 className="text-base">Đăng ký hội viên</h5>
          <form action="" method="POST" className="flex flex-col gap-y-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md"
            />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mật khẩu"
              required
              className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md"
            />

            <input
              type="text"
              name="customerName"
              id="customerName"
              placeholder="Họ và tên"
              required
              className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md"
            />

            <div className="flex gap-x-8 items-center">
              <label htmlFor="gender">Giới tính: </label>
              <div className="flex items-center">
                <input
                  id="MALE"
                  type="radio"
                  value="1"
                  name="gender"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  required
                />
                <label htmlFor="MALE" className="ml-2 text-gray-900">
                  Nam
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="FEMALE"
                  type="radio"
                  value="2"
                  name="gender"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="FEMALE" className="ml-2 text-gray-900">
                  Nữ
                </label>
              </div>
            </div>

            <button
              type="submit"
              title="Đăng nhập"
              className="w-60 mx-auto p-2 bg-winmart rounded-lg shadow-md text-zinc-100"
            >
              Đăng ký
            </button>
          </form>
        </div>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-4 bg-gray-200 border-0" />
          <span className="absolute px-3 text-sm font-light text-gray-400 -translate-x-1/2 bg-white left-1/2">
            hoặc
          </span>
        </div>

        <Link href="/login">
          <button
            title="Đăng nhập"
            className="hover:bg-gray-200 w-60 border border-winmart p-2 rounded-lg shadow-md text-winmart bg-zinc-50 mx-auto"
          >
            Đăng nhập
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Page;
