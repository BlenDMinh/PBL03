import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Category } from "../../models/Category";
import { CategoryService } from "../../services/admin/CategoryService";
import { ProductService } from "../../services/admin/ProductService";
import AdminCategoryRow from "./AdminCategoryRow";
import AdminProductRow from "./AdminProductRow";

interface AdminCategoryViewProp {
  category: Category | undefined;
  onSubmit: (category: Category | undefined) => void;
}

function AdminCategoryView(props: AdminCategoryViewProp) {
  const [category, setCategory] = useState<Category | undefined>(undefined);
  const [isSub, setIsSub] = useState<boolean>(false);
  useEffect(() => {
    console.log(props.category);
    if (props.category == undefined) return;
    const service = CategoryService.getInstance();
    service.getById(props.category?.categoryId).then((_category) => {
      if (
        _category.subcategories == undefined ||
        _category.subcategories == null
      )
        _category.subcategories = [];
      if (_category.subcategories.length < 1) {
        setIsSub(false);
        const proService = ProductService.getInstance();
        proService.getByCategory(_category.categoryId, 0, 1000).then((ps) => {
          _category.products = ps;
          setCategory(_category);
        });
      } else {
        setCategory(_category);
        setIsSub(true);
      }
    });
  }, [props.category]);
  if (category == undefined) return <div></div>;
  return (
    <div className="fixed w-screen h-screen bg-slate-900 bg-opacity-50 z-40">
      <form
        action=""
        onSubmit={() => {
          props.onSubmit(category);
        }}
        className="mx-16 my-16 ml-32 bg-white w-auto h-5/6 rounded-xl p-10 flex flex-col gap-10"
      >
        <div className="flex justify-between">
          <div></div>
          <button
            className="hover:bg-white hover:text-slate-700 shadow rounded justify-center items-center flex w-12 h-12 bg-red-500 text-white"
            onClick={() => setCategory(undefined)}
          >
            <X />
          </button>
        </div>
        <div className="flex items-center gap-10 text-lg font-bold">
          <label htmlFor="name">Tên danh mục:</label>
          <input
            type="text"
            name="categoryName"
            id="categoryName"
            value={category.categoryName}
            onChange={(event) => {
              const updatedCategory = { ...category }; // Create a copy of the category object
              updatedCategory.categoryName = event.target.value; // Update the copied object
              setCategory(updatedCategory); // Set the updated object as the new state value
            }}
            className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md font-normal"
            required
          />
        </div>
        <div className="flex gap-10 text-lg font-bold">
          <div className="flex gap-5">
            <label htmlFor="subCategory">Subcategories</label>
            <input
              name="catChoice"
              id="subCategory"
              value="sub"
              type="radio"
              checked={isSub}
              onChange={() => {
                setIsSub(true);
              }}
            />
          </div>
          <div className="flex gap-5 text-lg font-bold">
            <label htmlFor="products">Products</label>
            <input
              name="catChoice"
              id="products"
              value="pro"
              type="radio"
              checked={!isSub}
              onChange={() => {
                setIsSub(false);
              }}
            />
          </div>
        </div>
        <div className="h-2/3 shadow-inner bg-slate-100 overflow-y-scroll">
          {isSub ? (
            <div className="w-full h-4/5">
              <div className="flex flex-col p-10 rounded-xl bg-white shadow-lg m-10 divide-y divide-gray-150">
                {category.subcategories.map((p) => (
                  <AdminCategoryRow
                    category={p}
                    onEdit={() => {
                      // setCategory(p);
                    }}
                    onDelete={() => {}}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full h-4/5">
              <div className="ml-32 flex flex-col p-10 rounded-xl bg-white shadow-lg m-10 divide-y divide-gray-150">
                {category.products.map((p) => (
                  <AdminProductRow
                    product={p}
                    onEdit={() => {}}
                    onDelete={() => {}}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <button
          className="mt-4 z-50 border flex self-center justify-center items-center gap-5 px-4 py-5 rounded-md text-xl hover:text-slate-500 hover:bg-inherit font-bold bg-winmart text-white w-40 h-16"
          onClick={() => {
            props.onSubmit(category);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminCategoryView;
