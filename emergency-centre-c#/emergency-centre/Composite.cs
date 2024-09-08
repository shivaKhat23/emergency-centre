namespace EmergencyCentre;
class Composite(string name, Level level) : IComponent
{
    private readonly string name = name;
    private readonly Level level = level;

    private readonly List<IComponent> children = [];

    public void Add(List<IComponent> components)
    {
        foreach (var component in components)
        {
            Add(component);
        }
    }

    public void Add(IComponent component)
    {
        if (children.Contains(component))
        {
            return;
        }
        children.Add(component);
    }

    public void Remove(IComponent component)
    {
        children.Remove(component);
    }

    public List<IComponent> GetChildren()
    {
        return children;
    }

    public override string ToString()
    {
        return $"Composite{{name='{name}', level={level}}}";
    }

    public void Execute()
    {
        Console.WriteLine(this);
        GetChildren().ForEach(component => component.Execute());
    }
}
