package com.shiva.emergencycenter;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Composite implements Component {

    private final String name;
    private final Level level;

    private List<Component> children;

    public Composite(String name, Level level) {
        this.name = name;
        this.level = level;
    }

    public List<Component> getChildren() {
        if (children == null) {
            children = new ArrayList<>();
        }
        return children;
    }

    public void add(Component component) {
        if (getChildren().contains(component)) {
            return;
        }
        getChildren().add(component);
    }

    public void add(List<Component> components) {
        components.forEach(this::add);
    }

    public void remove(Component component) {
        getChildren().remove(component);
    }

    public List<Sensor> getAllSensors() {
        List<Sensor> sensors = new ArrayList<>();
        for (Component component : getChildren()) {
            if (component instanceof Sensor s) {
                sensors.add(s);
            }
            if (component instanceof Composite c) {
                sensors.addAll(c.getAllSensors());
            }
        }
        return sensors;
    }



    @Override
    public void execute() {
        System.out.println(this);
        getChildren().forEach(Component::execute);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Composite composite = (Composite) o;
        return Objects.equals(name, composite.name) && level == composite.level;
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, level);
    }

    @Override
    public String toString() {
        return "Composite{" +
                "name='" + name + '\'' +
                ", level=" + level +
                '}';
    }
}
