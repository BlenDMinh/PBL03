package com.benkyousuru.pbl03api.model.repository;

import org.springframework.data.repository.CrudRepository;

import com.benkyousuru.pbl03api.model.entity.Product;

public interface ProductRepository extends CrudRepository<Product, Integer> {
    
}
