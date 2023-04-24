import Image from "next/image";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  return (
<<<<<<< Updated upstream
    <footer className="bg-[#2c2c2c]">
      <div className="border-b border-[#8b8b8b]">
        <div className="mx-auto flex gap-x-12 max-w-6xl justify-between text-white text-xs py-4">
          <div className="w-1/4">
            <Image
              src="/Logo.png"
              alt="WinMart Logo"
              height={125}
              width={125}
              className="ml-3"
            />
            <p className="py-1">
              Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce
            </p>
            <p className="py-1">Mã số doanh nghiệp: 0104918404</p>
            <p className="py-1 text-justify">
              Đăng ký lần đầu ngày 20 tháng 09 năm 2010, đăng ký thay đổi lần
              thứ 44, ngày 15 tháng 09 năm 2021
            </p>
            <Image
              src="/Confirm.png"
              alt="Xác nhận của Bộ Công thương"
              height={125}
              width={125}
              className="my-1"
            />
          </div>

          <div className="w-1/4">
            <h4 className="text-[#8b8b8b] font-bold my-4 block text-base">
              Về chúng tôi
            </h4>
            <a
              className="py-1 block cursor-pointer hover:text-[#ed1c24]"
              onClick={() => router.push("/about/about")}
            >
              Giới thiệu về WinMart
            </a>
            <a className="py-1 block cursor-pointer hover:text-[#ed1c24]">
              Danh sách cửa hàng
            </a>
            <a className="py-1 block cursor-pointer hover:text-[#ed1c24]">
              Quản lý chất lượng
            </a>
            <a className="py-1 block cursor-pointer hover:text-[#ed1c24]">
              Chính sách bảo mật và chia sẻ thông tin
            </a>
            <a className="py-1 block cursor-pointer hover:text-[#ed1c24]">
              Điều khoản và điều kiện giao dịch
            </a>
          </div>

          <div className="w-1/4">
            <h4 className="text-[#8b8b8b] font-bold my-4 block text-base">
              Hỗ trợ khách hàng
            </h4>
            <a className="py-1 block cursor-pointer hover:text-[#ed1c24]">
              Trung tâm hỗ trợ khách hàng
            </a>
            <a className="py-1 block cursor-pointer hover:text-[#ed1c24]">
              Chính sách giao hàng
            </a>
            <a className="py-1 block cursor-pointer hover:text-[#ed1c24]">
              Chính sách thanh toán
            </a>
            <a className="py-1 block cursor-pointer hover:text-[#ed1c24]">
              Chính sách đổi trả
            </a>
          </div>

          <div className="w-1/4">
            <h4 className="text-[#8b8b8b] font-bold my-4 block text-base">
              Chăm sóc khách hàng
            </h4>
            <a className="py-1 block cursor-pointer hover:text-[#ed1c24]">
              Mua Online: 0247 1066866
            </a>
            <a className="py-1 block cursor-pointer hover:text-[#ed1c24]">
              Email: cskh@winmart.masangroup.com
            </a>
          </div>
=======
    <footer className="mt-8 bg-[#2c2c2c] text-zinc-100 text-xs">
      <div className="border-b-2 border-gray-400">
        <div className="max-w-7xl mx-auto py-6 font-light">
          <div className="flex gap-x-8">
            <div className="flex flex-col gap-y-2 w-1/4">
              <Image
                src={WinmartLogo}
                alt={"Winmart Logo"}
                title="Winmart Logo"
                width={125}
                height={125}
                priority={true}
              />
              <span>
                Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce
              </span>
              <span>Mã số doanh nghiệp: 0104918404</span>
              <span>
                Đăng ký lần đầu ngày 20 tháng 09 năm 2010, đăng ký thay đổi lần
                thứ 44, ngày 15 tháng 09 năm 2021
              </span>
              <Image
                src={CountryConfirm}
                alt={"Xác nhận của Bộ Công Thương"}
                title="Xác nhận của Bộ Công Thương"
                width={125}
                height={125}
                priority={true}
              />
            </div>

            <div className="flex flex-col gap-y-2 w-1/4">
              <h5 className="my-4 text-sm text-[#8b8b8b]">Về chúng tôi</h5>
              <Link href="" className="hover:text-winmart">
                Giới thiệu về WinMart
              </Link>
              <Link href="" className="hover:text-winmart">
                Danh sách cửa hàng
              </Link>
              <Link href="" className="hover:text-winmart">
                Quản lý chất lượng
              </Link>
              <Link href="" className="hover:text-winmart">
                Chính xác bảo mật và chia sẻ thông tin
              </Link>
              <Link href="" className="hover:text-winmart">
                Điều khoản và điều kiện giao dịch
              </Link>
            </div>

            <div className="flex flex-col gap-y-2 w-1/4">
              <h5 className="my-4 text-sm text-[#8b8b8b]">Hỗ trợ khách hàng</h5>
              <Link href="" className="hover:text-winmart">
                Trung tâm hỗ trợ khách hàng
              </Link>
              <Link href="" className="hover:text-winmart">
                Chính sách giao hàng
              </Link>
              <Link href="" className="hover:text-winmart">
                Chính sách thanh toán
              </Link>
              <Link href="" className="hover:text-winmart">
                Chính sách đổi trả
              </Link>
            </div>

            <div className="flex flex-col gap-y-2 w-1/4">
              <h5 className="my-4 text-sm text-[#8b8b8b]">
                Chăm sóc khách hàng
              </h5>
              <span className="hover:text-winmart">
                Mua Online: 0247 1066866
              </span>
              <span className="hover:text-winmart">
                Email: cskh@winmart.masangroup.com
              </span>
            </div>
          </div>
>>>>>>> Stashed changes
        </div>
      </div>

      <div className="mx-auto gap-x-8 flex max-w-6xl justify-between text-white text-xs py-6">
        <div className="w-1/3 p-4 rounded-lg bg-[#464646]">
          <h3 className="text-[#FFB2B2] font-bold mb-3 block text-lg">
            Địa chỉ giao dịch Hà Nội:
          </h3>
          <p className="py-1">
            Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce
          </p>
          <p className="py-1 text-justify">
            Tầng 6, Toà nhà trung tâm Quốc tế, số 17 Ngô Quyền, Phường Tràng
            Tiền, Quận Hoàn Kiếm, Thành Phố Hà Nội
          </p>
        </div>

        <div className="w-1/3 p-4 rounded-lg bg-[#464646]">
          <h3 className="text-[#FFB2B2] font-bold mb-3 block text-lg">
            Trụ sở chính:
          </h3>
          <p className="py-1">
            Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce
          </p>
          <p className="py-1 text-justify">
            Tầng 5, Mplaza SaiGon, 39 Lê Duẩn, Phường Bến Nghé, Quận 1, Thành
            Phố Hồ Chí Minh, Việt Nam.
          </p>
        </div>

        <div className="w-1/3 p-4 rounded-lg bg-[#464646]">
          <h3 className="text-[#FFB2B2] font-bold mb-3 block text-lg">
            Địa chỉ giao dịch TP.HCM:
          </h3>
          <p className="py-1">
            Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce
          </p>
          <p className="py-1 text-justify">
            Tầng 5, Mplaza SaiGon, 39 Lê Duẩn, Phường Bến Nghé, Quận 1, Thành
            Phố Hồ Chí Minh
          </p>
        </div>
      </div>
    </footer>
  );
}
