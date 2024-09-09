using System;

namespace EmergencyCentreDotNet.EmergencyCentre;

public class MotionSensor(int id, Vendor vendor, List<Action> actions, int minDistance, int maxDistance) : Sensor(id, vendor, actions)
{

    public int MinDistance { get; private set; } = minDistance;
    public int MaxDistance { get; private set; } = maxDistance;

    public override bool Equals(object? obj)
    {
        return obj is MotionSensor sensor &&
               base.Equals(obj) &&
               MinDistance == sensor.MinDistance &&
               MaxDistance == sensor.MaxDistance;
    }

    public override int GetHashCode()
    {
        return HashCode.Combine(base.GetHashCode(), MinDistance, MaxDistance);
    }

    public override string ToString()
    {
        return base.ToString() + $"_(minDistance: {MinDistance}, maxDistance: {MaxDistance})";
    }



}
