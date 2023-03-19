package com.benkyousuru.pbl03api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
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
        return ResponseEntity.of(Optional.of(customerService.getAll()));
    }

    @GetMapping(basePath + "/{id}")
    public ResponseEntity<CustomerModel> getById(@PathVariable Integer id) {
        Optional<CustomerModel> customer = customerService.getById(id);
        if(customer.isEmpty())
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(customer.get());
    }

    @PostMapping(basePath)
    public String insert(@RequestBody CustomerModel model, @RequestBody String password) {
        customerService.insert(model);
        System.out.println(password);
        return "Saved";
    }

    @PutMapping(basePath)
    @Transactional
    public String update(@RequestBody CustomerModel model) {
        customerService.update(model);
        customerService.setPassword(1, "aaa");
        return "Saved";
    }

    @DeleteMapping(basePath)
    @Transactional
    public String delete(@RequestBody CustomerModel model) {
        customerService.delete(model);
        return "Deleted";
    }

    @DeleteMapping(basePath + "/{id}")
    @Transactional
    public String deleteById(@PathVariable Integer id) {
        customerService.deleteById(id);
        return "Deleted";
    }
}
