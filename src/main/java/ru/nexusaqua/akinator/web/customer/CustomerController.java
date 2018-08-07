package ru.nexusaqua.akinator.web.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.nexusaqua.akinator.model.Customer;
import ru.nexusaqua.akinator.repository.CustomerRepository;

import java.util.Map;

@RestController
@RequestMapping("customers")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping
    public  Iterable<Customer> getAll(@RequestParam(required = false) String filter, Model model) {
        // This returns a JSON or XML with the users
        Iterable<Customer> customers;

        if(filter != null && !filter.isEmpty()) {
            customers = customerRepository.findAllByNameContaining(filter);
        } else {
            customers = customerRepository.findAll();
        }

        model.addAttribute("customers", customers);
        model.addAttribute("filter", filter);

        return customers;
    }

    @GetMapping("{id}")
    public  Customer get(@PathVariable String id, @RequestParam(required = false) String filter, Model model) {
        // This returns a JSON or XML with the users

        Customer customer = customerRepository.findById(Integer.parseInt(id)).orElse(null);

        return customer;
    }

    @PostMapping("/customers")
    public Customer create(@RequestParam String name, @RequestParam String inn, Map<String, Object> model) {

        Customer customer = new Customer(name, inn);
        customerRepository.save(customer);

        //model.put("customers", customers);
        return customer;
    }

    @PutMapping("{id}")
    public Customer update(@PathVariable(required = true) String id, Map<String, Object> model) {

        Integer idInteger = Integer.parseInt(id);
        Customer customer = null;
        if(customerRepository.existsById(idInteger)) {

            customer = customerRepository.findById(Integer.parseInt(id)).orElse(null);
            customerRepository.save(customer);
        }


        return customer;
    }

    @DeleteMapping("{id}")
    public void remove(@PathVariable(required = true) String id) {
        if(!id.equals("")) {

            Integer idInteger = Integer.parseInt(id);
            if(customerRepository.existsById(idInteger)) {
                customerRepository.deleteById(idInteger);
            }
        }
    }
}
