import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Product } from "@/models/Product";

const product: Product = {
  sku: 10617963,
  productName: "MEATDELI [PRE] Thịt heo xay đặc biệt",
  listedPrice: 48018,
  origin: "Vietnam",
  brand: "MEATDELI",
  ingridients: "ingridients",
  userManual: "userManual",
  preservedManual: "preservedManual",
  description: "description",
};

export default function Home() {
  return (
    <main className="bg-gray-300">
      <Navbar user={undefined} />
      <Footer />
    </main>
  );
}
