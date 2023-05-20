import { Facebook, Instagram, Youtube } from "lucide-react";
import GovConfirm from "../img/GovConfirm.png";
import WinmartLogoWhite from "../img/WinmartLogoWhite.png";

interface LinkTitle {
  title: string;
  href: string;
}

function Footer() {
  const aboutTags: LinkTitle[] = [
    {
      title: "Giới thiệu về Winmart",
      href: "/",
    },
    {
      title: "Danh sách cửa hàng",
      href: "/",
    },
    {
      title: "Quản lý chất lượng",
      href: "/",
    },
    {
      title: "Chính sách bảo mật và chia sẻ thông tin",
      href: "/",
    },
    {
      title: "Điều khoản và điều kiện giao dịch",
      href: "/",
    },
  ];

  const customerSupport: LinkTitle[] = [
    {
      title: "Trung tâm hỗ trợ khách hàng",
      href: "/",
    },
    {
      title: "Chính sách giao hàng",
      href: "/",
    },
    {
      title: "Chính sách thanh toán",
      href: "/",
    },
    {
      title: "Chính sách đổi trả",
      href: "/",
    },
  ];

  const contact: LinkTitle[] = [
    {
      title: "Mua Online: 0247 1066866",
      href: "/",
    },
    {
      title: "Email: cskh@winmart.masangroup.com",
      href: "/",
    },
  ];

  return (
    <footer className="bg-[#2c2c2c] text-xs text-white mt-6 bottom-0">
      <div className="flex gap-x-8 w-[80vw] mx-auto py-4">
        <div className="flex flex-col gap-y-2 w-1/4">
          <img
            src={WinmartLogoWhite}
            alt="Winmart Logo"
            title="Winmart Logo"
            className="w-36 h-auto"
          />
          <span>Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce</span>
          <span>Mã số doanh nghiệp: 0104918404</span>
          <span>
            Đăng ký lần đầu ngày 20 tháng 09 năm 2010, đăng ký thay đổi lần thứ
            44, ngày 15 tháng 09 năm 2021
          </span>
          <img
            src={GovConfirm}
            alt="Bộ Công Thương xác nhận"
            title="Bộ Công Thương xác nhận"
            className="w-36 h-auto"
          />
        </div>

        <div className="flex flex-col gap-y-2 w-1/4">
          <h5 className="my-4 text-sm text-gray-300">Về chúng tôi</h5>
          {aboutTags.map((val, id) => {
            return (
              <a key={id} href={val.href} className="hover:text-winmart pb-1">
                <span>{val.title}</span>
              </a>
            );
          })}
        </div>

        <div className="flex flex-col gap-y-2 w-1/4">
          <h5 className="my-4 text-sm text-gray-300">Hỗ trợ khách hàng</h5>
          {customerSupport.map((val, id) => {
            return (
              <a key={id} href={val.href} className="hover:text-winmart pb-1">
                <span>{val.title}</span>
              </a>
            );
          })}
        </div>

        <div className="flex flex-col gap-y-2 w-1/4">
          <h5 className="my-4 text-sm text-gray-300">Chăm sóc khách hàng</h5>
          {contact.map((val, id) => {
            return (
              <a key={id} href={val.href} className="hover:text-winmart pb-1">
                <span>{val.title}</span>
              </a>
            );
          })}

          <h5 className="my-4 text-sm text-gray-300">Kết nối với chúng tôi</h5>
          <div className="flex gap-x-4">
            <a
              href="/"
              className="h-8 w-8 cursor-pointer rounded-full bg-[#3b5998] flex items-center justify-center"
            >
              <span>
                <Facebook size={15} />
              </span>
            </a>

            <a
              href="/"
              className="h-8 w-8 cursor-pointer rounded-full bg-[#fa7e1e] flex items-center justify-center"
            >
              <span>
                <Instagram size={15} />
              </span>
            </a>

            <a
              href="/"
              className="h-8 w-8 cursor-pointer rounded-full bg-[#FF0000] flex items-center justify-center"
            >
              <span>
                <Youtube size={15} />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gray-400"></div>

      <div className="bg-[#2c2c2c] text-xs text-white flex items-center gap-x-10 w-[80vw] mx-auto py-4">
        <div className="p-4 flex flex-col w-1/3 bg-[#8c8c8c1a] rounded-md ">
          <h5 className="text-gray-400 text-base font-semibold mb-4">
            Địa chỉ giao dịch Hà Nội:
          </h5>
          <span className="mb-2">
            Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce
          </span>
          <span className="mb-2">
            Tầng 6, Toà nhà trung tâm Quốc tế, số 17 Ngô Quyền, Phường Tràng
            Tiền, Quận Hoàn Kiếm, Thành Phố Hà Nội.
          </span>
        </div>

        <div className="p-4 flex flex-col w-1/3 bg-[#8c8c8c1a] rounded-md ">
          <h5 className="text-gray-400 text-base font-semibold mb-4">
            Trụ sở chính:
          </h5>
          <span className="mb-2">
            Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce
          </span>
          <span className="mb-2">
            Tầng 5, Mplaza SaiGon, 39 Lê Duẩn, Phường Bến Nghé, Quận 1, Thành
            Phố Hồ Chí Minh, Việt Nam.
          </span>
        </div>

        <div className="p-4 flex flex-col w-1/3 bg-[#8c8c8c1a] rounded-md ">
          <h5 className="text-gray-400 text-base font-semibold mb-4">
            Địa chỉ giao dịch TP.HCM:
          </h5>
          <span className="mb-2">
            Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce
          </span>
          <span className="mb-2">
            Tầng 5, Mplaza SaiGon, 39 Lê Duẩn, Phường Bến Nghé, Quận 1, Thành
            Phố Hồ Chí Minh.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
