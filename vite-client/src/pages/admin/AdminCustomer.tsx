import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminCustomerRow from "../../components/admin/AdminCustomerRow";
import AdminCustomerView from "../../components/admin/AdminCustomerView";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { Customer } from "../../models/Customer";
import { CustomerService } from "../../services/admin/CustomerService";

function AdminCustomer() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState<Customer[]>([]);
  useEffect(() => {
    const service = CustomerService.getInstance();
    service.getAll().then((customers) => setCustomers(customers as Customer[]));
  }, []);
  const [customer, setCustomer] = useState<Customer | undefined>();
  return (
    <main>
      <AdminCustomerView
        customer={customer}
        onSubmit={(customer) => {
          const service = CustomerService.getInstance();
          if (customer?.customerId != -1) service.update(customer);
          else service.insert(customer);
        }}
      />
      <div className="flex flex-row">
        <AdminNavbar />
        <div className="w-full flex flex-col">
          <div className="h-32 bg-winmart">
            <span className="ml-52 h-full flex flex-col justify-center text-white font-bold text-3xl">
              Khách hàng
            </span>
          </div>
          <div className="bg-gray-200 h-full max-h-screen">
            <div className="ml-32 m-10 flex flex-row justify-between">
              <div></div>
              <div>
                <button
                  className="bg-white shadow-lg rounded justify-center items-center flex w-12 h-12 hover:bg-winmart hover:text-white"
                  onClick={() =>
                    setCustomer({
                      customerId: -1,
                      customerName: "",
                      addresses: [],
                      orders: [],
                      cartProducts: [],
                      dateOfBirth: undefined,
                      email: "",
                      gender: "MALE",
                    })
                  }
                >
                  <Plus />
                </button>
              </div>
            </div>
            <div className="ml-32 flex flex-col p-10 rounded-xl bg-white shadow-lg m-10 divide-y divide-gray-150">
              {customers.map((p) => (
                <AdminCustomerRow
                  customer={p}
                  onEdit={() => {
                    setCustomer(p);
                  }}
                  onDelete={() => {
                    const service = CustomerService.getInstance();
                    service.delete(p);
                    navigate(0);
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

export default AdminCustomer;
