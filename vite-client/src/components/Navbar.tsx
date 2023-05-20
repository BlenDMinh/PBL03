import { ChevronDown, User } from "lucide-react";
import { lazy, useEffect, useState } from "react";
import WinmartLogoWhite from "../img/WinmartLogoWhite.png";
import { Category } from "../models/Category";
import { Customer } from "../models/Customer";
import { CategoryService } from "../services/CategoryService";
import { CustomerService } from "../services/CustomerService";

// Components
const Cartbar = lazy(() => import("./Cartbar"));
const Searchbar = lazy(() => import("./Searchbar"));

// Main function
function Navbar() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [customer, setCustomer] = useState<Customer | undefined>(undefined);

  useEffect(() => {
    const categoryService = CategoryService.getInstance();
    categoryService.getAll().then((data: Category[]) => {
      setCategories(data);
    });

    const customerService = CustomerService.getInstance();
    customerService.login().then(() => {
      setCustomer(customerService.loggedInCustomer);
    });
  }, []);

  const handleLogOut = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const customerService = CustomerService.getInstance();
    customerService.logout().then(() => {
      setCustomer(customerService.loggedInCustomer);
    });
  };

  return (
    <header className="sticky top-0 w-[calc(100vw - 12px)] bg-winmart mb-6 text-sm text-gray-900 z-10">
      <div className="w-[80vw] mx-auto py-2">
        <div className="flex items-center justify-between">
          <a href="/" title="Trang chủ">
            <img
              src={WinmartLogoWhite}
              alt={"Winmart Logo"}
              title="Winmart Logo"
              className="w-36 h-auto"
            />
          </a>

          <div className="flex items-center bg-gray-50 rounded-md shadow-md overflow-hidden">
            <div className="cursor-pointer group">
              <div className="relative flex items-center gap-x-1 px-3 py-2 h-full">
                <span>Danh mục</span>
                <span>
                  <ChevronDown size={15} />
                </span>
              </div>

              <div className="absolute">
                <div className="h-1"></div>
                <div className="p-1 bg-gray-50 rounded-md shadow-md z-50 hidden group-hover:flex flex-col">
                  {categories?.map((val, id) => {
                    return (
                      <a
                        href={"/category/" + val.categoryId}
                        key={id}
                        title={`Danh mục ${val.categoryName}`}
                        className="hover:bg-winmart hover:text-white rounded-md hover:shadow-md px-3 py-1"
                      >
                        <span>{val.categoryName}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <Searchbar />
          </div>

          <div className="flex items-center gap-x-4">
            <Cartbar />

            {customer ? (
              <button
                onClick={handleLogOut}
                title="Đăng xuất"
                className="text-white flex items-center gap-x-2 p-2"
              >
                <span>
                  <User />
                </span>
                <span>{customer.customerName}</span>
              </button>
            ) : (
              <a
                href="/login"
                title="Đăng nhập"
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
