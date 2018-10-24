package ru.nexusaqua.akinator.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jmx.export.annotation.ManagedAttribute;
import org.springframework.jmx.export.annotation.ManagedResource;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.nexusaqua.akinator.model.Customer;
import ru.nexusaqua.akinator.repository.CustomerRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@ManagedResource
@CrossOrigin
@RestController
@RequestMapping("customers")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    private boolean logEnable;

    private Logger logger = LoggerFactory.getLogger(CustomerController.class);

    @GetMapping
    @ResponseBody
    public Iterable<Customer> get(@RequestParam(required = false) final String filter) {
        // This returns a JSON or XML with the users
        Iterable<Customer> customers;

        if(filter != null && !filter.isEmpty()) {
            customers = customerRepository.findAllByNameContaining(filter);
        } else {
            customers = customerRepository.findAll();
        }

        return customers;
    }

    @GetMapping("/{id}")
    public Customer getCustomer(@PathVariable String id) {
        if(!id.equals("")) {
            Customer customer = customerRepository.findById(id).orElse(null);
            return customer;
        }

        return null;
    }

    @PostMapping
    public Customer create(@RequestBody final Customer customer) {
        customerRepository.save(customer);

        if(logEnable) {
            logger.info("POST - customer "+customer+" was created");
        }

        return customer;
    }

    @PutMapping("/{id}")
    public boolean update(@PathVariable int id, @RequestBody final Customer customer) {
        customerRepository.save(customer);
        return true;
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable String id) {

        customerRepository.deleteById(id);

    }

    @ManagedAttribute
    public boolean isLogEnable() {
        return logEnable;
    }

    @ManagedAttribute
    public void setLogEnable(boolean logEnable) {
        this.logEnable = logEnable;
    }
}
