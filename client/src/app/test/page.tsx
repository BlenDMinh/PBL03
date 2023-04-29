"use client";

import { CustomerService } from "@/services/implement/CustomerService";
import { LoginRequest } from "@/models/LoginRequest";
import { FC, useEffect, useState } from "react";
import { appContainer } from "@/container";
import { ICustomerService } from "@/services/ICustomerService";
import { TYPES } from "@/types";
import "reflect-metadata";
import { http } from "@/services/utils/http";
import { loggedInCustomer } from "../api/customer/login/route";
import { Product } from "@/models/Product";

const Page : FC = ({}) => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        http.get<Product[]>('http://localhost:3000/api/product?pageNum=0&pageSize=8').then((e) => setProducts(e));
    }, []);
    return (
        <main>
            {JSON.stringify(products)}
        </main>
    );
}

export default Page;