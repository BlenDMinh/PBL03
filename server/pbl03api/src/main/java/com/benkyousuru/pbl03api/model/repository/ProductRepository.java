package com.benkyousuru.pbl03api.model.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.benkyousuru.pbl03api.model.entity.Category;
import com.benkyousuru.pbl03api.model.entity.Product;

public interface ProductRepository extends PagingAndSortingRepository<Product, Integer>, CrudRepository<Product, Integer> {
    List<Product> findAllByCategory(Category category, Pageable pageable);
}
