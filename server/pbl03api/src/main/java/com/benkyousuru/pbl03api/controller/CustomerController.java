package com.benkyousuru.pbl03api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.benkyousuru.pbl03api.model.model.CustomerModel;
import com.benkyousuru.pbl03api.model.service.Interface.ICustomerService;

@RestController
public class CustomerController {
    static final String basePath = "/api/customer";

    @Autowired
    private ICustomerService customerService;

    @GetMapping(basePath)
    public @ResponseBody List<CustomerModel> getAll() {
        return customerService.getAll();
    }

    @GetMapping(basePath + "/{id}")
    public @ResponseBody CustomerModel getById(@PathVariable Integer id) {
        Optional<CustomerModel> customer = customerService.getById(id);
        if(customer.isEmpty())
            return null;
        return customer.get();
    }

    @PostMapping(basePath)
    public String insert(@RequestBody CustomerModel model) {
        customerService.insert(model);
        return "Saved";
    }

    @PutMapping(basePath)
    public String update(@RequestBody CustomerModel model) {
        customerService.update(model);
        return "Saved";
    }

    @DeleteMapping(basePath)
    public String delete(@RequestBody CustomerModel model) {
        customerService.delete(model);
        return "Deleted";
    }

    @DeleteMapping(basePath + "/{id}")
    public String deleteById(@PathVariable Integer id) {
        customerService.deleteById(id);
        return "Deleted";
    }
}
