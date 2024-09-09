using System;
using EmergencyCentreDotNet.EmergencyCentre.Action;

namespace EmergencyCentreDotNet.EmergencyCentre;

public class SmokeSensor(int id, Vendor vendor, List<IAction> actions, double sensitivity) : Sensor(id, vendor, actions)
{
    public double Sensitivity { get; private set; } = sensitivity;

    public override string ToString()
    {
        return base.ToString() + $"_(sensitivity: {Sensitivity})";
    }
}
