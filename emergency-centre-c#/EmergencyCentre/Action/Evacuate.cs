using System;

namespace EmergencyCentreDotNet.EmergencyCentre.Action;

public class Evacuate : IAction
{
    public void PerformAction()
    {
        Console.WriteLine("Evacuate the building!!!");
    }
}
