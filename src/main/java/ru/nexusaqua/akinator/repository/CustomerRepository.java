package ru.nexusaqua.akinator.repository;

import org.springframework.data.repository.CrudRepository;
import ru.nexusaqua.akinator.model.Customer;

import java.util.List;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {
    Iterable<Customer> findAllByNameContaining(String filter);
}
