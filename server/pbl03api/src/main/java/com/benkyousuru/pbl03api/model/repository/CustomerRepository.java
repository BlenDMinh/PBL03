package com.benkyousuru.pbl03api.model.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.benkyousuru.pbl03api.model.entity.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {
    List<Customer> findByEmail(String email);
}
