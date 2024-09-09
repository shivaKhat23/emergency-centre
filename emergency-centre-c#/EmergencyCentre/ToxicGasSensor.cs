namespace EmergencyCentreDotNet.EmergencyCentre;

public class ToxicGasSensor(int id, Vendor vendor, List<Action> actions, double concentration, GasType gasType) : Sensor(id, vendor, actions)
{
    public double Concentration { get; private set; } = concentration;
    public GasType GasType { get; private set; } = gasType;

    public override bool Equals(object? obj)
    {
        return obj is ToxicGasSensor sensor &&
               base.Equals(obj) &&
               Concentration == sensor.Concentration &&
               GasType == sensor.GasType;
    }

    public override int GetHashCode()
    {
        return HashCode.Combine(base.GetHashCode(), Concentration, GasType);
    }

    public override string ToString()
    {
        return base.ToString() + $"_(concentration: {Concentration}, gasType: {GasType})";
    }


}
