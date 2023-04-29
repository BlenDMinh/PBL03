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
import com.benkyousuru.pbl03api.model.model.LoginRequest;
import com.benkyousuru.pbl03api.model.model.LoginResponse;
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

    @PostMapping(basePath + "/login")
    @Transactional
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        LoginResponse response = customerService.login(request);
        if(response == null)
            return ResponseEntity.badRequest().build();
        return ResponseEntity.ok(response);
    }

    @PostMapping(basePath)
    public ResponseEntity<String> insert(@RequestBody CustomerModel model) {
        try {
            customerService.insert(model);
            return ResponseEntity.ok("Saved");
        } catch (RuntimeException e) {
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        
    }

    @PutMapping(basePath)
    @Transactional
    public ResponseEntity<String> update(@RequestBody CustomerModel model) {
        try {
            customerService.update(model);
            return ResponseEntity.ok("Saved");
        } catch (RuntimeException e) {
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        
    }

    @DeleteMapping(basePath)
    @Transactional
    public ResponseEntity<String> delete(@RequestBody CustomerModel model) {
        try {
            customerService.delete(model);
            return ResponseEntity.ok("Deleted");
        } catch (RuntimeException e) {
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        
    }

    @DeleteMapping(basePath + "/{id}")
    @Transactional
    public ResponseEntity<String> deleteById(@PathVariable Integer id) {
        try {
            customerService.deleteById(id);
            return ResponseEntity.ok("Deleted");
        } catch (RuntimeException e) {
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        
    }

    @PostMapping(basePath + "/{id}/change_password")
    @Transactional
    public String changePassword(@PathVariable Integer id, @RequestBody String password) {
        customerService.setPassword(id, password);
        return "Changed";
    }
}
