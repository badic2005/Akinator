package ru.nexusaqua.akinator.model;

public class NameEntity extends BaseEntity {

    protected String name;

    public NameEntity() {

    }

    public NameEntity(Integer id, String name) {
        super(id);
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "NameEntity{" +
                "name='" + name + '\'' +
                '}';
    }
}
