// const callPolice = () => console.log("Calling police ...");
// const evacuate = () => console.log("Evacuating.....");
// const alarm = () => console.log("alarm.....");

class Action {
  performAction() {
    throw Error("Action is just an Interface, use concrete implementation");
  }
}

class CallPolice extends Action {
  performAction() {
    console.log("Calling police ...");
  }
}

class Evacuate extends Action {
  performAction() {
    console.log("Evacuating.....");
  }
}

class Alarm extends Action {
  performAction() {
    console.log("alarm.....");
  }
}

module.exports = { CallPolice, Evacuate, Alarm };
