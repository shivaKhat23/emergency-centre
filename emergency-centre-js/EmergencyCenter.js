const { MotionSensor } = require("./MotionSensor");
const { ToxicGasSensor } = require("./ToxicGasSensor");
const { SmokeSensor } = require("./SmokeSensor");
const { Composite } = require("./Composite");
const { CallPolice, Evacuate, Alarm } = require("./actions");

const callPolice = new CallPolice();
const evacuate = new Evacuate();
const alarm = new Alarm();

const motionSensorVendor1 = new MotionSensor(1, "vendor_1", [callPolice, alarm], 0.1, 0.5);
const toxicGasSensorVendor1 = new ToxicGasSensor(3, "vendor_1", [evacuate, alarm], 2.0);
const smokeSensorVendor2 = new SmokeSensor(2, "vendor_2", [alarm], 3.2);

const room1 = new Composite("room1", [toxicGasSensorVendor1, smokeSensorVendor2]);
const room2 = new Composite("room2", [motionSensorVendor1]);
const room3 = new Composite("room3", [toxicGasSensorVendor1, motionSensorVendor1]);
const level1 = new Composite("level1", [room1, room2]);
const level2 = new Composite("level2", [room3]);

const building1 = new Composite("building1", [level1, level2]);

building1.activate();

console.log("\n");
console.log("listing all sensors .....");
building1
  .getSensors()
  .sort((a, b) => {
    if (a.vendor == b.vendor) {
      return a.id - b.id;
    }
    return a.vendor > b.vendor ? 1 : -1;
  })
  .forEach((s) => console.log(s.toString()));
