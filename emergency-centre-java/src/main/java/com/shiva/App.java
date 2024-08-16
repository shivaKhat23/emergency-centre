package com.shiva;

import com.shiva.emergencycenter.*;

import java.util.Comparator;
import java.util.List;

public class App {
    public static void main(String[] args) {

        Action evacuate = () -> System.out.println("Evacuate the building!!!!");
        Action callPolice = () -> System.out.println("Call the Police!!!!");
        Action callFireBrigade = () -> System.out.println("Call the Fire Brigade!!!!");


        Composite building1 = new Composite("Building1", Level.BUILDING);
        Composite floor1 = new Composite("Floor1", Level.FLOOR);
        Composite floor2 = new Composite("Floor2", Level.FLOOR);
        Composite room1a = new Composite("Room1a", Level.ROOM);
        Composite room1b = new Composite("Room1b", Level.ROOM);
        Composite room2a = new Composite("Room2a", Level.ROOM);
        Composite room2b = new Composite("Room2b", Level.ROOM);

        SmokeSensor smokeSensor1 = new SmokeSensor(1, Vendor.VENDOR1, List.of(evacuate, callFireBrigade), 1.5);
        SmokeSensor smokeSensor2 = new SmokeSensor(2, Vendor.VENDOR2, List.of(evacuate, callFireBrigade), 2.5);
        SmokeSensor smokeSensor3 = new SmokeSensor(3, Vendor.VENDOR3, List.of(evacuate, callFireBrigade), 3.5);
        SmokeSensor smokeSensor4 = new SmokeSensor(4, Vendor.VENDOR4, List.of(evacuate, callFireBrigade), 4.5);

        MotionSensor motionSensor1 = new MotionSensor(5, Vendor.VENDOR4, List.of(callPolice), 5, 10);
        MotionSensor motionSensor2 = new MotionSensor(6, Vendor.VENDOR3, List.of(callPolice), 5, 10);
        MotionSensor motionSensor3 = new MotionSensor(7, Vendor.VENDOR2, List.of(callPolice), 5, 10);
        MotionSensor motionSensor4 = new MotionSensor(8, Vendor.VENDOR1, List.of(callPolice), 5, 10);

        ToxicGasSensor gasSensor1 = new ToxicGasSensor(9, Vendor.VENDOR3, List.of(evacuate), 1.1, GasType.CARBON_MONOXIDE);
        ToxicGasSensor gasSensor2 = new ToxicGasSensor(10, Vendor.VENDOR4, List.of(evacuate, callPolice), 1.1, GasType.CHLORINE);
        ToxicGasSensor gasSensor3 = new ToxicGasSensor(11, Vendor.VENDOR1, List.of(evacuate), 1.1, GasType.CARBON_MONOXIDE);
        ToxicGasSensor gasSensor4 = new ToxicGasSensor(12, Vendor.VENDOR2, List.of(evacuate, callFireBrigade), 1.1, GasType.AMMONIA);

        MotionSensor buildingSensor = new MotionSensor(0, Vendor.VENDOR1, List.of(callPolice), 10, 30);

        building1.add(List.of(floor1, floor2, buildingSensor));
        floor1.add(List.of(room1a, room1b));
        floor2.add(List.of(room2a, room2b));
        room1a.add(List.of(smokeSensor1, motionSensor1, gasSensor1));
        room1b.add(List.of(smokeSensor2, motionSensor2, gasSensor2));
        room2a.add(List.of(smokeSensor3, motionSensor3, gasSensor3));
        room2b.add(List.of(smokeSensor4, motionSensor4, gasSensor4));

        //test Actions
        building1.execute();

        // Collecting and printing sensors
        List<Sensor> sensors = building1.getAllSensors();

        // comparators
        Comparator<Sensor> compareById = Comparator.comparingInt(Sensor::getId);
        Comparator<Sensor> compareByVendor = Comparator.comparing(s -> s.getVendor().getName());
        Comparator<Sensor> compareByType = Comparator.comparing(s -> s.getClass().getSimpleName());

        List<Sensor> sensorsSortedById = sensors.stream()
                .sorted(compareById)
                .toList();

        List<Sensor> sensorsSortedByVendorAndId = sensors.stream()
                .sorted(compareByVendor.thenComparing(compareById))
                .toList();

        List<Sensor> sensorsSortedByTypeAndVendorAndId = sensors.stream()
                .sorted(compareByType.thenComparing(compareByVendor).thenComparing(compareById))
                .toList();

        System.out.println("Sensors: Sorted by Id");
        sensorsSortedById.forEach(Sensor::printInfo);

        System.out.println("\n");
        System.out.println("Sensors: Sorted by vendor then Id");
        sensorsSortedByVendorAndId.forEach(Sensor::printInfo);

        System.out.println("\n");
        System.out.println("Sensors: Sorted by type then vendor then Id");
        sensorsSortedByTypeAndVendorAndId.forEach(Sensor::printInfo);
    }
}
