package com.benkyousuru.pbl03api.model.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.benkyousuru.pbl03api.model.entity.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {
    @Modifying
    @Query(value = "UPDATE CUSTOMER SET _PASSWORD = ?2 WHERE CUSTOMER_ID = ?1", nativeQuery = true)
    void updatePassword(Integer customerId, String password);
}
