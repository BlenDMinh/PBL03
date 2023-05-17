import { useEffect, useState } from "react";
import { CustomerService } from "../../admin/services/implement/CustomerService";
import AdminCustomerRow from "../../components/admin/AdminCustomerRow";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { Customer } from "../../models/Customer";

function AdminCustomer() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  useEffect(() => {
    const service = CustomerService.getInstance();
    service.getAll().then((customers) => setCustomers(customers as Customer[]));
  }, []);
  return (
    <main>
      <div className="flex flex-row">
        <AdminNavbar />
        <div className="w-full flex flex-col">
          <div className="h-32 bg-winmart"></div>
          <div className="bg-gray-100">
            <div className="ml-32 flex flex-col p-10 rounded-xl bg-white shadow-lg m-10 divide-y divide-gray-150">
              {customers.map((p) => (
                <AdminCustomerRow customer={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminCustomer;
