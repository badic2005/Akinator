package ru.nexusaqua.akinator.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.nexusaqua.akinator.model.Product;
import ru.nexusaqua.akinator.model.WaterType;
import ru.nexusaqua.akinator.service.ProductService;
import ru.nexusaqua.akinator.service.WaterTypeService;

@CrossOrigin
@RestController
@RequestMapping("product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    private Boolean create(@RequestBody final Product product) {

        return productService.create(product);

    }
}
