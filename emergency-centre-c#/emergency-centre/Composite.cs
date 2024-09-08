namespace emergency_centre
{
    internal class Composite
    {
        private string name { get; }
        private Level level { get; }

        private List<Component> components = new List<Component>();
        public Composite(string name, Level level)
        {
            this.name = name;
            this.level = level;
        }

        public void Add(List<Component> components)
        {
            foreach(var component in components)
            {
                components.Add(component);
            }
        }

        public void Add(Component component)
        {
            if (!components.Contains(component))
            {
                components.Add(component);
            }
        }
    }
}
