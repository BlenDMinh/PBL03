package com.benkyousuru.pbl03api.model.service;

import java.util.List;
import java.util.Optional;

import com.benkyousuru.pbl03api.model.model.CustomerModel;

public interface CustomerService {
    List<CustomerModel> getAll();
    Optional<CustomerModel> get(Integer id);
    void insert(CustomerModel customer);
    void delete(Integer id);
}
