package ru.nexusaqua.akinator.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class WaterType {

    @Id
    @GeneratedValue
    private String id;

    private String name;

    @OneToMany(mappedBy = "waterType")
    private Set<WaterProperty> properties;
}
