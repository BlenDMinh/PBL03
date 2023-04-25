import { appContainer } from "@/container";
import { Customer } from "@/models/Customer";
import { LoginRequest } from "@/models/LoginRequest";
import { LoginResponse } from "@/models/LoginResponse";
import { ICustomerService } from "@/services/ICustomerService";
import { TYPES } from "@/types";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { NextRequest, NextResponse } from "next/server";

var service = appContainer.get<ICustomerService>(TYPES.CustomerService);

export async function POST(req: NextRequest) {
    const data = await req.json();
    var request: LoginRequest;

    
    var token = hasCookie("token") ? getCookie("token")?.toString() : undefined;

    if(data.email == undefined) {
        if(!token)
            return NextResponse.error();
        request = {
            token: token
        };
    } else {
        request = {
            email: data.email,
            password: data.password ?? ""
        }
    }
    const response: LoginResponse = await service.login(request);
    console.log(response);
    setCookie("token", response.token.toString() ?? token);
    loggedInCustomer = response.customer;
    console.log(loggedInCustomer);
    return new Response("{}", {
        status: 200
    })
}

export var loggedInCustomer: Customer | undefined;