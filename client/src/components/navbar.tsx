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
    <>
      <main>
        <header className="bg-[#ed1c24] text-base font-semibold border-none outline-none">
          <nav
            className="mx-auto flex max-w-6xl items-center justify-between"
            aria-label="Global"
          >
            <a onClick={() => router.push("/")}>
              <Image src={logo} alt="WinMart logo" width={175} />
            </a>

            <div className="flex bg-white rounded-xl">
              <div className="relative border-r-2 group/item">
                <a
                  href="#"
                  className="text-sm flex items-center justify-center p-3 w-52"
                >
                  Danh mục sản phẩm
                  <AiOutlineDown className="ml-1 text-xs" />
                </a>
                <div className="invisible group-hover/item:visible -mt-3 pt-3 rounded-b-lg overflow-hidden absolute z-10 shadow-lg w-52 bg-white py-2">
                  {categories.map((value, index) => {
                    return (
                      <a
                        href="#"
                        key={index}
                        className="text-sm font-medium block px-3.5 py-1.5 hover:bg-[#ed1c24] hover:text-white"
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
                  className="text-xs font-normal outline-none w-80 placeholder:text-slate-400 pl-3 py-3"
                  type="search"
                  placeholder="Tìm kiếm sản phẩm"
                />
                <button className="p-4">
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
      </main>
    </>
  );
}
