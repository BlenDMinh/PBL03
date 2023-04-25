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

const Page : FC = ({}) => {
    useEffect(() => {
        var request: LoginRequest = {
            email: "themysmine@gmail.com",
            password: "ComTMM0112",
        };
        http.post("http://localhost:3000/api/customer/login", new Headers(), JSON.stringify(request)).then((e) => {
            console.log(loggedInCustomer);
        });
    }, []);
    return (
        <main>

        </main>
    );
}

export default Page;