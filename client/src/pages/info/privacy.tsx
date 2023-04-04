import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Siêu thị Winmart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png"></link>
      </Head>
      <Navbar />
      <main className="mx-auto max-w-6xl my-4 font-serif">
        <h3 className="text-center font-bold text-xl uppercase">
          CHÍNH SÁCH BẢO MẬT VÀ CHIA SẺ THÔNG TIN
        </h3>
        <ul className="list-inside list-decimal">
          <li className="font-bold my-3 text-base">
            Mục đích áp dụng
            <p className="font-normal text-sm text-justify my-3">
              Chính sách bảo mật và chia sẻ thông tin này (“Chính Sách”) nhằm
              đảm bảo an toàn thông tin liên quan đến các tổ chức, cá nhân tham
              gia truy cập và/ hoặc giao dịch trên website https://winmart.vn
              thuộc quyền sở hữu của Công ty Cổ phần Dịch vụ Thương Mại Tổng hợp
              WinCommerce (sau đây gọi chung là “Winmart”).
            </p>
            <p className="font-normal text-sm text-justify my-3">
              Chính Sách này mô tả cách Winmart tiếp nhận, tổng hợp, lưu giữ, sử
              dụng và bảo vệ thông tin của các tổ chức, cá nhân tham gia truy
              cập, giao dịch trên Winmart (“Khách Hàng”). Việc Khách Hàng truy
              cập hoặc thực hiện giao dịch trên Winmart được hiểu là Khách Hàng
              đã đọc, hiểu và đồng ý tuân thủ Chính Sách này, kể cả các phiên
              bản sửa đổi, bổ sung của Chính Sách. Phiên bản sửa đổi, bổ sung
              Chính Sách này (nếu có) sẽ có hiệu lực sau 5 ngày kể từ ngày việc
              sửa đổi, bổ sung Chính Sách được thông báo trên Winmart.
            </p>
          </li>
          <li className="font-bold my-3 text-base">
            Quy định cụ thể
            <ul>
              <li>
                <h4 className="font-bold my-3 text-sm">
                  2.1. Về việc thu thập thông tin
                </h4>
                <div className="font-normal text-sm text-justify my-3 ml-6 space-y-2">
                  <p>
                    - Khi Khách Hàng thực hiện giao dịch và/hoặc đăng ký mở tài
                    khoản tại Winmart, tùy từng thời điểm, Khách Hàng phải cung
                    cấp một số thông tin cần thiết cho việc thực hiện giao dịch
                    và/hoặc đăng ký tài khoản (“Thông Tin Khách Hàng”).
                  </p>
                  <p>
                    - Khách Hàng có trách nhiệm đảm bảo những thông tin Khách
                    Hàng cung cấp là đầy đủ và chính xác và luôn cập nhật thông
                    tin để đảm bảo tính đầy đủ và chính xác. Winmart không chịu
                    trách nhiệm giải quyết bất kỳ tranh chấp nào nếu thông tin
                    Khách Hàng cung cấp không chính xác hoặc không được cập nhật
                    hoặc giả mạo.
                  </p>
                </div>
              </li>
              <li>
                <h4 className="font-bold my-3 text-sm">
                  2.2. Về việc lưu giữ và bảo mật thông tin riêng
                </h4>
                <div className="font-normal text-sm text-justify my-3 ml-6 space-y-2">
                  <p>
                    - Thông Tin Khách Hàng, cũng như các thông tin trao đổi giữa
                    Khách Hàng và Winmart, đều được lưu giữ và bảo mật bởi hệ
                    thống của Winmart, riêng thông tin thẻ thanh toán của Khách
                    Hàng sẽ do các đối tác Cổng thanh toán của Winmart bảo mật
                    theo tiêu chuẩn quốc tế PCI DSS.
                  </p>
                  <p>
                    - Winmart có các biện pháp thích hợp về kỹ thuật và an ninh
                    để ngăn chặn việc truy cập, sử dụng trái phép Thông Tin
                    Khách Hàng. Winmart cũng thường xuyên phối hợp với các
                    chuyên gia bảo mật nhằm cập nhật những thông tin mới nhất về
                    an ninh mạng để đảm bảo sự an toàn cho Thông Tin Khách Hàng
                    khi Khách Hàng truy cập, đăng ký mở tài khoản và/hoặc sử
                    dụng các tính năng của Winmart. Khi thu thập dữ liệu,
                    Winmart thực hiện lưu giữ và bảo mật Thông Tin Khách Hàng
                    tại hệ thống máy chủ và các Thông Tin Khách Hàng này được
                    bảo đảm an toàn bằng các hệ thống tường lửa (firewall), các
                    biện pháp kiểm soát truy cập, mã hóa dữ liệu.
                  </p>
                  <p>
                    - Các thông tin thẻ thanh toán của Khách Hàng được các đối
                    tác cổng thanh toán của Winmart bảo vệ theo tiêu chuẩn quốc
                    tế. Winmart không cho phép các bên thứ ba theo dõi hoặc thu
                    thập thông tin của Khách Hàng trên các website thành phần
                    của Winmart.
                  </p>
                  <p>
                    - Đối với các tài khoản đã đóng chúng tôi vẫn lưu trữ Thông
                    Tin Cá Nhân và truy cập của Khách Hàng để phục vụ cho các
                    mục đích phòng chống gian lận, điều tra, giải đáp thắc mắc…
                    Các Thông Tin Cá Nhân này sẽ được Winmart lưu giữ trên hệ
                    thống máy chủ tối đa trong vòng 12 (mười hai) tháng kể từ
                    ngày Khách Hàng đóng tài khoản trên Winmart. Sau khi thời
                    hạn này kết thúc, Winmart sẽ tiến hành xóa vĩnh viễn Thông
                    Tin Cá Nhân của Bạn.
                  </p>
                  <p>
                    - Khách Hàng tuyệt đối không được có bất kỳ hành vi sử dụng
                    công cụ, chương trình để can thiệp trái phép vào hệ thống
                    hay làm thay đổi cấu trúc dữ liệu của Winmart, cũng như bất
                    kỳ hành vi nào khác nhằm phát tán, cổ vũ cho các hoạt động
                    với mục đích can thiệp, phá hoại hay xâm nhập vào dữ liệu
                    của hệ thống Winmart, cũng như các các hành vi mà pháp luật
                    Việt Nam nghiêm cấm. Trong trường hợp Winmart phát hiện
                    Khách Hàng có hành vi cố tình giả mạo, gian lận, phát tán
                    các thông tin trái phép,… Winmart có quyền chuyển Thông Tin
                    Cá Nhân của Khách Hàng cho các cơ quan có thẩm quyền để xử
                    lý theo quy định pháp luật.
                  </p>
                </div>
              </li>
              <li>
                <h4 className="font-bold my-3 text-sm">
                  2.3. Về việc sử dụng Thông Tin Khách Hàng
                </h4>
                <p className="font-normal text-sm text-justify my-3">
                  Winmart có quyền sử dụng các thông tin Khách Hàng cung cấp,
                  bao gồm nhưng không giới hạn ở Thông Tin Khách Hàng để:
                </p>
                <div className="font-normal text-sm text-justify my-3 ml-6 space-y-2">
                  <p>
                    - Cung cấp các dịch vụ/tiện ích cho Khách Hàng dựa trên nhu
                    cầu và các thói quen của Khách Hàng khi truy cập vào
                    Winmart.
                  </p>
                  <p>
                    - Gửi các thông báo, trao đổi thông tin giữa Khách Hàng với
                    Winmart hoặc ngược lại.
                  </p>
                  <p>
                    - Phát hiện, ngăn chặn các hoạt động giả mạo, phá hoại tài
                    khoản của Khách Hàng hoặc các hoạt động giả mạo nhận dạng
                    của Khách Hàng trên Winmart.
                  </p>
                  <p>
                    - Liên lạc, hỗ trợ liên lạc và giải quyết với Khách Hàng
                    trong những trường hợp đặc biệt.
                  </p>
                </div>
              </li>
              <li>
                <h4 className="font-bold my-3 text-sm">
                  2.4. Về việc liên kết với các website khác
                </h4>
                <div className="font-normal text-sm text-justify my-3 ml-6 space-y-2">
                  <p>
                    - Khách Hàng có trách nhiệm bảo vệ thông tin tài khoản của
                    mình và không cung cấp bất kỳ thông tin nào liên quan đến
                    tài khoản và mật khẩu truy cập trên Winmart trên các website
                    khác ngoại trừ khi đăng nhập vào www.winmart.vn.
                  </p>
                  <p>
                    - Khách Hàng không chịu trách nhiệm về những vấn đề phát
                    sinh khi Khách Hàng truy cập vào Winmart từ các website khác
                    không phải là website chính thức của Winmart.
                  </p>
                </div>
              </li>
              <li>
                <h4 className="font-bold my-3 text-sm">
                  2.5. Về việc chia sẻ Thông Tin Khách Hàng
                </h4>
                <div className="font-normal text-sm text-justify my-3 ml-6 space-y-2">
                  <p>
                    - Winmart không cung cấp Thông Tin Khách Hàng cho bất kỳ bên
                    thứ ba nào trừ trường hợp phải thực hiện theo yêu cầu của
                    các cơ quan Nhà nước có thẩm quyền, hoặc theo quy định của
                    pháp luật, hoặc khi việc cung cấp thông tin đó là cần thiết
                    để Winmart cung cấp dịch vụ/tiện ích cho Khách Hàng (ví dụ:
                    cung cấp các thông tin giao nhận cần thiết cho các đơn vị
                    đối tác vận chuyển …).
                  </p>
                  <p>
                    - Ngoài các trường hợp nêu trên, Winmart sẽ có thông báo cụ
                    thể cho Khách Hàng khi phải tiết lộ Thông Tin Khách Hàng cho
                    một bên thứ ba. Trong trường hợp này, Winmart cam kết sẽ chỉ
                    tiết lộ Thông Tin Khách Hàng khi được sự đồng ý của Khách
                    Hàng.
                  </p>
                  <p>
                    - Winmart có thể chia sẻ Thông Tin Khách Hàng cho các mục
                    đích sau:
                    <ul className="ml-9 list-inside list-disc space-y-1">
                      <li>
                        Nghiên cứu thị trường và các báo cáo phân tích: Winmart
                        có thể dùng Thông Tin Khách Hàng để nghiên cứu thị
                        trường, tổng hợp, phân tích thông tin chung của Khách
                        Hàng (ví dụ độ tuổi trung bình, khu vực địa lý), thông
                        tin chi tiết sẽ được ẩn và chỉ được dùng để phục vụ công
                        việc thống kê. Trong trường hợp Winmart tiến hành khảo
                        sát cần sự tham gia của Khách Hàng, bất kỳ câu trả lời
                        cho khảo sát hoặc thăm dò dư luận mà Khách Hàng cung cấp
                        cho Winmart sẽ không được chuyển cho bất kỳ bên thứ ba
                        nào.
                      </li>
                      <li>
                        Trao đổi Thông Tin Khách Hàng với các công ty khác trong
                        Tập Đoàn Masan Group và các đối tác có ký kết thỏa thuận
                        liên kết chăm sóc khách hàng với Winmart: Winmart có thể
                        chia sẻ Thông Tin Khách Hàng cho các công ty thành viên
                        của Tập Đoàn Masan Group, các đối tác liên kết và các
                        trang thông tin điện tử liên kết trong nước và quốc tế
                        của Winmart. Việc chia sẻ này giúp Winmart có thể cung
                        cấp cho Khách Hàng các thông tin về các sản phẩm và dịch
                        vụ, liên quan đến hàng hóa, dịch vụ và vấn đề khác mà
                        Bạn có thể quan tâm. Trong trường hợp các công ty thành
                        viên của Tập Đoàn Masan Group và các công ty liên kết
                        của Winmart được cấp quyền truy cập Thông Tin Khách
                        Hàng, họ sẽ phải tuân thủ nghiêm ngặt các quy định được
                        mô tả trong Chính Sách này.
                      </li>
                      <li>
                        Trao đổi Thông Tin Khách Hàng các bên thứ 3 là đối tác,
                        đại lý của Winmart: Winmart có thể chuyển Thông Tin
                        Khách Hàng cho các đại lý và nhà thầu phụ để làm phân
                        tích dữ liệu, tiếp thị và hỗ trợ dịch vụ khách hàng.
                        Winmart cũng có thể trao đổi Thông Tin Khách Hàng với
                        bên thứ ba cho mục đích chống gian lận và giảm rủi ro
                        tín dụng.
                      </li>
                      <li>
                        Trao đổi Thông Tin Khách Hàng với các đối tác quảng cáo:
                        Hệ thống theo dõi hành vi của Khách Hàng được Winmart sử
                        dụng trên kênh hiển thị quảng cáo (ví dụ như tiếp thị
                        lại Khách Hàng, hệ thống quản lý các chiến dịch quảng
                        cáo DoubleClick, báo cáo về nhân khẩu, sở thích của
                        khách hàng với công cụ Google Analytics...) có thể thu
                        thập được các thông tin như độ tuổi, giới tính, sở thích
                        và số lần tương tác với số lần xuất hiện của quảng cáo.
                        Với tính năng cài đặt quảng cáo, Khách Hàng có thể lựa
                        chọn thoát ra khỏi tính năng theo dõi hành vi khách hàng
                        của Google Analytics và lựa chọn cách xuất hiện của kênh
                        hiển thị quảng cáo trên Google.
                      </li>
                      <li>
                        Trao đổi Thông Tin Khách Hàng với những đơn vị kinh
                        doanh khác mà Winmart có kế hoạch sáp nhập hoặc mua lại:
                        Trong trường hợp này, Winmart sẽ yêu cầu những đơn vị đó
                        tuân thủ nghiêm ngặt theo Chính Sách này.
                      </li>
                    </ul>
                  </p>
                </div>
              </li>
              <li>
                <h4 className="font-bold my-3 text-sm">2.6. Sử dụng Cookie</h4>
                <p className="font-normal text-sm text-justify my-3">
                  Winmart cung cấp các tập tin cookie hoặc các công nghệ tương
                  tự, nhằm thu thập các thông tin như: lịch sử truy cập, các lựa
                  chọn của Khách Hàng khi truy cập và sử dụng tính năng của
                  Winmart... nhằm tăng trải nghiệm bảo mật và giúp Winmart hiểu
                  rõ nhu cầu, sở thích của Khách Hàng để có thể cung cấp dịch vụ
                  tốt hơn.
                </p>
              </li>
              <li>
                <h4 className="font-bold my-3 text-sm">
                  2.7. Liên hệ, giải đáp thắc mắc
                </h4>
                <p className="font-normal text-sm text-justify my-3">
                  Bất kỳ khi nào Khách Hàng cần hỗ trợ, hãy gọi đến số Hotline
                  của Winmart 024.710.66866 hoặc gửi email đến địa chỉ:
                  cskh@winmart.massangroup.com.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
