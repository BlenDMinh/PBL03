import { Customer } from "../models/Customer";
import WinmartLogoWhite from "../assets/Company/WinmartLogoWhite.png";
import { ShoppingCart, User, ChevronDown, Search } from "lucide-react";

interface NavbarProps {
  user: Customer | null | undefined;
}

function Navbar(props: NavbarProps) {
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
    <header className="sticky top-0 w-screen bg-winmart mb-6 text-sm text-gray-900 z-50">
      <div className="max-w-6xl mx-auto py-2">
        <div className="flex items-center justify-between">
          <a href="/">
            <img
              src={WinmartLogoWhite}
              alt={"Winmart Logo"}
              title="Winmart Logo"
              className="w-36 h-auto"
            />
          </a>

          <div className="flex items-center bg-gray-50 rounded-md shadow-md overflow-hidden border border-gray-400">
            <div className="cursor-pointer group">
              <div className="relative flex items-center gap-x-1 px-3 py-2 h-full">
                <span>Danh mục</span>
                <span>
                  <ChevronDown size={15} />
                </span>
              </div>

              <div className="absolute">
                <div className="h-1"></div>
                <div className="p-1 bg-gray-50 border border-gray-400 rounded-md shadow-md z-50 hidden group-hover:flex flex-col">
                  {categories.map((val, id) => {
                    return (
                      <a
                        href="/"
                        key={id}
                        className="hover:bg-winmart hover:text-white rounded-md hover:shadow-md px-3 py-1 font-light"
                      >
                        <span>{val}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <form
              action=""
              method=""
              className="flex items-center border-l border-gray-400"
            >
              <input
                type="text"
                name="search"
                id="search"
                title="Tìm kiếm"
                placeholder="Tìm sản phẩm, thương hiệu, ..."
                className="bg-gray-50 outline-none px-3 py-2 w-72"
              />

              <button
                type="submit"
                title="Xác nhận tìm kiếm"
                className="p-2 bg-gray-100 hover:bg-gray-200"
              >
                <Search />
              </button>
            </form>
          </div>

          <div className="flex items-center gap-x-4">
            <button
              title="Giỏ hàng"
              className="text-white flex items-center gap-x-2 p-2"
            >
              <span>
                <ShoppingCart />
              </span>
              <span>Giỏ hàng</span>
            </button>

            {props.user ? (
              <button
                title="Hội viên"
                className="text-white flex items-center gap-x-2 p-2"
              >
                <span>
                  <User />
                </span>
                <span>{props.user.customerName}</span>
              </button>
            ) : (
              <a
                href="/login/"
                className="text-white flex items-center gap-x-2 p-2"
              >
                <span>
                  <User />
                </span>
                <span>Hội viên</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
