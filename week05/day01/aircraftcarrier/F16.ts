import { Aircraft } from './Aircraft';

export class F16 extends Aircraft {
  constructor(maxAmmo?: number, baseDamage?: number) {
    super(maxAmmo, baseDamage);
    this.baseDamage = 30;
    this.maxAmmo = 8;
  }
}