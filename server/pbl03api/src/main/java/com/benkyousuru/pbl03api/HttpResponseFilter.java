package com.benkyousuru.pbl03api;

import java.io.IOException;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.annotation.WebFilter;

@WebFilter("/**")
public class HttpResponseFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        // HttpServletResponse eResponse = (HttpServletResponse) response;
        // eResponse.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        // eResponse.addHeader("Access-Control-Allow-Credentials", "true");
        // eResponse.addHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
        // eResponse.addHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
        // chain.doFilter(request, response);
    }
}
