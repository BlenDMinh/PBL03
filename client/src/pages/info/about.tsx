import Head from "next/head";
import Image from "next/image";
import pic1 from "public/company_info/1.png";
import pic2 from "public/company_info/2.png";
import pic3 from "public/company_info/3.png";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Siêu thị Winmart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png"></link>
      </Head>
      <Navbar />
      <div className="mx-auto max-w-6xl text-sm">
        <h3 className="text-center font-bold text-xl py-3 uppercase">
          GIỚI THIỆU VỀ WINMART & WINMART+
        </h3>
        <h4 className="font-bold my-3 text-base">
          Hệ thống WinMart & WinMart+
        </h4>
        <p className="text-justify my-3">
          Hệ thống siêu thị và chuỗi cửa hàng WinMart & WinMart+ là hai thương
          hiệu bán lẻ thuộc Tập Đoàn Masan Group. Ra đời từ năm 2014 cho đến
          nay, hệ thống WinMart & WinMart+ không ngừng phát triển vươn lên, ra
          mắt với hơn 132 siêu thị WinMart và gần 3000 cửa hàng WinMart+ phủ
          rộng khắp Việt Nam, mang đến cho người tiêu dùng sự lựa chọn đa dạng
          về chất lượng hàng hóa và dịch vụ, đáp ứng đầy đủ nhu cầu trải nghiệm
          mua sắm từ bình dân đến cao cấp của mọi khách hàng.
        </p>
        <Image
          src={pic1}
          alt="Picture 1"
          sizes="width: 100%"
          quality={100}
          className="mx-auto"
        />
        <p className="text-justify my-3">
          Mua sắm tại WinMart &WinMart+, khách hàng không chỉ trải nghiệm thoải
          mái không gian dịch vụ tiện ích mà còn nhận được nhiều giá trị vượt
          trội với các hình thức khuyến mãi, ưu đãi hấp dẫn.
        </p>
        <h4 className="font-bold my-3 text-base">Sứ mệnh</h4>
        <p className="text-justify my-3">
          Với sứ mệnh phát triển bền vững và tạo được cho khách hàng tâm lý “AN
          TÂM MUA SẮM MỖI NGÀY”, WinMart & WinMart+ luôn nỗ lực đáp ứng đầy đủ
          yêu cầu mua sắm của khách hàng, cam kết chất lượng khi sử dụng sản
          phẩm, giao hàng nhanh chóng, nâng cao giá trị cuộc sống của người tiêu
          dùng trong xã hội hiện đại.
        </p>
        <Image
          src={pic2}
          alt="Picture 2"
          sizes="width: 100%"
          quality={100}
          className="mx-auto"
        />
        <h4 className="font-bold my-3 text-base">Tầm nhìn</h4>
        <p className="text-justify my-3">
          Mang lại sự lựa chọn hoàn hảo về mua sắm tiện ích,WinMart &WinMart+
          hướng tới mục tiêu trở thành hệ thống bán lẻ hàng đầu tại Việt Nam,
          dẫn đầu về cung cấp sản phẩm tiêu dùng và chất lượng dịch vụ trong đời
          sống người Việt.
        </p>
        <p className="text-justify my-3">
          WinMart còn chú trọng xây dựng môi trường làm việc chuyên nghiệp, năng
          động, sáng tạo và nhân văn; tạo điều kiện và cơ hội phát triển cho tất
          cả nhân viên; tích cực đóng góp vào các hoạt động xã hội, hướng về
          cộng đồng với những thông điệp mang tính nhân văn.
        </p>
        <Image
          src={pic3}
          alt="Picture 3"
          sizes="width: 100%"
          quality={100}
          className="mx-auto"
        />
        <h4 className="font-bold my-3 text-base">Cam kết với khách hàng</h4>
        <ul className="list-decimal ml-10">
          <li className="text-justify my-3">
            Cung cấp cho khách hàng những sản phẩm đảm bảo an toàn chất lượng,
            đa dạng từ thực phẩm, hóa mỹ phẩm, điện máy gia dụng cho tới thời
            trang, đồ chơi…
          </li>
          <li className="text-justify my-3">
            Dịch vụ vượt trội: Mua sắm trực tuyến dễ dàng hoặc tại cửa hàng,
            thanh toán thông minh nhanh chóng, an toàn bảo mật thông tin…
          </li>
          <li className="text-justify my-3">
            Vận chuyển siêu tốc: Giao hàng trong ngày với hầu hết các mặt hàng.
          </li>
        </ul>
        <p className="text-justify my-3">
          Khu vực đông dân cư, giao thông thuận lợi; có diện tích lớn, cung cấp
          nhiều ngành hàng đa dạng. Với hàng chục ngàn mặt hàng từ thực phẩm,
          hóa mỹ phẩm, đồ dùng gia đình, điện máy gia dụng cho tới thời trang,
          đồ chơi… WinMart & WinMart+ đáp ứng trọn vẹn nhu cầu của khách hàng
          địa phương và du khách.
        </p>
        <p className="text-justify my-3">
          Với tầm nhìn dài hạn và mong muốn phát triển bền vững, mang đến cho
          người tiêu dùng Việt những trải nghiệm mua sắm tiện lợi với nhiều sự
          lựa chọn về sản phẩm, an tâm về chất lượng, hệ thống WinMart &
          WinMart+ đã phủ rộng khắp Việt Nam với hơn 132 siêu thị WinMart và gần
          3000 cửa hàng WinMart+.
        </p>
        <p className="text-justify my-3">
          WinMart đã và đang nỗ lực không ngừng để hoàn thành sứ mệnh của mình:
          <span className="font-bold"> “NƠI AN TÂM MUA SẮM”</span> cho mọi nhà,
          đáp ứng đầy đủ yêu cầu của khách hàng, mang đến sự thuận tiện, chất
          lượng đảm bảo khi sử dụng sản phẩm; gia tăng các giá trị, nâng cao
          chất lượng cuộc sống của người tiêu dùng trong bối cảnh thị trường
          hiện đại, phát triển và nâng tầm ngành bán lẻ rộng khắp tại Việt Nam.
        </p>
        <p className="text-justify my-3">
          Ngoài ra, WinMart còn chú trọng xây dựng môi trường làm việc chuyên
          nghiệp, năng động, sáng tạo và nhân văn; tạo điều kiện và cơ hội phát
          triển công bằng cho tất cả nhân viên; coi trọng người lao động như là
          tài sản quý giá nhất, đồng thời tích cực đóng góp vào các hoạt động xã
          hội, hướng về cộng đồng với những thông điệp mang tính nhân văn.
        </p>

        <h3 className="text-center font-bold text-xl my-6 uppercase">
          XIN CHÂN THÀNH CẢM ƠN
        </h3>
      </div>
      <Footer />
    </>
  );
}
