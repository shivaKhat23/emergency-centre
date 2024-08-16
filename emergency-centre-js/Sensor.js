const { Component } = require("./Component");

class Sensor extends Component {
  constructor(id, vendor, actions) {
    super();
    this.id = id;
    this.vendor = vendor;
    this.actions = actions || [];
  }

  activate() {
    console.log(this.toString());
    this.actions.forEach((a) => a.performAction());
  }

  addActions(action) {
    this.actions.push(action);
  }

  toString() {
    return `${this.constructor.name} = id: ${this.id}, vendor: ${this.vendor}`;
  }
}

module.exports = { Sensor };
