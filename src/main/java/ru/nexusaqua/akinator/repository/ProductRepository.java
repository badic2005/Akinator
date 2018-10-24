package ru.nexusaqua.akinator.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import ru.nexusaqua.akinator.model.Product;

public interface ProductRepository extends MongoRepository<Product, String> {
}
