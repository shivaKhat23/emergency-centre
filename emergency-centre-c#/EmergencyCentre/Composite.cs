
namespace EmergencyCentreDotNet.EmergencyCentre;
class Composite(string name, Level level) : IComponent
{
    public string Name { get; private set; } = name;
    public Level Level { get; private set; } = level;

    public List<IComponent> Children { get; private set; } = [];

    public void Add(List<IComponent> components)
    {
        foreach (var component in components)
        {
            Add(component);
        }
    }

    public void Add(IComponent component)
    {
        if (Children.Contains(component))
        {
            return;
        }
        Children.Add(component);
    }

    public void Remove(IComponent component)
    {
        Children.Remove(component);
    }

    public HashSet<Sensor> GetSensors()
    {
        HashSet<Sensor> sensors = [];
        foreach (var child in Children)
        {
            if (child is Sensor s)
            {
                sensors.Add(s);
            }
            else if (child is Composite c)
            {
                sensors.UnionWith(c.GetSensors());
            }
        }
        return sensors;
    }

    public override string ToString()
    {
        return $"Composite{{name='{Name}', level={Level}}}";
    }

    public void Execute()
    {
        Console.WriteLine(this);
        Children.ForEach(component => component.Execute());
    }

    public override bool Equals(object? obj)
    {
        return obj is Composite composite &&
               Name == composite.Name &&
               Level == composite.Level;
    }

    public override int GetHashCode()
    {
        return HashCode.Combine(Name, Level);
    }
}
