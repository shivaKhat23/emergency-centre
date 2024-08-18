package com.shiva.emergencycenter;

import java.util.List;
import java.util.Objects;

public class ToxicGasSensor extends Sensor {
    private final Double concentration;
    private final GasType gasType;

    public ToxicGasSensor(Integer id, Vendor vendor, List<Action> actions, Double concentration, GasType gasType) {
        super(id, vendor, actions);
        this.concentration = concentration;
        this.gasType = gasType;
    }

    public Double getConcentration() {
        return concentration;
    }

    public GasType getGasType() {
        return gasType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        ToxicGasSensor that = (ToxicGasSensor) o;
        return Objects.equals(concentration, that.concentration) && gasType == that.gasType;
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), concentration, gasType);
    }

    @Override
    public String toString() {
        return "ToxicGasSensor{" +
                "Concentration=" + concentration +
                ", gasType=" + gasType +
                "} " + super.toString();
    }
}
