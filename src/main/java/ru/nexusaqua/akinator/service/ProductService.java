package ru.nexusaqua.akinator.service;

import ru.nexusaqua.akinator.model.Product;

public interface ProductService {
    Boolean create(Product product);
    Product get(String id);
    Boolean update(Product product);
}
