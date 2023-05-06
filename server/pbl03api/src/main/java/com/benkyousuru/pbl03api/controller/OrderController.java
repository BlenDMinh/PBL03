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

import com.benkyousuru.pbl03api.model.model.OrderModel;
import com.benkyousuru.pbl03api.model.service.IOrderService;

import jakarta.transaction.Transactional;

@RestController
@CrossOrigin(origins = "*")
public class OrderController {
    static final String basePath = "/api/order";

    @Autowired
    private IOrderService orderService;

    @GetMapping(basePath)
    public ResponseEntity<List<OrderModel>> getAll() {
        return ResponseEntity.ok(orderService.getAll());
    }

    @GetMapping(basePath + "/{id}")
    public ResponseEntity<OrderModel> getById(@PathVariable Integer id){
        Optional<OrderModel> order = orderService.getById(id);
        if (order.isEmpty())
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(order.get());
    }

    @PostMapping(basePath)
    public ResponseEntity<OrderModel> insert(@RequestBody OrderModel model) {
        try {
            return ResponseEntity.ok(orderService.insert(model));
        } catch (RuntimeException e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping(basePath)
    @Transactional
    public ResponseEntity<OrderModel> update(@RequestBody OrderModel model){
        try {
            return ResponseEntity.ok(orderService.update(model));
        } catch (RuntimeException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping(basePath)
    @Transactional
    public ResponseEntity<String> delete(@RequestBody OrderModel model) {
        try {
            orderService.delete(model);
            return ResponseEntity.ok("{\"message\": \"Deleted\"}");
        } catch (RuntimeException e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        
    }

    @DeleteMapping(basePath + "/{id}")
    @Transactional
    public ResponseEntity<String> deleteById(@PathVariable Integer id) {
        try {
            orderService.deleteById(id);
            return ResponseEntity.ok("{\"message\": \"Deleted\"}");
        } catch (RuntimeException e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        
    }

}
