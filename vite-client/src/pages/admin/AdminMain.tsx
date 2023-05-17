import AdminNavbar from "../../components/admin/AdminNavbar";

function AdminMain() {
  return (
    <main>
      <div className="flex flex-row">
        <AdminNavbar />
        <div className="w-full flex flex-col">
          <div className="h-32 bg-winmart"></div>
        </div>
      </div>
    </main>
  );
}

export default AdminMain;
