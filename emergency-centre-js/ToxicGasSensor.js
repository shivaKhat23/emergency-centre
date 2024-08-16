const { Sensor } = require("./Sensor");

class ToxicGasSensor extends Sensor {
  constructor(id, vendor, actions, thresholdConcentration) {
    super(id, vendor, actions);
    this.thresholdConcentration = thresholdConcentration;
  }
  toString() {
    return super.toString() + `, thresholdConcentration: ${this.thresholdConcentration}`;
  }
}

module.exports = { ToxicGasSensor };
