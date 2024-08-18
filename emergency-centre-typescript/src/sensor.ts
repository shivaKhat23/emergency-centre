import Action from "./action";
import Component from "./component";
import { Vendor } from "./vendor";

export default class Sensor implements Component {
  private readonly id: number;
  private readonly vendor: Vendor;
  private actions: Action[] = [];

  constructor(id: number, vendor: Vendor, actions: Action[]) {
    this.id = id;
    this.vendor = vendor;
    this.actions = actions;
  }

  getId(): number {
    return this.id;
  }

  getVendor(): Vendor {
    return this.vendor;
  }

  getActions(): Action[] {
    return this.actions;
  }

  addAction(action: Action) {
    this.actions.push(action);
  }

  removeAction(action: Action) {
    this.actions = this.actions.filter((a) => a !== action);
  }

  printInfo(): void {
    console.log(
      `Sendor{id=${this.id}, vendor=${this.vendor}, type=${typeof this}}`
    );
  }

  execute(): void {
    console.log(`Sensor ${this.id} is executing actions`);
    this.actions.forEach((action) => action.performAction());
  }

  toString(): string {
    return `Sensor{id=${this.id}, vendor=${this.vendor}}`;
  }
}
