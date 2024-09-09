
using EmergencyCentreDotNet.EmergencyCentre;

Action evacuate = () => Console.WriteLine("Evacuate the building!!!!");
Action callPolice = () => Console.WriteLine("Call the Police!!!!");
Action callFireBrigade = () => Console.WriteLine("Call the Fire Brigade!!!!");

Composite building1 = new("Building1", Level.BUILDING);
Composite floor1 = new("Floor1", Level.FLOOR);
Composite floor2 = new("Floor2", Level.FLOOR);
Composite room1a = new("Room1a", Level.ROOM);
Composite room1b = new("Room1b", Level.ROOM);
Composite room2a = new("Room2a", Level.ROOM);
Composite room2b = new("Room2b", Level.ROOM);

SmokeSensor smokeSensor1 = new(1, Vendor.VENDOR1, [evacuate, callFireBrigade], 1.5);
SmokeSensor smokeSensor2 = new(2, Vendor.VENDOR2, [evacuate, callFireBrigade], 2.5);
SmokeSensor smokeSensor3 = new(3, Vendor.VENDOR3, [evacuate, callFireBrigade], 3.5);
SmokeSensor smokeSensor4 = new(4, Vendor.VENDOR4, [evacuate, callFireBrigade], 4.5);

MotionSensor motionSensor1 = new(5, Vendor.VENDOR4, [callPolice], 5, 10);
MotionSensor motionSensor2 = new(6, Vendor.VENDOR3, [callPolice], 5, 10);
MotionSensor motionSensor3 = new(7, Vendor.VENDOR2, [callPolice], 5, 10);
MotionSensor motionSensor4 = new(8, Vendor.VENDOR1, [callPolice], 5, 10);

ToxicGasSensor gasSensor1 = new(9, Vendor.VENDOR3, [evacuate], 1.1, GasType.CARBON_MONOXIDE);
ToxicGasSensor gasSensor2 = new(10, Vendor.VENDOR4, [evacuate, callPolice], 1.1, GasType.CHLORINE);
ToxicGasSensor gasSensor3 = new(11, Vendor.VENDOR1, [evacuate], 1.1, GasType.CARBON_MONOXIDE);
ToxicGasSensor gasSensor4 = new(12, Vendor.VENDOR2, [evacuate, callFireBrigade], 1.1, GasType.AMMONIA);

MotionSensor buildingSensor = new(0, Vendor.VENDOR1, [callPolice], 10, 30);

building1.Add([floor1, floor2, buildingSensor]);
floor1.Add([room1a, room1b]);
floor2.Add([room2a, room2b]);
room1a.Add([smokeSensor1, motionSensor1, gasSensor1]);
room1b.Add([smokeSensor2, motionSensor2, gasSensor2]);
room2a.Add([smokeSensor3, motionSensor3, gasSensor3]);
room2b.Add([smokeSensor4, motionSensor4, gasSensor4]);

//test Actions
building1.Execute();

