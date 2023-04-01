import Head from "next/head";
import Image from "next/image";
import logo from "public/logo.png";
import { BsCartPlus, BsFillPersonFill } from "react-icons/bs";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
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
            className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <Image src={logo} alt="WinMart logo" height={175} width={175} />
            </div>

            <div className="grid gap-4 grid-cols-2 text-white font-bold">
              <a href="#" className="flex justify-center leading-7">
                <BsCartPlus className="text-3xl mr-2" />
                Giỏ hàng (0)
              </a>
              <a href="#" className="flex justify-center leading-7">
                <BsFillPersonFill className="text-3xl mr-2" />
                Hội viên
              </a>
            </div>
          </nav>
        </header>
      </main>
    </>
  );
}
