import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CustomerService } from "../services/implement/CustomerService";
import { Customer } from "../models/Customer";
import { Gender } from "../models/Gender";

const service = new CustomerService();

function Test() {
    const [customer, setCustomer] = useState<Customer>();
    useEffect(() => {
        service.login().then((_) => {
            setCustomer(service.loggedInCustomer);
        });
    }, []);
    return (
        <div>
            {JSON.stringify(customer)}
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <main>
            <Test/>
        </main>
    </React.StrictMode>,
    document.getElementById("root")
)