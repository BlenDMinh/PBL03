package com.benkyousuru.pbl03api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.benkyousuru.pbl03api.model.entity.Permission;
import com.benkyousuru.pbl03api.model.model.CustomerModel;
import com.benkyousuru.pbl03api.model.model.LoginRequest;
import com.benkyousuru.pbl03api.model.model.LoginResponse;
import com.benkyousuru.pbl03api.model.model.RegisterRequest;
import com.benkyousuru.pbl03api.model.service.IAuthenticationService;

import jakarta.transaction.Transactional;

@CrossOrigin(origins = "*")
@RequestMapping("/api/authen")
@RestController
public class AuthenticationController {

    @Autowired
    private IAuthenticationService authenticationService;

    @PostMapping("/register")
    @Transactional
    public ResponseEntity<CustomerModel> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/login")
    @Transactional
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        LoginResponse response = authenticationService.login(request);
        if(response == null)
            return ResponseEntity.badRequest().build();
        return ResponseEntity.ok(response);
    }

    @PostMapping("/logout")
    @Transactional
    public String logout(@RequestBody String token) {
        authenticationService.logout(token);
        return "{\"message\": \"Logged out\"}";
    }

    @PostMapping("/{id}/change-password")
    @Transactional
    public String changePassword(@PathVariable Integer id, @RequestBody String password) {
        authenticationService.setPassword(id, password);
        return "{\"message\": \"Changed\"}";
    }

    @PostMapping("/{id}/change-permission")
    @Transactional
    public String changePermission(@PathVariable Integer id, @RequestBody Permission permission) {
        authenticationService.setPermission(id, permission);
        return "{\"message\": \"Changed\"}";
    }
}