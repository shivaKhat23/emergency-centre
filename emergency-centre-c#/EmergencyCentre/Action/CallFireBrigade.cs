using System;

namespace EmergencyCentreDotNet.EmergencyCentre.Action;

public class CallFireBrigade : IAction
{
    public void PerformAction()
    {
        Console.WriteLine("Call the Fire Brigade!!!!");
    }
}
