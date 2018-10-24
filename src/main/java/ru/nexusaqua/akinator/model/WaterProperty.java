package ru.nexusaqua.akinator.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class WaterProperty {

        private String name;

        private String measure;

        private Double min;

        private Double max;

}
