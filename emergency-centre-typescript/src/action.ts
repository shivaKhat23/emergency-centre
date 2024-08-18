export default interface Action {
  performAction(): void;
}

export class Evacuate implements Action {
  performAction(): void {
    console.log("Evacuate the building!!!!");
  }
}

export class CallPolice implements Action {
  performAction(): void {
    console.log("Call the Police!!!!");
  }
}

export class CallFireBrigade implements Action {
  performAction(): void {
    console.log("Call the Fire Brigade!!!!");
  }
}
