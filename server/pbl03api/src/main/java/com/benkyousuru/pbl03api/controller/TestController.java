package com.benkyousuru.pbl03api.controller;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.benkyousuru.pbl03api.model.entity.Category;
import com.benkyousuru.pbl03api.model.entity.Customer;
import com.benkyousuru.pbl03api.model.entity.Product;
import com.benkyousuru.pbl03api.model.repository.CategoryRepository;
import com.benkyousuru.pbl03api.model.repository.CustomerRepository;
import com.benkyousuru.pbl03api.model.repository.ProductRepository;

@RestController
public class TestController {
    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/api/category/add")
    public String AddCategory() {
        categoryRepository.save(Category.builder()
                        .categoryName("Undefined")
                        .build());
        return "SAVED CATEGORY";
    }

    @GetMapping("/api/product/add")
    public String AddProduct() {
        Category category = null;
        for (Category e : categoryRepository.findAll())
            category = e;
        Product p = Product.builder()
        .productName("aa")
        .category(category)
        .build();
        productRepository.save(p);
        category.setProducts(new ArrayList<>(Arrays.asList(p)));
        categoryRepository.save(category);
        return "SAVED PRODUCT";
    }
}
