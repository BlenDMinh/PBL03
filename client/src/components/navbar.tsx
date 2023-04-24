import Image from "next/image";
<<<<<<< Updated upstream
import { useRouter } from "next/router";
import { BsSearch, BsChevronDown, BsCart, BsPerson } from "react-icons/bs";

export default function Navbar() {
=======
import WinmartLogo from "/public/WinmartLogo.png";
import { ChevronDown, Search, ShoppingCart, User } from "lucide-react";
import { Customer } from "@/models/Customer";

interface NavbarProps {
  user: Customer | undefined;
}

const Navbar: FC<NavbarProps> = ({ user }) => {
>>>>>>> Stashed changes
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

  const router = useRouter();

  return (
    <header className="bg-[#ed1c24] sticky top-0 w-full">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-sm">
        <a className="cursor-pointer" onClick={() => router.push("/")}>
          <Image
            src="/Logo.png"
            alt={"Winmart Logo"}
            height={150}
            width={150}
          />
        </a>

<<<<<<< Updated upstream
        <div className="bg-white overflow-hidden rounded-lg flex items-center justify-center py-0.5">
          <div className="group">
            <h5 className="relative px-6 font-semibold flex items-center">
=======
        <div className="flex items-center justify-center bg-slate-100 border border-gray-400 rounded-full">
          <div className="group border-r border-gray-400 p-2 relative w-48">
            <h5 className="flex items-center justify-center font-light">
>>>>>>> Stashed changes
              Danh mục sản phẩm
              <BsChevronDown className="text-xs ml-1 mt-0.5" />
            </h5>
            <div className="invisible group-hover:visible absolute bg-white shadow-lg rounded-b-lg py-1">
              {categories.map((value, index): any => {
                return (
                  <a
                    href=""
                    key={index}
<<<<<<< Updated upstream
                    className="text-black block hover:bg-[#ed1c24] hover:text-white px-3.5 py-2"
=======
                    className="text-gray-900 hover:bg-winmart hover:text-zinc-100 px-3 py-1 font-light rounded-md"
>>>>>>> Stashed changes
                  >
                    {value}
                  </a>
                );
              })}
            </div>
          </div>

          <form action="" className="border-l-2 flex items-center">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm"
              className="border-none outline-none px-3 py-2 w-72"
            />
            <button type="submit" className="p-2">
              <BsSearch />
            </button>
          </form>
        </div>

<<<<<<< Updated upstream
        <div className="font-semibold text-white flex text-base">
          <button className="px-1 ml-2 flex items-center">
            <BsCart className="mr-1" />
            Giỏ hàng
          </button>
          <button className="px-1 ml-2 flex items-center">
            <BsPerson className="mr-1" />
            Hội viên
          </button>
=======
        <div className="text-zinc-100 flex gap-x-4">
          <button className="flex items-center justify-center">
            <ShoppingCart />
            <span className="mx-2 text-base">Giỏ hàng</span>
          </button>

          {user ? (
            <button className="flex items-center justify-center">
              <User />
              <span className="mx-2 text-base">{user.customerName}</span>
            </button>
          ) : (
            <Link href="/login" className="flex items-center justify-center">
              <User />
              <span className="mx-2 text-base">Hội viên</span>
            </Link>
          )}
>>>>>>> Stashed changes
        </div>
      </div>
    </header>
  );
}
