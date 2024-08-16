const { Sensor } = require("./Sensor");

class MotionSensor extends Sensor {
  constructor(id, vendor, actions, minDistance, maxDistance) {
    super(id, vendor, actions);
    this.minDistance = minDistance;
    this.maxDistance = maxDistance;
  }

  toString() {
    return super.toString() + `, minDistance: ${this.minDistance}, maxDistance: ${this.maxDistance}`;
  }
}

module.exports = { MotionSensor };
