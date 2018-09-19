package ru.nexusaqua.akinator.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class WaterProperty {

        @Id
        @GeneratedValue
        private String id;

        private String name;

        private String measure;

        private Double min;

        private Double max;

        @ManyToOne
        private WaterType waterType;

}
