import { StringedInstrument } from "./StringedInstrument";

export class ElectricGuitar extends StringedInstrument {
  constructor(stringCount: number = 6) {
    super('ElectricGuitar', stringCount);
  }
  sound(): string {
    if (this.numberOfStrings < 7) {
      return 'Twang';
    } else {
      return 'Twangg';
    }
  }
  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
}