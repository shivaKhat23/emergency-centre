namespace EmergencyCentreDotNet.EmergencyCentre;

public class SmokeSensor(int id, Vendor vendor, List<Action> actions, double sensitivity) : Sensor(id, vendor, actions)
{
    public double Sensitivity { get; private set; } = sensitivity;

    public override bool Equals(object? obj)
    {
        return obj is SmokeSensor sensor &&
               base.Equals(obj) &&
               Sensitivity == sensor.Sensitivity;
    }

    public override int GetHashCode()
    {
        return HashCode.Combine(base.GetHashCode(), Sensitivity);
    }

    public override string ToString()
    {
        return base.ToString() + $"_(sensitivity: {Sensitivity})";
    }


}
