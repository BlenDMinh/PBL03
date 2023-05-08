package com.benkyousuru.pbl03api.model.service;

import com.benkyousuru.pbl03api.model.entity.Permission;
import com.benkyousuru.pbl03api.model.model.CustomerModel;
import com.benkyousuru.pbl03api.model.model.LoginRequest;
import com.benkyousuru.pbl03api.model.model.LoginResponse;
import com.benkyousuru.pbl03api.model.model.RegisterRequest;

public interface IAuthenticationService {
    CustomerModel register(RegisterRequest request);
    void setPassword(Integer customerId, String password);
    void setPermission(Integer customerId, Permission permission);
    LoginResponse login(LoginRequest request);
    void logout(String token);
}
