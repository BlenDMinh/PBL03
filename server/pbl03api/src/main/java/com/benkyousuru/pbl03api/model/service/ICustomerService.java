package com.benkyousuru.pbl03api.model.service;

import com.benkyousuru.pbl03api.model.model.CustomerModel;

public interface ICustomerService extends ICrudService<CustomerModel, Integer> {
    void setPassword(Integer customerId, String password);
}
