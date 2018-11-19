import { Aircraft } from "./Aircraft";

export class F35 extends Aircraft {
  constructor(maxAmmo?: number, baseDamage?: number) {
    super(maxAmmo, baseDamage);
    this.baseDamage = 50;
    this.maxAmmo = 12;
  }
}