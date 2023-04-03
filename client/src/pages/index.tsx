import Head from "next/head";
import Image from "next/image";
import logo from "public/logo.png";
import { BsCartPlus, BsFillPersonFill } from "react-icons/bs";
<<<<<<< Updated upstream
import { useState } from "react";
=======
import { IoSearchCircle } from "react-icons/io5";
>>>>>>> Stashed changes

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Siêu thị Winmart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className="bg-[#ed1c24]">
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between"
            aria-label="Global"
          >
            <div className="flex">
              <Image src={logo} alt="WinMart logo" height={150} width={150} />
            </div>

            <div>
              <form action="">
                <input
                  className="bg-white border-none outline-none rounded-xl py-2 px-4 text-sm"
                  type="search"
                  placeholder="Tìm kiếm sản phẩm"
                />
                <IoSearchCircle />
              </form>
            </div>

            <div className="grid gap-4 grid-cols-2 text-white">
              <a href="#" className="flex justify-center leading-6 p-2">
                <BsCartPlus className="text-2xl mr-2" />
                Giỏ hàng
              </a>
              <a href="#" className="flex justify-center leading-6 p-2">
                <BsFillPersonFill className="text-2xl mr-2" />
                Hội viên
              </a>
            </div>
          </nav>
        </header>
      </main>
    </>
  );
}
