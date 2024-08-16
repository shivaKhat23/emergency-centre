package com.shiva.emergencycenter;

import java.util.List;
import java.util.Objects;

public class SmokeSensor extends Sensor {

    private final Double sensitivity;

    public SmokeSensor(Integer id, Vendor vendor, List<Action> actions, Double sensitivity) {
        super(id, vendor, actions);
        this.sensitivity = sensitivity;
    }

    public Double getSensitivity() {
        return sensitivity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        SmokeSensor that = (SmokeSensor) o;
        return Objects.equals(sensitivity, that.sensitivity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), sensitivity);
    }

    @Override
    public String toString() {
        return "SmokeSensor{" +
                "sensitivity=" + sensitivity +
                "} " + super.toString();
    }
}
