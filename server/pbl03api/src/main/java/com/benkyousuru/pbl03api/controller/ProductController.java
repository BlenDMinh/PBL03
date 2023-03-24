package com.benkyousuru.pbl03api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.benkyousuru.pbl03api.model.model.ProductModel;
import com.benkyousuru.pbl03api.model.service.IProductService;

@RestController
public class ProductController {
    static final String basePath = "/api/product";

    @Autowired
    private IProductService productService;

    @GetMapping(basePath)
    public ResponseEntity<List<ProductModel>> getAll() {
        return ResponseEntity.ok(productService.getAll());
    }

    @PostMapping(basePath)
    public String insert(@RequestBody ProductModel model) {
        productService.insert(model);
        return "Saved";
    }
}
