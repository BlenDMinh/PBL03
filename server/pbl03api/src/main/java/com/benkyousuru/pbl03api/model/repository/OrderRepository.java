package com.benkyousuru.pbl03api.model.repository;

import org.springframework.data.repository.CrudRepository;

import com.benkyousuru.pbl03api.model.entity.Order;

public interface OrderRepository extends CrudRepository<Order, Integer> {
    
}
