using System;
using EmergencyCentreDotNet.EmergencyCentre.Action;

namespace EmergencyCentreDotNet.EmergencyCentre;

public class ToxicGasSensor(int id, Vendor vendor, List<SensorAction> actions, double concentration, GasType gasType) : Sensor(id, vendor, actions)
{
    public double Concentration { get; private set; } = concentration;
    public GasType GasType { get; private set; } = gasType;

    public override string ToString()
    {
        return base.ToString() + $"_(concentration: {Concentration}, gasType: {GasType})";
    }
}
