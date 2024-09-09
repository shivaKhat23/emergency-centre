using EmergencyCentreDotNet.EmergencyCentre.Action;

namespace EmergencyCentreDotNet.EmergencyCentre;

public abstract class Sensor(int id, Vendor vendor, List<IAction> actions) : IComponent
{
    public int Id { get; private set; } = id;
    public Vendor Vendor { get; private set; } = vendor;
    public List<IAction> Actions { get; private set; } = actions;

    public void AddAction(IAction action)
    {
        if (Actions.Contains(action))
        {
            return;
        }
        Actions.Add(action);
    }

    public void RemoveAction(IAction action)
    {
        Actions.Remove(action);
    }

    public void Execute()
    {
        Console.WriteLine(this);
        Actions.ForEach(action => action.PerformAction());
    }

    public void PrintInfo()
    {
        Console.WriteLine($"""
            Sensor(id: {Id}, vendor: {Vendor}, type: {GetType().Name})
        """);
    }

    public override string ToString()
    {
        return $"Sensor(id: {Id}, vendor: {Vendor})";
    }
}
