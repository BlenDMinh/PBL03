package com.benkyousuru.pbl03api.model.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {
    private LoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }
    private LoginRequest(String token) {
        this.token = token;
    }
    private String email;
    private String password;
    private String token;

    public static LoginRequest byEmail(String email, String password) {
        return new LoginRequest(email, password);
    }

    public static LoginRequest byToken(String token) {
        return new LoginRequest(token);
    }

    public boolean logginInByEmail() {
        return email != null && password != null;
    }

    public boolean logingInByToken() {
        return token != null;
    }
}
