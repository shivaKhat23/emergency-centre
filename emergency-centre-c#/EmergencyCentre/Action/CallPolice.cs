using System;

namespace EmergencyCentreDotNet.EmergencyCentre.Action;

public class CallPolice : IAction
{
    public void PerformAction()
    {
        Console.WriteLine("Call the Police!!!!");
    }
}
