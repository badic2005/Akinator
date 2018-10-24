package ru.nexusaqua.akinator.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import ru.nexusaqua.akinator.model.Customer;

import java.util.List;

public interface CustomerRepository extends MongoRepository<Customer, String> {
    Iterable<Customer> findAllByNameContaining(String filter);
}
