export class Plant {
  private color: string;
  private waterLevel: number;
  constructor(color: string) {
    this.waterLevel = 0;
    this.color = color;
  }

  getType() {
    return this.constructor.name;
  }

  getColor() {
    return this.color;
  }

  getWaterLevel() {
    return this.waterLevel;
  }

  setWaterLevel(waterAmount: number) {
    this.waterLevel = waterAmount;
  }

  getState() {
    if (this.getType() === 'Flower') {
      if (this.getWaterLevel() < 5) {
        return `The ${this.getColor()} ${this.getType()} needs water`
      } else {
        return `The ${this.getColor()} ${this.getType()} doesnt need water`
      }
    } else if (this.getType() === 'Tree') {
      if (this.getWaterLevel() < 10) {
        return `The ${this.getColor()} ${this.getType()} needs water`
      } else {
        return `The ${this.getColor()} ${this.getType()} doesnt need water`
      }
    }
  }
}