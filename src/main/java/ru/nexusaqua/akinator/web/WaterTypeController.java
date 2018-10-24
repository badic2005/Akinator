package ru.nexusaqua.akinator.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.nexusaqua.akinator.model.WaterType;
import ru.nexusaqua.akinator.repository.WaterTypeRepository;
import ru.nexusaqua.akinator.service.WaterTypeService;

@CrossOrigin
@RestController
@RequestMapping("water")
public class WaterTypeController {

    @Autowired
    private WaterTypeService waterTypeService;

    @PostMapping
    private Boolean create(@RequestBody final WaterType waterType) {

        return waterTypeService.create(waterType);

    }
}
