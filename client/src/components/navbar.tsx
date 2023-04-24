import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import WinmartLogo from "/public/WinmartLogo.png";
import { ChevronDown, Search, ShoppingCart, User } from "lucide-react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const categories = [
    "Bánh kẹo",
    "Chăm sóc bé",
    "Chăm sóc cá nhân",
    "Điện gia dụng",
    "Đồ gia dụng",
    "Đồ uống giải khát",
    "Gia vị",
    "Hoá phẩm tẩy rửa",
    "Mì - Thực phẩm ăn liền",
    "Nước uống có cồn",
    "Rau củ",
    "Sữa - sản phẩm từ sữa",
    "Thịt - hải sản tươi",
    "Thực phẩm chế biến",
    "Thực phẩm đông lạnh",
    "Thực phẩm khô",
    "Trái cây tươi",
    "Trứng - đậu hũ",
    "Văn phòng phẩm - đồ chơi",
  ];

  return (
    <header className="bg-winmart sticky top-0 w-full text-sm font-normal">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2">
        <Link href="/">
          <Image
            src={WinmartLogo}
            alt={"Winmart Logo"}
            width={150}
            height={150}
            priority={true}
            title="Logo"
          />
        </Link>

        <div className="flex items-center justify-center bg-slate-100 border-2 border-gray-400 rounded-full">
          <div className="group border-r-2 border-gray-400 p-2 relative w-48">
            <h5 className="flex items-center justify-center">
              Danh mục sản phẩm
              <span>
                <ChevronDown />
              </span>
            </h5>

            <div className="invisible group-hover:visible absolute flex flex-col z-50 bg-slate-100 w-48 -ml-2 rounded-lg shadow-md py-1 mt-1 border-gray-100 border-2">
              {categories.map((value: any, index: any) => {
                return (
                  <Link
                    href="/"
                    key={index}
                    className="text-gray-900 hover:bg-winmart hover:text-zinc-100 px-3 py-1"
                  >
                    {value}
                  </Link>
                );
              })}
            </div>
          </div>

          <form action="" className="flex items-center justify-center">
            <input
              type="text"
              name="search"
              id="search"
              title="search"
              placeholder="Tìm sản phẩm"
              className="outline-none bg-slate-100 p-2 w-56"
            />

            <button type="submit" title="Tìm kiếm" className="p-2 mx-1">
              <Search />
            </button>
          </form>
        </div>

        <div className="text-zinc-100 flex gap-x-4">
          <button className="flex items-center justify-center">
            <ShoppingCart />
            <span className="mx-2">Giỏ hàng</span>
          </button>

          <button className="flex items-center justify-center">
            <User />
            <span className="mx-2">Hội viên</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
