const { Component } = require("./Component");
const { Sensor } = require("./Sensor");

class Composite extends Component {
  components = [];
  constructor(name, components) {
    super();
    this.name = name;
    this.components = components;
  }

  activate() {
    console.log(this.toString());
    this.components.forEach((c) => c.activate());
  }
  toString() {
    return `name : ${this.name}`;
  }

  getSensors() {
    const sensors = [];
    for (let component of this.components) {
      if (component instanceof Sensor) {
        if (!sensors.includes(component)) {
          sensors.push(component);
        }
      } else {
        for (let sensor of component.getSensors()) {
          if (!sensors.includes(sensor)) {
            sensors.push(sensor);
          }
        }
      }
    }
    return sensors;
  }
}

module.exports = { Composite };
