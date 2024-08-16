const { Sensor } = require("./Sensor");

class SmokeSensor extends Sensor {
  constructor(id, vendor, actions, sensitivity) {
    super(id, vendor, actions);
    this.sensitivity = sensitivity;
  }
  toString() {
    return super.toString() + `, sensitivity: ${this.sensitivity}`;
  }
}

module.exports = { SmokeSensor };
