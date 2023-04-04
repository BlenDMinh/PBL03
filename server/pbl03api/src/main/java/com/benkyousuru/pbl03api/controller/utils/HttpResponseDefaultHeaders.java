package com.benkyousuru.pbl03api.controller.utils;

import org.springframework.http.HttpHeaders;

public class HttpResponseDefaultHeaders extends HttpHeaders {
    static public HttpResponseDefaultHeaders Instance = new HttpResponseDefaultHeaders();

    private HttpResponseDefaultHeaders() {
        this.add("Access-Control-Allow-Origin", "http://localhost:3000");
        this.add("Access-Control-Allow-Credentials", "true");
        this.add("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
        this.add("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    }
}
