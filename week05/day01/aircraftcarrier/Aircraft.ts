export class Aircraft {
  protected maxAmmo: number;
  protected baseDamage: number;
  protected currentAmmo: number;
  constructor(maxAmmo: number, baseDamage: number) {
    this.baseDamage = baseDamage;
    this.currentAmmo = 0;
    this.maxAmmo = maxAmmo;
  }

  fight(): number {
    this.currentAmmo = 0;
    return this.baseDamage * this.currentAmmo;
  }

  refill(refillThisManyAmmo: number): void {
    if (refillThisManyAmmo > this.maxAmmo) {
      this.currentAmmo = this.maxAmmo;
    } else {
      this.currentAmmo += refillThisManyAmmo;
    }
  }

  getBaseDamage(): number {
    return this.baseDamage;
  }

  getCurrentAmmo(): number {
    return this.currentAmmo;
  }

  getMaxAmmo(): number {
    return this.maxAmmo;
  }

  getType(): string {
    return this.constructor.name;
  }

  getStatus(): string {
    return `Type: ${this.getType()}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.baseDamage * this.currentAmmo}`;
  }

  isPriority(): boolean {
    return this.constructor.name === 'F35';
  }
}