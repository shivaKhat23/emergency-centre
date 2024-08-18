import { Evacuate, CallFireBrigade, CallPolice } from "./src/action";
import Composite from "./src/composite";
import { GasType } from "./src/gas-type";
import { Level } from "./src/level";
import MotionSensor from "./src/motion-sensor";
import Sensor from "./src/sensor";
import SmokeSensor from "./src/smoke-sensor";
import ToxicGasSensor from "./src/toxic-gas-sensor";
import { Vendor } from "./src/vendor";
import { sortBy } from "lodash";

const evacuate: Evacuate = new Evacuate();
const callFireBrigade: CallFireBrigade = new CallFireBrigade();
const callPolice: CallPolice = new CallPolice();

const building: Composite = new Composite(Level.BUILDING, "Building");
const floor1: Composite = new Composite(Level.FLOOR, "Floor 1");
const floor2: Composite = new Composite(Level.FLOOR, "Floor 2");
const room1a: Composite = new Composite(Level.ROOM, "Room 1a");
const room1b: Composite = new Composite(Level.ROOM, "Room 1b");
const room2a: Composite = new Composite(Level.ROOM, "Room 2a");
const room2b: Composite = new Composite(Level.ROOM, "Room 2b");

floor1.addChildren([room1a, room1b]);
floor2.addChildren([room2a, room2b]);
building.addChildren([floor1, floor2]);

const smokeSensor1: SmokeSensor = new SmokeSensor(
  1,
  Vendor.VENDOR1,
  [evacuate, callFireBrigade],
  1.5
);
const smokeSensor2: SmokeSensor = new SmokeSensor(
  2,
  Vendor.VENDOR2,
  [evacuate, callPolice],
  2.5
);
const smokeSensor3: SmokeSensor = new SmokeSensor(
  3,
  Vendor.VENDOR3,
  [evacuate, callPolice],
  3.5
);
const smokeSensor4: SmokeSensor = new SmokeSensor(
  4,
  Vendor.VENDOR4,
  [evacuate, callFireBrigade],
  4.5
);

const motionSensor1: MotionSensor = new MotionSensor(
  5,
  Vendor.VENDOR4,
  [callPolice],
  5,
  10
);
const motionSensor2: MotionSensor = new MotionSensor(
  6,
  Vendor.VENDOR3,
  [callPolice],
  6,
  20
);
const motionSensor3: MotionSensor = new MotionSensor(
  7,
  Vendor.VENDOR2,
  [callPolice],
  7,
  30
);
const motionSensor4: MotionSensor = new MotionSensor(
  8,
  Vendor.VENDOR1,
  [callPolice],
  8,
  40
);

const gasSensor1: ToxicGasSensor = new ToxicGasSensor(
  9,
  Vendor.VENDOR3,
  [evacuate],
  1.2,
  GasType.CARBON_MONOXIDE
);
const gasSensor2: ToxicGasSensor = new ToxicGasSensor(
  10,
  Vendor.VENDOR4,
  [evacuate, callPolice],
  2.2,
  GasType.AMMONIA
);
const gasSensor3: ToxicGasSensor = new ToxicGasSensor(
  11,
  Vendor.VENDOR1,
  [evacuate],
  3.2,
  GasType.CHLORINE
);
const gasSensor4: ToxicGasSensor = new ToxicGasSensor(
  12,
  Vendor.VENDOR2,
  [evacuate, callFireBrigade],
  4.2,
  GasType.CHLORINE
);

const buildingSensor: MotionSensor = new MotionSensor(
  0,
  Vendor.VENDOR4,
  [evacuate, callFireBrigade],
  9,
  50
);

building.addChildren([floor1, floor2, buildingSensor]);
floor1.addChildren([room1a, room1b]);
floor2.addChildren([room2a, room2b]);
room1a.addChildren([smokeSensor1, motionSensor1, gasSensor1]);
room1b.addChildren([smokeSensor2, motionSensor2, gasSensor2]);
room2a.addChildren([smokeSensor3, motionSensor3, gasSensor3]);
room2b.addChildren([smokeSensor4, motionSensor4, gasSensor4]);

// execute the actions
building.execute();

// get all Sensors;
const sensors = building.getSensors();

// sort sensors by id
console.log("sorting sensors by id");
console.log("====================================");
sortBy(sensors, (sensor) => sensor.getId()).forEach((sensor) =>
  sensor.printInfo()
);

// sort sensors by vendor and then by id
console.log("sorting sensors by vendor and then by id");
console.log("====================================");
sortBy(sensors, [
  (sensor) => sensor.getVendor(),
  (sensor) => sensor.getId(),
]).forEach((sensor) => sensor.printInfo());

// sort sensors by type and then by vendor and then by id
console.log("sorting sensors by type and then by vendor and then by id");
console.log("====================================");
sortBy(sensors, [
  (sensor) => sensor.constructor.name,
  (sensor) => sensor.getVendor(),
  (sensor) => sensor.getId(),
]).forEach((sensor) => sensor.printInfo());
