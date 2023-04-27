"use client";

import { CustomerService } from "@/services/implement/CustomerService";
import { LoginRequest } from "@/models/LoginRequest";
import { FC, useEffect } from "react";
import { appContainer } from "@/container";
import { ICustomerService } from "@/services/ICustomerService";
import { TYPES } from "@/types";
import "reflect-metadata";
import { http } from "@/services/utils/http";
import { loggedInCustomer } from "../api/customer/login/route";
import { Product } from "@/models/Product";

const Page : FC = ({}) => {
    http.get('http://localhost:3000/api/product/10003037').then((e) => console.log(e));
    return (
        <main>

        </main>
    );
}

export default Page;