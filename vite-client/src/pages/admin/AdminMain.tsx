function AdminMain() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen w-screen gap-y-12">
        <a
          href="/admin/category"
          className="p-4 bg-winmart rounded-md w-48 text-center text-white"
        >
          Category
        </a>
        <a
          href="/admin/customer"
          className="p-4 bg-winmart rounded-md w-48 text-center text-white"
        >
          Customer
        </a>
        <a
          href="/admin/order"
          className="p-4 bg-winmart rounded-md w-48 text-center text-white"
        >
          Order
        </a>
        <a
          href="/admin/product"
          className="p-4 bg-winmart rounded-md w-48 text-center text-white"
        >
          Product
        </a>
      </div>
    </main>
  );
}

export default AdminMain;
