import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Plus,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductService } from "../../admin/services/implement/ProductService";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminProductRow from "../../components/admin/AdminProductRow";
import { Product } from "../../models/Product";
import AdminProductView from "../../components/admin/AdminProductView";
import { Category } from "../../models/Category";

interface NavProps {
  currentPage: number;
}

function NavigationNumber(props: NavProps) {
  if (props.currentPage == 0)
    return (
      <div className="flex flex-row gap-5 items-center justify-center text-lg w-32">
        <a href="/admin/product/0" className="w-8 text-red-400">
          1
        </a>
        <a href="/admin/product/1" className="w-8">
          2
        </a>
        <a href="/admin/product/2" className="w-8">
          3
        </a>
      </div>
    );

  if (props.currentPage == 293)
    return (
      <div className="flex flex-row gap-5 items-center justify-center text-lg w-32">
        <a href="/admin/product/291">292</a>
        <a href="/admin/product/292">293</a>
        <a href="/admin/product/293" className="text-red-400">
          294
        </a>
      </div>
    );

  return (
    <div className="flex flex-row gap-5 items-center justify-center text-lg w-32">
      <a href={"/admin/product/" + (props.currentPage - 1)} className="w-8">
        {props.currentPage}
      </a>
      <a
        href={"/admin/product/" + props.currentPage}
        className="w-8 text-red-400"
      >
        {props.currentPage + 1}
      </a>
      <a href={"/admin/product/" + (props.currentPage + 1)} className="w-8">
        {props.currentPage + 2}
      </a>
    </div>
  );
}

function AdminProduct() {
  const [products, setProducts] = useState<Product[]>([]);

  const navigate = useNavigate();

  const { pageNum } = useParams();
  const pageNumN = Number.parseInt(pageNum ?? "0");

  console.log(pageNum);

  useEffect(() => {
    const service = ProductService.getInstance();
    service.getAll(pageNumN, 20).then((products) => {
      setProducts(products as Product[]);
    });
  }, []);
  const [product, setProduct] = useState<Product | undefined>();
  return (
    <main>
      <AdminProductView product={product} onSubmit={(product) => {}}/>
      <AdminNavbar />
      <div className="flex flex-row">
        <div className="w-full flex flex-col">
          <div className="h-32 bg-winmart"></div>
          <div className="bg-gray-100">
            <div className="ml-32 m-10 flex flex-row justify-between">
              <div className="flex flex-row gap-5">
                <button
                  className="bg-white shadow-lg rounded justify-center items-center flex w-12 h-12 hover:bg-winmart hover:text-white"
                  onClick={() => {
                    navigate("/admin/product/0");
                    navigate(0);
                  }}
                >
                  <ChevronsLeft />
                </button>
                <button
                  className="bg-white shadow-lg rounded justify-center items-center flex w-12 h-12 hover:bg-winmart hover:text-white"
                  onClick={() => {
                    navigate("/admin/product/" + Math.max(pageNumN - 1, 0));
                    navigate(0);
                  }}
                >
                  <ChevronLeft />
                </button>
                <NavigationNumber currentPage={pageNumN} />
                <button
                  className="bg-white shadow-lg rounded justify-center items-center flex w-12 h-12 hover:bg-winmart hover:text-white"
                  onClick={() => {
                    navigate("/admin/product/" + Math.min(pageNumN + 1, 293));
                    navigate(0);
                  }}
                >
                  <ChevronRight />
                </button>
                <button
                  className="bg-white shadow-lg rounded justify-center items-center flex w-12 h-12 hover:bg-winmart hover:text-white"
                  onClick={() => {
                    navigate("/admin/product/293");
                    navigate(0);
                  }}
                >
                  <ChevronsRight />
                </button>
              </div>
              <div>
                <button className="bg-white shadow-lg rounded justify-center items-center flex w-12 h-12 hover:bg-winmart hover:text-white">
                  <Plus />
                </button>
              </div>
            </div>
            <div className="ml-32 flex flex-col p-10 rounded-xl bg-white shadow-lg m-10 divide-y divide-gray-150">
              {products.map((p) => (
                <AdminProductRow 
                product={p}
                onEdit={() => {
                  setProduct(p);
                }}
                onDelete={() => {}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminProduct;

function AddProduct() {
  const handleAddProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <button onClick={handleAddProduct} type="submit"></button>
      </form>
    </div>
  );
}

function UpdateProduct() {
  return <div></div>;
}

function DeleteProduct() {
  return <div></div>;
}
