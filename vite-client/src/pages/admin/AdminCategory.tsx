import { useEffect, useState } from "react";
import { CategoryService } from "../../admin/services/implement/CategoryService";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { Category } from "../../models/Category";
import AdminCategoryRow from "../../components/admin/AdminCategoryRow";

function AdminCategory() {
  const [categories, setCategories] = useState<Category[]>([])
  const service = CategoryService.getInstance()
  useEffect(() => {
    service.getAll().then((categories) => setCategories(categories))
  }, []);
  return (
    <main>
      <div className="flex flex-row">
        <AdminNavbar/>
        <div className="w-full flex flex-col">
          <div className="h-32 bg-winmart">
              
          </div>
          <div className="bg-gray-100">
            <div className="ml-32 flex flex-col p-10 rounded-xl bg-white shadow-lg m-10 divide-y divide-gray-150">
              {categories.map((p) => (
                <AdminCategoryRow category={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AdminCategory;
