package ru.nexusaqua.akinator.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@Data
public class Customer {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private String inn;
}
