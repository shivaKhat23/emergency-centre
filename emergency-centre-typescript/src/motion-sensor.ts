import Action from "./action";
import Sensor from "./sensor";
import { Vendor } from "./vendor";

export default class MotionSensor extends Sensor {
  private readonly minDistance: number;
  private readonly maxDistance: number;

  constructor(
    id: number,
    vendor: Vendor,
    actions: Action[],
    minDistance: number,
    maxDistance: number
  ) {
    super(id, vendor, actions);
    this.minDistance = minDistance;
    this.maxDistance = maxDistance;
  }

  override toString(): string {
    return `
    MotionSensor{id=${this.getId()}, vendor=${this.getVendor()}, 
    minDistance=${this.minDistance}, maxDistance=${this.maxDistance}}
    `;
  }
}
