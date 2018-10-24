package ru.nexusaqua.akinator.service;

import ru.nexusaqua.akinator.model.WaterType;

public interface WaterTypeService {
    Boolean create(WaterType waterType);
    WaterType get(String id);
    Boolean update(WaterType waterType);
}
