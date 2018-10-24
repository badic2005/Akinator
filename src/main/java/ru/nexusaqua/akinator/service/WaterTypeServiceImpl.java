package ru.nexusaqua.akinator.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.nexusaqua.akinator.model.WaterType;
import ru.nexusaqua.akinator.repository.WaterTypeRepository;

@Service
public class WaterTypeServiceImpl implements WaterTypeService {

    @Autowired
    private WaterTypeRepository waterTypeRepository;

    @Override
    public Boolean create(WaterType waterType) {

        if(waterTypeRepository.existsById(waterType.getName())) {
            return false;
        }

        waterTypeRepository.save(waterType);

        return true;
    }

    @Override
    public WaterType get(String id) {
        return null;
    }

    @Override
    public Boolean update(WaterType waterType) {
        return null;
    }
}
