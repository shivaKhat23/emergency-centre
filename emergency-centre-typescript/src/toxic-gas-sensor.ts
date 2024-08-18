import Action from "./action";
import { GasType } from "./gas-type";
import Sensor from "./sensor";
import { Vendor } from "./vendor";

export default class ToxicGasSensor extends Sensor {
  private readonly concentration: number;
  private readonly gasType: GasType;

  constructor(
    id: number,
    vendor: Vendor,
    actions: Action[],
    concentration: number,
    gasType: GasType
  ) {
    super(id, vendor, actions);
    this.concentration = concentration;
    this.gasType = gasType;
  }

  getConcentration(): number {
    return this.concentration;
  }

  getGasType(): GasType {
    return this.gasType;
  }

  override toString(): string {
    return `
    ToxicGasSensor{id=${this.getId()}, vendor=${this.getVendor()}, 
    concentration=${this.concentration}, gasType=${this.gasType}}
    `;
  }
}
