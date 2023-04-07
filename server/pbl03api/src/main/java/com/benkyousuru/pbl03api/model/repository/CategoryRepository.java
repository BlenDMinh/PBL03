package com.benkyousuru.pbl03api.model.repository;

import org.springframework.data.repository.CrudRepository;

import com.benkyousuru.pbl03api.model.entity.Category;

public interface CategoryRepository extends CrudRepository<Category, Integer> {
    
}