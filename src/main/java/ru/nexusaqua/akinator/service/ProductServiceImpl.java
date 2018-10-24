package ru.nexusaqua.akinator.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.nexusaqua.akinator.model.Product;
import ru.nexusaqua.akinator.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Boolean create(Product product) {

        if(productRepository.existsById(product.getName())) {
            return false;
        }

        productRepository.save(product);

        return true;
    }

    @Override
    public Product get(String id) {
        return null;
    }

    @Override
    public Boolean update(Product product) {
        return null;
    }
}
