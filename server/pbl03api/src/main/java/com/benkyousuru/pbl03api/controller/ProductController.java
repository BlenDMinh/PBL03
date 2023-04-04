package com.benkyousuru.pbl03api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.benkyousuru.pbl03api.model.model.ProductModel;
import com.benkyousuru.pbl03api.model.service.IProductService;

import jakarta.transaction.Transactional;

@RestController
public class ProductController {
    static final String basePath = "/api/product";

    @Autowired
    private IProductService productService;

    @GetMapping(basePath)
    public ResponseEntity<List<ProductModel>> getAll() {
        return ResponseEntity.ok(productService.getAll());
    }

    @GetMapping(basePath + "/{id}")
    public ResponseEntity<ProductModel> getById(@PathVariable Integer id){
        Optional<ProductModel> product = productService.getById(id);
        if (product.isEmpty())
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(product.get());
    }

    @PostMapping(basePath)
    @Transactional
    public ResponseEntity<String> insert(@RequestBody ProductModel model) {
        try {
            productService.insert(model);
            return ResponseEntity.ok("Saved");
        } catch(RuntimeException e) {
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping(basePath)
    @Transactional
    public ResponseEntity<String> update(@RequestBody ProductModel model){
        try {
            productService.update(model);
            return ResponseEntity.ok("Saved");
        } catch (RuntimeException e) {
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        
    }

    @DeleteMapping(basePath)
    @Transactional
    public ResponseEntity<String> delete(@RequestBody ProductModel model) {
        try {
            productService.delete(model);
            return ResponseEntity.ok("Deleted");
        } catch (RuntimeException e) {
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        
    }

    @DeleteMapping(basePath + "/{id}")
    @Transactional
    public ResponseEntity<String> deleteById(@PathVariable Integer id) {
        try {
            productService.deleteById(id);
            return ResponseEntity.ok("Deleted");
        } catch (RuntimeException e) {
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        
    }

}