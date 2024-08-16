package com.shiva.emergencycenter;

import java.util.List;
import java.util.Objects;

public class MotionSensor extends Sensor {

    private final Integer minDistance;
    private final Integer maxDistance;

    public MotionSensor(Integer id, Vendor vendor, List<Action> actions, Integer minDistance, Integer maxDistance) {
        super(id, vendor, actions);
        this.minDistance = minDistance;
        this.maxDistance = maxDistance;
    }

    public Integer getMinDistance() {
        return minDistance;
    }

    public Integer getMaxDistance() {
        return maxDistance;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        MotionSensor that = (MotionSensor) o;
        return Objects.equals(minDistance, that.minDistance) && Objects.equals(maxDistance, that.maxDistance);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), minDistance, maxDistance);
    }


}
