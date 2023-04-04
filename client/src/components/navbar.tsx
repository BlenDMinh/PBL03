import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/logo.png";
import { BsCartPlus, BsFillPersonFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

export default function Navbar() {
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
    <div className="pb-24">
      <header className="bg-[#ed1c24] text-sm font-semibold border-none outline-none fixed w-full top-0 z-50">
        <nav
          className="mx-auto h-20 flex max-w-6xl items-center justify-between"
          aria-label="Global"
        >
          <a className="cursor-pointer" onClick={() => router.push("/")}>
            <Image src={logo} alt="WinMart logo" width={150} quality={100} />
          </a>
          <div className="flex bg-white rounded-xl">
            <div className="relative border-r-2 group/item h-full">
              <a
                href="#"
                className="text-sm flex items-center justify-center p-2 w-52"
              >
                Danh mục sản phẩm
                <AiOutlineDown className="ml-1 text-xs mt-1" />
              </a>
              <div className="invisible group-hover/item:visible -mt-2 pt-3 rounded-b-xl overflow-hidden absolute shadow-lg w-52 bg-white py-2">
                {categories.map((value, index) => {
                  return (
                    <a
                      href="#"
                      key={index}
                      className="text-xs font-normal block px-3 py-2 hover:bg-[#ed1c24] hover:text-white"
                    >
                      {value}
                    </a>
                  );
                })}
              </div>
            </div>
            <form
              action=""
              className="flex items-center justify-center overflow-hidden"
            >
              <input
                className="font-normal text-xs outline-none w-60 placeholder:text-slate-400 pl-3 py-2 z-30"
                type="search"
                placeholder="Tìm kiếm sản phẩm"
              />
              <button className="p-3">
                <BsSearch />
              </button>
            </form>
          </div>
          <div className="grid gap-1 grid-cols-2 text-white">
            <a href="#" className="flex justify-center leading-5 p-2">
              <BsCartPlus className="text-xl mr-1" />
              Giỏ hàng
            </a>
            <a href="#" className="flex justify-center leading-5 p-2">
              <BsFillPersonFill className="text-xl mr-1" />
              Hội viên
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
