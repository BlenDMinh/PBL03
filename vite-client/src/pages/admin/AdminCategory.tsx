import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminCategoryRow from "../../components/admin/AdminCategoryRow";
import AdminCategoryView from "../../components/admin/AdminCategoryView";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { Category } from "../../models/Category";
import { CategoryService } from "../../services/admin/CategoryService";

function AdminCategory() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const service = CategoryService.getInstance();
  useEffect(() => {
    service.getAll().then((categories) => setCategories(categories));
  }, [service]);
  const [category, setCategory] = useState<Category | undefined>();
  return (
    <main>
      <AdminCategoryView
        category={category}
        onSubmit={(category) => {
          const service = CategoryService.getInstance();
          if (category?.categoryId == -1) service.insert(category);
          else service.update(category);
          navigate(0);
        }}
      />
      <div className="flex flex-row">
        <AdminNavbar />
        <div className="w-full flex flex-col">
          <div className="h-32 bg-winmart">
            <span className="ml-52 h-full flex flex-col justify-center text-white font-bold text-3xl">
              Danh mục
            </span>
          </div>
          <div className="bg-gray-200 h-full">
            <div className="ml-32 m-10 flex flex-row justify-between">
              <div></div>
              <div>
                <button className="bg-white shadow-lg rounded justify-center items-center flex w-12 h-12 hover:bg-winmart hover:text-white">
                  <Plus />
                </button>
              </div>
            </div>
            <div className="ml-32 flex flex-col p-10 rounded-xl bg-white shadow-lg m-10 divide-y divide-gray-150">
              {categories.map((p) => (
                <AdminCategoryRow
                  category={p}
                  onEdit={() => {
                    setCategory(p);
                  }}
                  onDelete={() => {
                    return;
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminCategory;
