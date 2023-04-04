import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { CategoryService } from "@/services/implement/CategoryService";
import Head from "next/head";


export default function Test() {
    var service = new CategoryService()
    service.getAll().then(e => console.log(e))
    return (
        <div className="font-own">
        <Head>
          <title>Siêu thị Winmart</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Footer />
      </div>
    );
}