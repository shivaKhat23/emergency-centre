import Component from "./component";
import { Level } from "./level";
import Sensor from "./sensor";

export default class Composite implements Component {
  private children: Component[] = [];
  private readonly level: Level;
  private readonly name: string;

  constructor(level: Level, name: string, children: Component[] = []) {
    this.level = level;
    this.name = name;
    this.children = children;
  }

  addChild(child: Component): void {
    if (!this.children.includes(child)) {
      this.children.push(child);
    }
  }

  addChildren(children: Component[]): void {
    children.forEach((child) => this.addChild(child));
  }

  remove(component: Component): void {
    this.children = this.children.filter((child) => child !== component);
  }

  getChidren(): Component[] {
    return this.children;
  }

  getSensors(): Sensor[] {
    const sensors: Sensor[] = [];
    for (let child of this.children) {
      if (child instanceof Sensor) {
        sensors.push(child);
      } else if (child instanceof Composite) {
        sensors.push(...child.getSensors());
      }
    }
    return sensors;
  }

  execute(): void {
    console.log(this.toString());
    this.children.forEach((child) => child.execute());
  }

  toString(): string {
    return `${this.level} ${this.name}`;
  }
}
