package com.benkyousuru.pbl03api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.benkyousuru.pbl03api.model.model.CategoryModel;
import com.benkyousuru.pbl03api.model.service.ICategoryService;

import jakarta.transaction.Transactional;

@RestController
@CrossOrigin(origins = "*")
public class CategoryController {
    static final String basePath = "/api/category";

    @Autowired
    private ICategoryService categoryService;

    @GetMapping(basePath)
    public ResponseEntity<List<CategoryModel>> getAll() {
        return ResponseEntity.ok().body(categoryService.getAll());
    }

    @GetMapping(basePath + "/{id}")
    public ResponseEntity<CategoryModel> getById(@PathVariable Integer id){
        Optional<CategoryModel> category = categoryService.getById(id);
        if (category.isEmpty())
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok().body(category.get());
    }

    @PostMapping(basePath)
    public ResponseEntity<CategoryModel> insert(@RequestBody CategoryModel model) {
        try {
            return ResponseEntity.ok(categoryService.insert(model));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping(basePath)
    @Transactional
    public ResponseEntity<CategoryModel> update(@RequestBody CategoryModel model){
        try {
            return ResponseEntity.ok(categoryService.update(model)); 
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
        
    }

    @DeleteMapping(basePath)
    @Transactional
    public ResponseEntity<String> delete(@RequestBody CategoryModel model) {
        try {
            categoryService.delete(model);
            return ResponseEntity.ok("{\"message\": \"Deleted\"}");
        } catch (RuntimeException e) {
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        
    }

    @DeleteMapping(basePath + "/{id}")
    @Transactional
    public ResponseEntity<String> deleteById(@PathVariable Integer id) {
        try {
            categoryService.deleteById(id);
            return ResponseEntity.ok("{\"message\": \"Deleted\"}");
        } catch (RuntimeException e) {
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        
    }
}
