package com.benkyousuru.pbl03api.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.benkyousuru.pbl03api.model.model.ProductModel;
import com.benkyousuru.pbl03api.model.service.IProductService;

import jakarta.transaction.Transactional;

@RestController
@CrossOrigin(origins = "*")
public class ProductController {
    static final String basePath = "/api/product";

    @Autowired
    private IProductService productService;

    @GetMapping(basePath)
    public ResponseEntity<List<ProductModel>> getAll(@RequestParam(name = "category", required = false) Integer categoryId, @RequestParam Integer pageNum, @RequestParam Integer pageSize) {
        if(categoryId == null)
            return ResponseEntity.ok().body(productService.getAll(pageNum, pageSize));
        return ResponseEntity.ok().body(productService.getByCategory(categoryId, pageNum, pageSize));
    }

    @GetMapping(basePath + "/{id}")
    public ResponseEntity<ProductModel> getById(@PathVariable Integer id){
        Optional<ProductModel> product = productService.getById(id);
        if (product.isEmpty())
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(product.get());
    }

    @PostMapping(basePath)
    public ResponseEntity<ProductModel> insert(@RequestBody ProductModel model) {
        try {
            return ResponseEntity.ok(productService.insert(model));
        } catch(RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping(basePath)
    @Transactional
    public ResponseEntity<ProductModel> update(@RequestBody ProductModel model){
        try {
            return ResponseEntity.ok(productService.update(model));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
        
    }

    @DeleteMapping(basePath)
    @Transactional
    public ResponseEntity<String> delete(@RequestBody ProductModel model) {
        try {
            productService.delete(model);
            return ResponseEntity.ok("{\"message\": \"Deleted\"}");
        } catch (RuntimeException e) {
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping(basePath + "/{id}")
    @Transactional
    public ResponseEntity<String> deleteById(@PathVariable Integer id) {
        try {
            productService.deleteById(id);
            return ResponseEntity.ok("{\"message\": \"Deleted\"}");
        } catch (RuntimeException e) {
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }        
    }

    @GetMapping(value = basePath + "/image/{id}", produces = MediaType.IMAGE_JPEG_VALUE)
    public @ResponseBody byte[] getProductImage(@PathVariable Integer id) throws IOException {
        return productService.getImageById(id);
    }
}
