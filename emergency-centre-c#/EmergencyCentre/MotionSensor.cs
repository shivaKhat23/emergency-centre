using System;
using EmergencyCentreDotNet.EmergencyCentre.Action;

namespace EmergencyCentreDotNet.EmergencyCentre;

public class MotionSensor(int id, Vendor vendor, List<IAction> actions, int minDistance, int maxDistance) : Sensor(id, vendor, actions)
{

    public int MinDistance { get; private set; } = minDistance;
    public int MaxDistance { get; private set; } = maxDistance;

    public override string ToString()
    {
        return base.ToString() + $"_(minDistance: {MinDistance}, maxDistance: {MaxDistance})";
    }

}
