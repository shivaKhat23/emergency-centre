package com.shiva.emergencycenter;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public abstract class Sensor implements Component {

    private final Integer id;
    private final Vendor vendor;
    private List<Action> actions;

    public Sensor(Integer id, Vendor vendor, List<Action> actions) {
        this.id = id;
        this.vendor = vendor;
        this.actions = actions;
    }

    public Integer getId() {
        return id;
    }

    public Vendor getVendor() {
        return vendor;
    }

    public List<Action> getActions() {
        if (actions == null) {
            actions = new ArrayList<>();
        }
        return actions;
    }

    public void addAction(Action action) {
        if (actions.contains(action)) {
            return;
        }
        actions.add(action);
    }

    public void removeAction(Action action) {
        actions.remove(action);
    }

    public void setActions(List<Action> actions) {
        this.actions = actions;
    }

    @Override
    public void execute() {
        System.out.println(this);
        getActions().forEach(Action::performAction);
    }

    public void printInfo() {
        System.out.println("Sensor{" +
                "id=" + id +
                ", vendor=" + vendor +
                ", type=" + this.getClass().getSimpleName() +
                '}');
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Sensor sensor = (Sensor) o;
        return Objects.equals(id, sensor.id) && vendor == sensor.vendor;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, vendor);
    }

    @Override
    public String toString() {
        return "Sensor{" +
                "id=" + id +
                ", vendor=" + vendor +
                '}';
    }
}
