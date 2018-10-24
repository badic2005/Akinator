package ru.nexusaqua.akinator.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import ru.nexusaqua.akinator.model.WaterType;

public interface WaterTypeRepository extends MongoRepository<WaterType, String> {
}
