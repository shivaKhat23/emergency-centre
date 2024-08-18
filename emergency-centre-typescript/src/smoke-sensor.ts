import Action from "./action";
import Sensor from "./sensor";
import { Vendor } from "./vendor";

export default class SmokeSensor extends Sensor {
  private readonly sensitivity: number;

  constructor(
    id: number,
    vendor: Vendor,
    actions: Action[],
    sensitivity: number
  ) {
    super(id, vendor, actions);
    this.sensitivity = sensitivity;
  }

  get getSenstivity(): number {
    return this.sensitivity;
  }

  override toString(): string {
    return `
        SmokeSensor{id=${this.getId()}, vendor=${this.getVendor()}, 
        sensitivity=${this.sensitivity}}
        `;
  }
}
