package ru.nexusaqua.akinator.web.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.nexusaqua.akinator.model.Customer;
import ru.nexusaqua.akinator.repository.CustomerRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("customers")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping
    @ResponseBody
    public Iterable<Customer> get(@RequestParam(required = false) final String filter) {
        // This returns a JSON or XML with the users
        Iterable<Customer> customers = new ArrayList<>();

        if(filter != null && !filter.isEmpty()) {
            customers = customerRepository.findAllByNameContaining(filter);
        }

        return customers;
    }

    @PostMapping
    @ResponseBody
    public Customer create(@RequestBody final Customer customer) {

        customerRepository.save(customer);
        return customer;
    }

    @PutMapping
    @ResponseBody
    public Customer update(@RequestBody final Customer customer) {

        customerRepository.save(customer);
        return customer;
    }

    @DeleteMapping
    public void remove(@RequestBody(required = true) final Customer customer) {

        customerRepository.delete(customer);

    }
}
