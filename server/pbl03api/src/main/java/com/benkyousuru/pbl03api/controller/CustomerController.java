package com.benkyousuru.pbl03api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.benkyousuru.pbl03api.model.model.CustomerModel;
import com.benkyousuru.pbl03api.model.service.ICustomerService;

@RestController
@CrossOrigin(origins = "*")
public class CustomerController {
    static final String basePath = "/api/customer";

    @Autowired
    private ICustomerService customerService;

    // @GetMapping(basePath)
    // public @ResponseBody List<CustomerModel> getAll() {
    //     return customerService.getAll();
    // }

    @GetMapping(basePath)
    public ResponseEntity<List<CustomerModel>> getAll() {
        return ResponseEntity.ok(customerService.getAll());
    }

    @GetMapping(basePath + "/{id}")
    public ResponseEntity<CustomerModel> getById(@PathVariable Integer id) {
        Optional<CustomerModel> customer = customerService.getById(id);
        if(customer.isEmpty())
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(customer.get());
    }

    @PostMapping(basePath)
    public ResponseEntity<CustomerModel> insert(@RequestBody CustomerModel model) {
        try {
            return ResponseEntity.ok(customerService.insert(model));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
        
    }

    @PutMapping(basePath)
    @Transactional
    public ResponseEntity<CustomerModel> update(@RequestBody CustomerModel model) {
        try {
            return ResponseEntity.ok(customerService.update(model));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping(basePath)
    @Transactional
    public ResponseEntity<String> delete(@RequestBody CustomerModel model) {
        try {
            customerService.delete(model);
            return ResponseEntity.ok("{\"message\": \"Deleted\"}");
        } catch (RuntimeException e) {
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        
    }

    @DeleteMapping(basePath + "/{id}")
    @Transactional
    public ResponseEntity<String> deleteById(@PathVariable Integer id) {
        try {
            customerService.deleteById(id);
            return ResponseEntity.ok("{\"message\": \"Deleted\"}");
        } catch (RuntimeException e) {
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        
    }
}
