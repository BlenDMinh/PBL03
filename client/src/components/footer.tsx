import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/logo.png";
import confirm from "public/confirm.png";

export default function Footer() {
  const router = useRouter();

  return (
    <div className="mt-6">
      <footer className="bg-[#2c2c2c] font-own">
        <div className="border-b border-[#8b8b8b]">
          <div className="mx-auto flex gap-x-10 max-w-6xl justify-between text-white text-xs py-4">
            <div className="w-1/4">
              <Image
                src={logo}
                alt="WinMart logo"
                width={125}
                className="ml-3"
                quality={100}
              />
              <p className="py-1 text-justify">
                Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce
              </p>
              <p className="py-1">Mã số doanh nghiệp: 0104918404</p>
              <p className="py-1 text-justify">
                Đăng ký lần đầu ngày 20 tháng 09 năm 2010, đăng ký thay đổi lần
                thứ 44, ngày 15 tháng 09 năm 2021
              </p>
              <Image
                src={confirm}
                alt="Xác nhận của Bộ Công thương"
                width={125}
                className="my-1"
                quality={100}
              />
            </div>

            <div className="w-1/4">
              <h4 className="text-[#8b8b8b] font-bold my-4 block text-sm">
                Về chúng tôi
              </h4>
              <a
                className="py-1 block cursor-pointer hover:text-[#ed1c24]"
                onClick={() => router.push("/info/about")}
              >
                Giới thiệu về WinMart
              </a>
              <a className="py-1 block cursor-pointer hover:text-[#ed1c24]">
                Danh sách cửa hàng
              </a>
              <a className="py-1 block cursor-pointer hover:text-[#ed1c24]">
                Quản lý chất lượng
              </a>
              <a
                className="py-1 block cursor-pointer hover:text-[#ed1c24]"
                onClick={() => router.push("/info/privacy")}
              >
                Chính sách bảo mật và chia sẻ thông tin
              </a>
              <a className="py-1 block cursor-pointer hover:text-[#ed1c24]">
                Điều khoản và điều kiện giao dịch
              </a>
            </div>

            <div className="w-1/4">
              <h4 className="text-[#8b8b8b] font-bold my-4 block text-sm">
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
              <h4 className="text-[#8b8b8b] font-bold my-4 block text-sm">
                Chăm sóc khách hàng
              </h4>
              <a className="py-1 block cursor-pointer hover:text-[#ed1c24]">
                Mua Online: 0247 1066866
              </a>
              <a className="py-1 block cursor-pointer hover:text-[#ed1c24]">
                Email: cskh@winmart.masangroup.com
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto gap-x-6 flex max-w-6xl justify-between text-white text-xs py-6">
          <div className="w-1/3 p-4 rounded-lg bg-[#464646]">
            <h3 className="text-[#FFB2B2] font-bold mb-3 block text-base">
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
            <h3 className="text-[#FFB2B2] font-bold mb-3 block text-base">
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
            <h3 className="text-[#FFB2B2] font-bold mb-3 block text-base">
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
    </div>
  );
}
