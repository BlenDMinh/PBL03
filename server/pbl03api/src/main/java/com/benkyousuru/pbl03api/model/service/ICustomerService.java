package com.benkyousuru.pbl03api.model.service;

import com.benkyousuru.pbl03api.model.model.CustomerModel;
import com.benkyousuru.pbl03api.model.model.LoginRequest;
import com.benkyousuru.pbl03api.model.model.LoginResponse;

public interface ICustomerService extends ICrudService<CustomerModel, Integer> {
    void setPassword(Integer customerId, String password);
    LoginResponse login(LoginRequest request);
    void logout(String token);
}
