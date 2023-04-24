import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import WinmartLogo from "/public/WinmartLogo.png";
import CountryConfirm from "/public/CountryConfirm.png";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="mt-2 bg-[#2c2c2c] text-zinc-100 text-xs">
      <div className="border-b-2 border-gray-400">
        <div className="max-w-7xl mx-auto py-6">
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

          <div></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 flex gap-x-8">
        <div className="flex flex-col w-1/3 p-4 bg-[#8c8c8c1a] rounded-xl gap-y-2">
          <h5 className="mb-2 text-base text-[#8b8b8b]">
            Địa chỉ giao dịch Hà Nội:
          </h5>
          <span>Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce</span>
          <span>
            Tầng 6, Toà nhà trung tâm Quốc tế, số 17 Ngô Quyền, Phường Tràng
            Tiền, Quận Hoàn Kiếm, Thành Phố Hà Nội.
          </span>
        </div>

        <div className="flex flex-col w-1/3 p-4 bg-[#8c8c8c1a] rounded-xl gap-y-2">
          <h5 className="mb-2 text-base text-[#8b8b8b]">Trụ sở chính:</h5>
          <span>Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce</span>
          <span>
            Tầng 5, Mplaza SaiGon, 39 Lê Duẩn, Phường Bến Nghé, Quận 1, Thành
            Phố Hồ Chí Minh, Việt Nam.
          </span>
        </div>

        <div className="flex flex-col w-1/3 p-4 bg-[#8c8c8c1a] rounded-xl gap-y-2">
          <h5 className="mb-2 text-base text-[#8b8b8b]">
            Địa chỉ giao dịch TP.HCM:
          </h5>
          <span>Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce</span>
          <span>
            Tầng 5, Mplaza SaiGon, 39 Lê Duẩn, Phường Bến Nghé, Quận 1, Thành
            Phố Hồ Chí Minh.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
