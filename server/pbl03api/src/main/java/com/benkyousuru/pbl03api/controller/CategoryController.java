package com.benkyousuru.pbl03api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.benkyousuru.pbl03api.model.model.CategoryModel;
import com.benkyousuru.pbl03api.model.service.ICategoryService;

@RestController
public class CategoryController {
    static final String basePath = "/api/category";

    @Autowired
    private ICategoryService categoryService;

    @GetMapping(basePath)
    public ResponseEntity<List<CategoryModel>> getAll() {
        return ResponseEntity.ok(categoryService.getAll());
    }

    @PostMapping(basePath)
    public String insert(@RequestBody CategoryModel model) {
        categoryService.insert(model);
        return "Saved";
    }
}
