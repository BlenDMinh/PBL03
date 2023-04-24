import Image from "next/image";
import { useRouter } from "next/router";
import { BsSearch, BsChevronDown, BsCart, BsPerson } from "react-icons/bs";

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

        <div className="bg-white overflow-hidden rounded-lg flex items-center justify-center py-0.5">
          <div className="group">
            <h5 className="relative px-6 font-semibold flex items-center">
              Danh mục sản phẩm
              <BsChevronDown className="text-xs ml-1 mt-0.5" />
            </h5>
            <div className="invisible group-hover:visible absolute bg-white shadow-lg rounded-b-lg py-1">
              {categories.map((value, index): any => {
                return (
                  <a
                    href=""
                    key={index}
                    className="text-black block hover:bg-[#ed1c24] hover:text-white px-3.5 py-2"
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

        <div className="font-semibold text-white flex text-base">
          <button className="px-1 ml-2 flex items-center">
            <BsCart className="mr-1" />
            Giỏ hàng
          </button>
          <button className="px-1 ml-2 flex items-center">
            <BsPerson className="mr-1" />
            Hội viên
          </button>
        </div>
      </div>
    </header>
  );
}
