import { useEffect, useState } from "react";
import { CategoryService } from "../../admin/services/implement/CategoryService";
import AdminCategoryRow from "../../components/admin/AdminCategoryRow";
import AdminCategoryView from "../../components/admin/AdminCategoryView";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { Category } from "../../models/Category";

function AdminCategory() {
  const [categories, setCategories] = useState<Category[]>([]);
  const service = CategoryService.getInstance();
  useEffect(() => {
    service.getAll().then((categories) => setCategories(categories));
  }, []);
  const [category, setCategory] = useState<Category | undefined>();
  return (
    <main>
      <AdminCategoryView category={category} onSubmit={(category) => {}} />
      <div className="flex flex-row">
        <AdminNavbar />
        <div className="w-full flex flex-col">
          <div className="h-32 bg-winmart"></div>
          <div className="bg-gray-100">
            <div className="ml-32 flex flex-col p-10 rounded-xl bg-white shadow-lg m-10 divide-y divide-gray-150">
              {categories.map((p) => (
                <AdminCategoryRow
                  category={p}
                  onEdit={() => {
                    setCategory(p);
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

export default AdminCategory;
